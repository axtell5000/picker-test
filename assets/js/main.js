
class DatePicker {

  constructor() {
    this.insertMonths();
    this.insertYears();
  }

  insertMonths() {
    const monthArray = ['Januar', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
    const m = moment();
    console.log(m);
  }
}

// initiate class on load
window.addEventListener("load", () => {
  
  const test = new DatePicker();
  
});


