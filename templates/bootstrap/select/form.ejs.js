Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<select\r\n  ref="' +
((__t = (ctx.input.ref ? ctx.input.ref : 'selectContainer')) == null ? '' : __t) +
'"\r\n  ' +
((__t = ( ctx.input.multiple ? 'multiple' : '' )) == null ? '' : __t) +
'\r\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n  ';
 if (!ctx.input.attr.id) { ;
__p += '\r\n  id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.component.description) { ;
__p += '\r\n  aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n  aria-required="' +
((__t = (ctx.input.ref === 'selectContainer' || !ctx.input.ref ? ctx.input.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\r\n>' +
((__t = (ctx.selectOptions)) == null ? '' : __t) +
'</select>\r\n<input type="text"\r\n       class="formio-select-autocomplete-input"\r\n       ref="autocompleteInput"\r\n       ';
 if (ctx.input.attr.autocomplete) { ;
__p += '\r\n       autocomplete="' +
((__t = (ctx.input.attr.autocomplete)) == null ? '' : __t) +
'"\r\n       ';
 } ;
__p += '\r\n       tabindex="-1"\r\n       aria-label="' +
((__t = (ctx.t('autocomplete'))) == null ? '' : __t) +
'"\r\n/>\r\n';
return __p
}