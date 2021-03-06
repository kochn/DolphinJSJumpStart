package masterdetail;

import groovyx.gpars.dataflow.DataflowQueue;
import org.opendolphin.core.Attribute;
import org.opendolphin.core.ModelStore;
import org.opendolphin.core.comm.Command;
import org.opendolphin.core.comm.ValueChangedCommand;
import org.opendolphin.core.server.DTO;
import org.opendolphin.core.server.EventBus;
import org.opendolphin.core.server.ServerAttribute;
import org.opendolphin.core.server.ServerPresentationModel;
import org.opendolphin.core.server.Slot;
import org.opendolphin.core.server.action.DolphinServerAction;
import org.opendolphin.core.server.comm.ActionRegistry;
import org.opendolphin.core.server.comm.CommandHandler;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class TutorialAction extends DolphinServerAction {

    private static final EventBus eventBus = new EventBus();

    private final DataflowQueue<DTO> valueQueue;

    final ILogService service;

    public TutorialAction(ILogService service) {
        this.service = service;
        valueQueue = new DataflowQueue<DTO>();
        eventBus.subscribe(valueQueue);
    }

    private int count = 0;

    @Override
    public void registerIn(ActionRegistry actionRegistry) {

        // read
        actionRegistry.register("longPoll", new CommandHandler<Command>() {
            @Override
            public void handleCommand(Command command, List<Command> response) {
                try {
                    System.err.println(" <<< "+TutorialAction.this);
                    System.err.println(" <<< VQ "+System.identityHashCode(valueQueue));
                    System.err.println(" <<< EB "+System.identityHashCode(eventBus));
                    final DTO dto = valueQueue.getVal(60, TimeUnit.SECONDS);

                    System.err.println(" <<< reading dto");

                    if (dto != null) {
                        final int nrOfSlots = dto.getSlots().size();
                        System.err.println(" <<< dto "+nrOfSlots);

                        if (nrOfSlots == 1) {
                            final Slot slot = dto.getSlots().get(0);
                            if ("valueChange".equals(slot.getPropertyName())) {
                                final ModelStore modelStore = getServerDolphin().getServerModelStore();
                                final List<Attribute> attributes = modelStore.findAllAttributesByQualifier(slot.getQualifier());
                                if (attributes.size() > 0) {
                                    changeValue((ServerAttribute) attributes.get(0), slot.getValue());
                                    System.err.println(" <<< value changed");
                                } else {
                                    System.err.println("No attributes found for qualifier "+slot.getQualifier());
                                }
                            }
                        } else if (nrOfSlots == 2) {
                            System.err.println(" <<< pm add");
                            presentationModel(null, "weather", dto);
                        }
                    }

                    System.err.println();

                } catch (Exception e) {
                    System.err.println("ERRORR");
                    e.printStackTrace();
                }
            }
        });

        // edit - change
        actionRegistry.register(ValueChangedCommand.class, new CommandHandler<Command>() {
            @Override
            public void handleCommand(Command command, List<Command> response) {
                System.err.println(">>> "+TutorialAction.this);
                System.err.println(">>> VQ "+System.identityHashCode(valueQueue));
                System.err.println(">>> EB "+System.identityHashCode(eventBus));
                System.err.println(">>> "+command);

                final ServerPresentationModel presentationModel = getServerDolphin().getAt("weatherMold");
                if (presentationModel != null) {
                    ValueChangedCommand valueChangedCommand = (ValueChangedCommand) command;
                    final ServerAttribute locationAttr = presentationModel.getAt("location");
                    final ServerAttribute temperatureAttr = presentationModel.getAt("temperature");

                    ServerAttribute matchingAttr = null;
                    if (valueChangedCommand.getAttributeId() == locationAttr.getId()) {
                        matchingAttr = locationAttr;
                    }
                    if (valueChangedCommand.getAttributeId() == temperatureAttr.getId()) {
                        matchingAttr = temperatureAttr;
                    }

                    if (matchingAttr != null) {
                        System.err.println(">>> publishing value change: "+matchingAttr.getQualifier());
                        eventBus.publish(valueQueue, new DTO(
                                new Slot("valueChange", matchingAttr.getValue(), matchingAttr.getQualifier())
                        ));
                    }
                }

                System.err.println();

            }
        });

        // edit - add
        actionRegistry.register("add", new CommandHandler<Command>() {
            @Override
            public void handleCommand(Command command, List<Command> response) {
                System.err.println(">>> "+TutorialAction.this);
                System.err.println(">>> VQ "+System.identityHashCode(valueQueue));
                System.err.println(">>> EB "+System.identityHashCode(eventBus));
                System.err.println(">>> "+command);
                count++;
                final DTO dto = new DTO(
                        new Slot("location", "unknown", "weather." + count + ".location"),
                        new Slot("temperature", "0", "weather." + count + ".temperature")
                );
                presentationModel("weather." + count, "weather", dto);

                System.err.println(">>> publishing add");
                eventBus.publish(valueQueue, dto);

                System.err.println();
            }
        });
    }

}
