
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
    const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsSel = document.querySelector('#month');
    let option = null;

    monthArray.map((month) => {
      option = document.createElement('option');
      option.value = month;
      option.textContent = month;
      monthsSel.appendChild(option);
    });

    const currentMoment = this.calcCurrentMoment();    
    monthsSel.value = currentMoment.format('MMMM');
  }

  // To create a list of years, the selected value will always be current year
  insertYears() {
    const yearSelect = document.querySelector('#year');
    let option = null;
    const currentYear = this.calcCurrentMoment();
    const curYearNum = parseInt(currentYear.format('YYYY'), 10);
 
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
    this.calculateDates(newDate)
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

  // Calculating dates based on selection to be used to render the date grid
  calculateDates(date) {
    const dateFormat = moment(date, 'MMMM YYYY');

    const dateObj = {
      startOfMonth : dateFormat.startOf('month').format('d'),      
      daysInMonth : dateFormat.daysInMonth(),
      isLeapYear : dateFormat.isLeapYear(date),
      month: dateFormat.format('MMMM'),
      year: dateFormat.format('YYYY')
    };

    this.renderDateGrid(dateObj);
  }

  // Rendering the date grid
  renderDateGrid(dateObj) {

    
    const gridBody = document.querySelector('#dateGrid');

    if(typeof(gridBody) != 'undefined' && gridBody != null){
      while (gridBody.firstChild) {
        gridBody.removeChild(gridBody.firstChild);
      }
    } else{
        console.log('Element does not exist!');
    }

    const start = parseInt(dateObj.startOfMonth, 10);    
    let dayCounter = parseInt(dateObj.daysInMonth, 10);
    let runningTotal = 0;
    let dateTotal = 1;
    const maxRows = Math.floor((dayCounter + start) / 7);
    
    console.log(dayCounter);
    console.log(maxRows)
    for (let i = 0; i < maxRows; i++) {
      const row = document.createElement('tr');
      gridBody.appendChild(row);
   
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (runningTotal < start) {
          cell.textContent = 'b';
          runningTotal++;
        } else if (dateTotal <= dayCounter)  {
          cell.textContent = dateTotal;
          dateTotal++;
        } else {
          cell.textContent = 'b';
        }
        
        row.appendChild(cell);

        if (j > 6) {
            break;
        }
      }


    }

  }
}




// initiate class on load
window.addEventListener("load", () => {
  
  const test = new DatePicker();
  
});


