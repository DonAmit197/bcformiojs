Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="editgrid-table-container">\r\n  <div class="table-responsive">\r\n    <table class="table\r\n      ' +
((__t = ( ctx.component.striped ? 'table-striped' : '')) == null ? '' : __t) +
'\r\n      ' +
((__t = ( ctx.component.bordered ? 'table-bordered' : '')) == null ? '' : __t) +
'\r\n      ' +
((__t = ( ctx.component.hover ? 'table-hover' : '')) == null ? '' : __t) +
'\r\n      ' +
((__t = ( ctx.component.condensed ? 'table-sm' : '')) == null ? '' : __t) +
'\r\n    ">\r\n      ';
 if (ctx.header) { ;
__p += '\r\n      <thead class="editgrid-table-head">\r\n        ' +
((__t = (ctx.header)) == null ? '' : __t) +
'\r\n      </thead>\r\n      ';
 } ;
__p += '\r\n      <tbody class="editgrid-table-body">\r\n        ';
 ctx.rows.forEach(function(row, rowIndex) { ;
__p += '\r\n        <tr ref="' +
((__t = (ctx.ref.row)) == null ? '' : __t) +
'">\r\n          ' +
((__t = (row)) == null ? '' : __t) +
'\r\n          ';
 if (ctx.openRows[rowIndex] && !ctx.readOnly) { ;
__p += '\r\n            <td class="editgrid-table-column">\r\n              <div class="editgrid-actions">\r\n                <button class="btn btn-primary" ref="' +
((__t = (ctx.ref.saveRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.saveRow || 'Save', { _userInput: true }))) == null ? '' : __t) +
'</button>\r\n                ';
 if (ctx.component.removeRow) { ;
__p += '\r\n                <button class="btn btn-danger" ref="' +
((__t = (ctx.ref.cancelRow)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.removeRow || 'Cancel', { _userInput: true }))) == null ? '' : __t) +
'</button>\r\n                ';
 } ;
__p += '\r\n              </div>\r\n            </td>\r\n          ';
 } ;
__p += '\r\n          ';
 if (ctx.errors[rowIndex]) { ;
__p += '\r\n          <td class="editgrid-table-column">\r\n            <div class="has-error">\r\n              <div class="editgrid-row-error help-block">\r\n                ' +
((__t = (ctx.errors[rowIndex])) == null ? '' : __t) +
'\r\n              </div>\r\n            </div>\r\n          </td>\r\n          ';
 } ;
__p += '\r\n        </tr>\r\n        ';
 }) ;
__p += '\r\n      </tbody>\r\n      ';
 if (ctx.footer) { ;
__p += '\r\n      <tfoot>\r\n        <tr>\r\n          ' +
((__t = (ctx.footer)) == null ? '' : __t) +
'\r\n        </tr>\r\n      <tfoot>\r\n      ';
 } ;
__p += '\r\n    </table>\r\n  </div>\r\n</div>\r\n';
 if (!ctx.readOnly && ctx.hasAddButton) { ;
__p += '\r\n<button class="btn btn-primary" ref="' +
((__t = (ctx.ref.addRow)) == null ? '' : __t) +
'">\r\n  <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\r\n  ' +
((__t = (ctx.t(ctx.component.addAnother || 'Add Another', { _userInput: true }))) == null ? '' : __t) +
'\r\n</button>\r\n';
 } ;
__p += '\r\n';
return __p
}