"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'test panel',
  name: 'testPanel',
  path: 'testpanel',
  type: 'form',
  display: 'form',
  components: [{
    label: 'Text Field',
    tableView: true,
    validate: {
      minLength: 8
    },
    key: 'textField1',
    type: 'textfield',
    input: true
  }, {
    collapsible: true,
    key: 'panel',
    type: 'panel',
    label: 'Panel',
    collapsed: false,
    input: false,
    tableView: false,
    components: [{
      label: 'Text Field',
      tableView: true,
      validate: {
        required: true
      },
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
      validate: {
        min: 100
      },
      key: 'number',
      type: 'number',
      input: true
    }]
  }, {
    label: 'Submit',
    showValidations: false,
    tableView: false,
    key: 'submit',
    type: 'button',
    input: true,
    saveOnEnter: false
  }],
  created: '2022-12-21T09:39:36.394Z',
  modified: '2022-12-21T12:37:15.497Z',
  machineName: 'uljpnhxgtzkilfa:testPanel'
};
exports["default"] = _default;