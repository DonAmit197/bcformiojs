Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.options.vpat) { ;
__p += '\r\n  <span tabindex="-1" class="visually-hidden" id="invisible-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"></span>\r\n';
 } ;
__p += '\r\n';
 if (!ctx.self.imageUpload) { ;
__p += '\r\n  ';
 if (ctx.options.vpat) { ;
__p += '\r\n    <div>' +
((__t = ((!ctx.component.filePattern || ctx.component.filePattern === '*') ? 'Any file types are allowed' : ctx.t('Allowed file types: ') + ctx.component.filePattern)) == null ? '' : __t) +
'</div>\r\n  ';
 } ;
__p += '\r\n  <ul class="list-group list-group-striped">\r\n    <li class="list-group-item list-group-header hidden-xs hidden-sm">\r\n      <div class="row">\r\n        ';
 if (!ctx.disabled) { ;
__p += '\r\n          <div class="col-md-1"></div>\r\n        ';
 } ;
__p += '\r\n        <div class="col-md-';
 if (ctx.self.hasTypes) { ;
__p += '7';
 } else { ;
__p += '9';
 } ;
__p += '"><strong>' +
((__t = (ctx.t('File Name'))) == null ? '' : __t) +
'</strong></div>\r\n        <div class="col-md-2"><strong>' +
((__t = (ctx.t('Size'))) == null ? '' : __t) +
'</strong></div>\r\n        ';
 if (ctx.self.hasTypes) { ;
__p += '\r\n          <div class="col-md-2"><strong>' +
((__t = (ctx.t('Type'))) == null ? '' : __t) +
'</strong></div>\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    </li>\r\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\r\n      <li class="list-group-item">\r\n        <div class="row">\r\n          ';
 if (!ctx.disabled) { ;
__p += '\r\n            <div class="col-md-1"><i tabindex="0" class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i></div>\r\n          ';
 } ;
__p += '\r\n          <div class="col-md-';
 if (ctx.self.hasTypes) { ;
__p += '7';
 } else { ;
__p += '9';
 } ;
__p += '">\r\n            ';
 if (ctx.component.uploadOnly) { ;
__p += '\r\n              ' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\r\n            ';
 } else { ;
__p += '\r\n              <a href="' +
((__t = (file.url || '#')) == null ? '' : __t) +
'" target="_blank" ref="fileLink">\r\n                <span class="visually-hidden">' +
((__t = (ctx.t('Press to open '))) == null ? '' : __t) +
'</span>' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'\r\n              </a>\r\n            ';
 } ;
__p += '\r\n          </div>\r\n          <div class="col-md-2">' +
((__t = (ctx.fileSize(file.size))) == null ? '' : __t) +
'</div>\r\n          ';
 if (ctx.self.hasTypes && !ctx.disabled) { ;
__p += '\r\n            <div class="col-md-2">\r\n              <select class="file-type" ref="fileType">\r\n                ';
 ctx.component.fileTypes.map(function(type) { ;
__p += '\r\n                  <option class="test" value="' +
((__t = ( type.value )) == null ? '' : __t) +
'" ';
 if (type.label === file.fileType) { ;
__p += 'selected="selected"';
 } ;
__p += '>' +
((__t = (ctx.t(type.label))) == null ? '' : __t) +
'</option>\r\n                ';
 }); ;
__p += '\r\n              </select>\r\n            </div>\r\n          ';
 } ;
__p += '\r\n          ';
 if (ctx.self.hasTypes && ctx.disabled) { ;
__p += '\r\n          <div class="col-md-2">' +
((__t = (file.fileType)) == null ? '' : __t) +
'</div>\r\n          ';
 } ;
__p += '\r\n        </div>\r\n      </li>\r\n    ';
 }) ;
__p += '\r\n  </ul>\r\n';
 } else { ;
__p += '\r\n  <div>\r\n    ';
 ctx.files.forEach(function(file) { ;
__p += '\r\n      <div>\r\n        <span>\r\n          <img ref="fileImage" src="" alt="' +
((__t = (file.originalName || file.name)) == null ? '' : __t) +
'" style="width:' +
((__t = (ctx.component.imageSize)) == null ? '' : __t) +
'px">\r\n          ';
 if (!ctx.disabled) { ;
__p += '\r\n            <i tabindex="0" class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="removeLink"></i>\r\n          ';
 } ;
__p += '\r\n        </span>\r\n      </div>\r\n    ';
 }) ;
__p += '\r\n  </div>\r\n';
 } ;
__p += '\r\n';
 if (!ctx.disabled && (ctx.component.multiple || !ctx.files.length)) { ;
__p += '\r\n  ';
 if (ctx.self.useWebViewCamera) { ;
__p += '\r\n    <div class="fileSelector">\r\n      <button class="btn btn-primary" ref="galleryButton"><i class="fa fa-book"></i> ' +
((__t = (ctx.t('Gallery'))) == null ? '' : __t) +
'</button>\r\n      <button class="btn btn-primary" ref="cameraButton"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Camera'))) == null ? '' : __t) +
'</button>\r\n    </div>\r\n  ';
 } else if (!ctx.self.cameraMode) { ;
__p += '\r\n    <div class="fileSelector" ref="fileDrop" ' +
((__t = (ctx.fileDropHidden ?'hidden' : '')) == null ? '' : __t) +
'>\r\n      <i class="' +
((__t = (ctx.iconClass('cloud-upload'))) == null ? '' : __t) +
'"></i> ' +
((__t = (ctx.t('Drop files to attach,'))) == null ? '' : __t) +
'\r\n        ';
 if (ctx.self.imageUpload && ctx.component.webcam) { ;
__p += '\r\n          <a href="#" ref="toggleCameraMode"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('use camera'))) == null ? '' : __t) +
'</a>\r\n        ';
 } ;
__p += '\r\n        ' +
((__t = (ctx.t('or'))) == null ? '' : __t) +
'\r\n        <a href="#" ref="fileBrowse" class="browse">\r\n          ' +
((__t = (ctx.t('browse'))) == null ? '' : __t) +
'\r\n          <span class="visually-hidden">\r\n            ' +
((__t = (ctx.t('Browse to attach file for ' + ctx.component.label + '. ' + 
            (ctx.component.description ? ctx.component.description + '. ' : '') + 
            ((!ctx.component.filePattern || ctx.component.filePattern === '*') ? 'Any file types are allowed' : ctx.t('Allowed file types: ') + ctx.component.filePattern)))) == null ? '' : __t) +
'\r\n          </span>\r\n        </a>\r\n      <div ref="fileProcessingLoader" class="loader-wrapper">\r\n        <div class="loader text-center"></div>\r\n      </div>\r\n    </div>\r\n  ';
 } else { ;
__p += '\r\n    <div class="video-container">\r\n      <video class="video" autoplay="true" ref="videoPlayer" tabindex="-1"></video>\r\n    </div>\r\n    <button class="btn btn-primary" ref="takePictureButton"><i class="fa fa-camera"></i> ' +
((__t = (ctx.t('Take Picture'))) == null ? '' : __t) +
'</button>\r\n    <button class="btn btn-primary" ref="toggleCameraMode">' +
((__t = (ctx.t('Switch to file upload'))) == null ? '' : __t) +
'</button>\r\n  ';
 } ;
__p += '\r\n';
 } ;
__p += '\r\n';
 ctx.statuses.forEach(function(status) { ;
__p += '\r\n  <div class="file ' +
((__t = (ctx.statuses.status === 'error' ? ' has-error' : '')) == null ? '' : __t) +
'">\r\n    <div class="row">\r\n      <div class="fileName col-form-label col-sm-10">' +
((__t = (status.originalName)) == null ? '' : __t) +
'\r\n        <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'" ref="fileStatusRemove">\r\n          <span class="visually-hidden">' +
((__t = (ctx.t('Remove button. Press to remove ' + status.originalName || status.name + '.'))) == null ? '' : __t) +
'</span>\r\n          <span class="visually-hidden">' +
((__t = (status.message ? status.message.replace(';', '.') : '')) == null ? '' : __t) +
'</span>\r\n        </i>\r\n      </div>\r\n      <div class="fileSize col-form-label col-sm-2 text-end">' +
((__t = (ctx.fileSize(status.size))) == null ? '' : __t) +
'</div>\r\n    </div>\r\n    <div class="row">\r\n      <div class="col-sm-12">\r\n        ';
 if (status.status === 'progress') { ;
__p += '\r\n          <div class="progress">\r\n            <div class="progress-bar" role="progressbar" aria-valuenow="' +
((__t = (status.progress)) == null ? '' : __t) +
'" aria-valuemin="0" aria-valuemax="100" style="width: ' +
((__t = (status.progress)) == null ? '' : __t) +
'%">\r\n              <span class="visually-hidden">' +
((__t = (status.progress)) == null ? '' : __t) +
'% ' +
((__t = (ctx.t('Complete'))) == null ? '' : __t) +
'</span>\r\n            </div>\r\n          </div>\r\n        ';
 } else if (status.status === 'error') { ;
__p += '\r\n          <div class="alert alert-danger bg-' +
((__t = (status.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\r\n        ';
 } else { ;
__p += '\r\n          <div class="bg-' +
((__t = (status.status)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(status.message))) == null ? '' : __t) +
'</div>\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    </div>\r\n  </div>\r\n';
 }) ;
__p += '\r\n';
 if (!ctx.component.storage || ctx.support.hasWarning) { ;
__p += '\r\n  <div class="alert alert-warning">\r\n    ';
 if (!ctx.component.storage) { ;
__p += '\r\n      <p>' +
((__t = (ctx.t('No storage has been set for this field. File uploads are disabled until storage is set up.'))) == null ? '' : __t) +
'</p>\r\n    ';
 } ;
__p += '\r\n    ';
 if (!ctx.support.filereader) { ;
__p += '\r\n      <p>' +
((__t = (ctx.t('File API & FileReader API not supported.'))) == null ? '' : __t) +
'</p>\r\n    ';
 } ;
__p += '\r\n    ';
 if (!ctx.support.formdata) { ;
__p += '\r\n      <p>' +
((__t = (ctx.t("XHR2's FormData is not supported."))) == null ? '' : __t) +
'</p>\r\n    ';
 } ;
__p += '\r\n    ';
 if (!ctx.support.progress) { ;
__p += '\r\n      <p>' +
((__t = (ctx.t("XHR2's upload progress isn't supported."))) == null ? '' : __t) +
'</p>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n';
 } ;
__p += '\r\n';
return __p
}