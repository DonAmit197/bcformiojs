Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div id="' +
((__t = (ctx.groupId)) == null ? '' : __t) +
'" class="accordion builder-sidebar' +
((__t = (ctx.scrollEnabled ? ' builder-sidebar_scroll' : '')) == null ? '' : __t) +
'" ref="sidebar">\r\n  <input class="form-control builder-sidebar_search" type="search" ref="sidebar-search" placeholder="' +
((__t = (ctx.t('Search field(s)'))) == null ? '' : __t) +
'" />\r\n  <div ref="sidebar-groups">\r\n    ';
 ctx.groups.forEach(function(group) { ;
__p += '\r\n      ' +
((__t = ( group )) == null ? '' : __t) +
'\r\n    ';
 }) ;
__p += '\r\n  </div>\r\n</div>\r\n';
return __p
}