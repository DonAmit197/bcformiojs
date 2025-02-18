"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  type: 'form',
  components: [{
    label: 'Data Grid',
    disableAddingRemovingRows: true,
    reorder: false,
    addAnotherPosition: 'bottom',
    layoutFixed: false,
    enableRowGroups: true,
    initEmpty: false,
    tableView: false,
    defaultValue: [{
      textField: '',
      number: ''
    }],
    key: 'dataGrid',
    type: 'datagrid',
    rowGroups: [{
      label: 'group1',
      numberOfRows: 2
    }, {
      label: 'group2',
      numberOfRows: 3
    }],
    groupToggle: true,
    input: true,
    components: [{
      label: 'Text Field',
      tableView: true,
      key: 'textField',
      type: 'textfield',
      input: true
    }, {
      label: 'Number',
      mask: false,
      tableView: false,
      delimiter: false,
      requireDecimal: false,
      inputFormat: 'plain',
      truncateMultipleSpaces: false,
      key: 'number',
      type: 'number',
      input: true
    }]
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  _vid: 0,
  title: 'test',
  display: 'form',
  name: 'test',
  path: 'test',
  project: '6152d9c4daa2ef2742d17c07',
  created: '2022-12-19T10:14:02.292Z',
  modified: '2022-12-19T13:19:37.649Z',
  machineName: 'njwzrqvnlksevej:test'
};
exports["default"] = _default;