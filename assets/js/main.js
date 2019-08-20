const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


class DatePicker {

  constructor() {};
  insertMonths() {
    const monthsSel = document.querySelector('#month');
    let option = null;

    monthArray.map((month) => {
      option = document.createElement('option');
      option.textContent = month;
      monthsSel.appendChild(option);
    });
  }
}

const test = new DatePicker();
test.insertMonths();