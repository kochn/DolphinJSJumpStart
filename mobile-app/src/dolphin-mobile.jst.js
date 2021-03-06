define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/layouts/main.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"content box-flex\"/>\n\n";
  };

this["JST"]["app/templates/views/form.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div>\n    <label for=\"fullname\">Full Name * :</label>\n    <input type=\"text\" id=\"fullname\" name=\"fullname\" data-required=\"true\"/>\n</div>\n\n<div>\n    <label for=\"email\">Email * :</label>\n    <input type=\"text\" id=\"email\" name=\"email\" data-trigger=\"change\" data-required=\"true\" data-type=\"email\"/>\n</div>\n\n<div>\n    <label for=\"website\">Website :</label>\n    <input type=\"text\" id=\"website\" name=\"website\" data-trigger=\"change\" data-type=\"url\"/>\n</div>\n<div>\n    <label for=\"message\">Message (20 chars min, 200 max) :</label>\n    <textarea id=\"message\" name=\"message\" data-trigger=\"keyup\" data-rangelength=\"[20,200]\"></textarea>\n</div>";
  };

this["JST"]["app/templates/views/home.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"content\">Header</div>";
  };

this["JST"]["app/templates/views/input-view.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<span class=\"help-block\">Type something in the input text to test the binding with the label.</span>\n<input id=\"tempInput\" type=\"text\" placeholder=\"Temperature...\"/>\n<input id=\"humidityInput\" type=\"text\" placeholder=\"Humidity...\"/>\n<button id=\"addButton\" class=\"btn btn-primary\">Add</button>\n<div id=\"list\"></div>\n";
  };

this["JST"]["app/templates/views/weather-list-item.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"ui-list-item-title\">";
  if (stack1 = helpers.location) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.location; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"ui-list-item-sub-title\">";
  if (stack1 = helpers.temperature) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.temperature; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n";
  return buffer;
  };

this["JST"]["app/templates/views/wizard.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div class=\"wizard-header\">Title</div>\n<div class=\"wizard-content box-flex\"></div>\n<div class=\"ui-button-bar\"></div>\n";
  };

this["JST"]["app/templates/widgets/button.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"button-icon\"><span><i class=\"icon-";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i></span></div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"button-title\"><span>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, depth0.icon, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, depth0.title, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  };

this["JST"]["app/templates/widgets/list-empty.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<div>\n    TODO EMPTY\n</div>";
  };

this["JST"]["app/templates/widgets/list-item.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"ui-list-item-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"ui-list-item-sub-title\">";
  if (stack1 = helpers.subTitle) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.subTitle; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  };

this["JST"]["app/templates/widgets/msgbox.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"msg-box-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n<div class=\"msg-box-text box-flex\">";
  if (stack1 = helpers.text) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.text; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n<div class=\"msg-box-buttonbar\"></div>";
  return buffer;
  };

this["JST"]["app/templates/widgets/networkButton.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"network-button-spinner\"></div>\n\n<div class=\"network-button-title\"><span><i class=\"icon-";
  if (stack1 = helpers.titleIcon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.titleIcon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i> ";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></div>\n\n<div class=\"network-button-icon\"><span><i class=\"icon-";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i></span></div>";
  return buffer;
  };

this["JST"]["app/templates/widgets/search-box.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"ui-search-box-inner box-flex\">\n    <input type=\"text\" class=\"search-field\" name=\"search\" placeholder=\"";
  if (stack1 = helpers.placeholder) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.placeholder; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" autocomplete=\"off\" autocorrect=\"off\"/>\n</div>\n";
  return buffer;
  };

this["JST"]["app/templates/widgets/tab-button.html"] = function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"tab-icon\">\n    <i class=\"icon-";
  if (stack1 = helpers.icon) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.icon; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"></i>\n</div>\n<div class=\"tab-title\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>";
  return buffer;
  };

return this["JST"];

});