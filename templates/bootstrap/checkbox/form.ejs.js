Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="form-check checkbox">\r\n  <label class="' +
((__t = (ctx.input.labelClass)) == null ? '' : __t) +
' form-check-label">\r\n    <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n      ref="input"\r\n      ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n      ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n      ';
 } ;
__p += '\r\n      ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\r\n      aria-required="' +
((__t = (ctx.component.validate.required)) == null ? '' : __t) +
'"\r\n      ';
 if (ctx.component.description) { ;
__p += '\r\n      aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n      ';
 } ;
__p += '\r\n      >\r\n    ';
 if (!ctx.self.labelIsHidden()) { ;
__p += '<span>' +
((__t = (ctx.input.label)) == null ? '' : __t) +
'</span>';
 } ;
__p += '\r\n    ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\r\n    </' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n  </label>\r\n  ';
 if (ctx.component.tooltip) { ;
__p += '\r\n    <i ref="tooltip" tabindex="0" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'"></i>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}