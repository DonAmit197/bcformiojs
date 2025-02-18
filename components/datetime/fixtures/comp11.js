"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: '5628',
  name: '5628',
  path: '5628',
  type: 'form',
  display: 'form',
  components: [{
    label: 'Date / Time',
    format: 'dd-MM-yyyy',
    tableView: false,
    datePicker: {
      disableWeekends: false,
      disableWeekdays: false
    },
    enableTime: false,
    enableMinDateInput: false,
    enableMaxDateInput: false,
    key: 'dateTime',
    type: 'datetime',
    input: true,
    widget: {
      type: 'calendar',
      displayInTimezone: 'viewer',
      locale: 'en',
      useLocaleSettings: false,
      allowInput: true,
      mode: 'single',
      enableTime: false,
      noCalendar: false,
      format: 'dd-MM-yyyy',
      hourIncrement: 1,
      minuteIncrement: 1,
      'time_24hr': false,
      minDate: null,
      disableWeekends: false,
      disableWeekdays: false,
      maxDate: null
    }
  }, {
    type: 'button',
    label: 'Submit',
    key: 'submit',
    disableOnInvalid: true,
    input: true,
    tableView: false
  }],
  created: '2022-11-16T10:06:19.656Z',
  modified: '2022-11-16T13:25:55.044Z',
  machineName: 'aabvnyfwnstnovd:5628'
};
exports["default"] = _default;