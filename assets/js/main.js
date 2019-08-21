
class DatePicker {

  constructor() {
    this.insertMonths();
    this.insertYears();
    this.addEvent();
  }

  // A function to calculate current moment, which will return an object which can be formatted later depending on our needs
  calcCurrentMoment() {
    return moment();
  }

  // To create a list of months, the selected value will always be current month
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

    const currentMoment = this.calcCurrentMoment();
    console.log(currentMoment)
    monthsSel.value = currentMoment.format('MMMM');
  }

  // To create a list of years, the selected value will always be current year
  insertYears() {
    const yearSelect = document.querySelector('#year');
    let option = null;
    const currentYear = this.calcCurrentMoment();
    const curYearNum = parseInt(currentYear.format('YYYY'), 10);
    //console.log(curYearNum);
    for (let i = curYearNum; i <= curYearNum + 5; i++) {
      option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
  }

  // Here we are fetching the date from the selects
  selectedDate(selects) {
    let newDate = '';

    for (let select of selects) {
      newDate = newDate + ' ' + select.value;      
    }

    console.log(newDate);
  }

  // Adding eventlisteners to the select items
  addEvent() {
    const selects = document.getElementsByTagName('select');
    
    // if a person doesnt actually select a date, just use the default date
    this.selectedDate(selects);

    for (let select of selects) {
      select.addEventListener('change', () => {
        this.selectedDate(selects);
      });
      
    }   
  }

  // Calculating dates based on selection
  calculateDates() {

  }
}

// initiate class on load
window.addEventListener("load", () => {
  
  const test = new DatePicker();
  
});


