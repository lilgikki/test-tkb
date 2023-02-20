import { dataJson } from './data.js';

const data = JSON.parse(dataJson);

const table = document.querySelector('.people__table');
const form = document.getElementById('form');

const buttonAdd = form.querySelector('.people__form-button--add');
const buttonSubmit = form.querySelector('.people__form-button--submit');

const rowTemplate = document.getElementById('table-row').content;
const rowTable = rowTemplate.querySelector('.people__row');

const deleteTableRows = () => {
  const rows = document.querySelectorAll('.people__row');
  for (let i = 0; i < rows.length; i++) {
    rows[i].parentNode.removeChild(rows[i]);
  }
};

const rowRender = () => {
  data.forEach(el => {
    const row = rowTable.cloneNode(true);
    row.querySelector('.people__item--name').textContent = el.name;
    row.querySelector('.people__item--job').textContent = el.job;
    row.querySelector('.people__item--age').textContent = el.age;
    row.querySelector('.people__item--about').textContent = el.competencies;
    table.append(row);
  })
};

const loadForm = (cb) => {
  rowRender();

  setTimeout(cb, 100);
};

const deleteRow = () => {
  const tableButtons = document.querySelectorAll('.people__button');

  tableButtons.forEach((button, i) => {
    const deleteFunc = () => {
      deleteTableRows();

      data.splice(i, 1);
      rowRender();

      deleteRow();
    };

    button.addEventListener('click', deleteFunc);
  })
};

const addRow = () => {
  buttonAdd.addEventListener('click', () => {
    const formData = new FormData(form);
    const formName = formData.get('form-name');
    const formJob = formData.get('form-job');
    const formAge = formData.get('form-age');
    const formAbout = formData.get('form-about');[0-9]
    if (!(/[0-9]/.test(formName)) && formAge && formAbout) {
      data.push({
        "name": formName,
        "job": formJob,
        "age": formAge,
        "competencies": formAbout
      })
      deleteTableRows();
      rowRender();
      deleteRow();
      form.reset();
    }
  })
};

const submitTable = () => {
  buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(JSON.stringify(data));
  })
};

export {loadForm, deleteRow, addRow, submitTable};
