const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


class DatePicker {

  constructor() {
    this.insertMonths();
    this.insertYears();
  };
  insertMonths() {
    const monthsSel = document.querySelector('#month');
    let option = null;

    monthArray.map((month) => {
      option = document.createElement('option');
      option.value = month;
      option.textContent = month;
      monthsSel.appendChild(option);
    });
  }

  insertYears() {
    const yearSelect = document.querySelector('#year');
  }
}

// iniate class on load
window.addEventListener("load", () => {
  const test = new DatePicker();
});


