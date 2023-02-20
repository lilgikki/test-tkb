import {loadForm, deleteRow, addRow, submitTable} from './form.js';

window.addEventListener('DOMContentLoaded', () => {
  loadForm(deleteRow);
  addRow();
  submitTable();
});
