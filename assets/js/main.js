
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
      month: dateFormat.format('MMMM'),
      year: dateFormat.format('YYYY')
    };

    this.renderDateGrid(dateObj);
  }

  calcBookingDate(dateObj, day) {
    console.log(day);
    const bookingField = document.querySelector('#booking-date');
    bookingField.value = '';
    const finalDate = `${day} ${dateObj.month} ${dateObj.year}`;  
    bookingField.value = finalDate;
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
    let maxRows = 0;


    if (dayCounter > 30 && start >= 5) {
      maxRows = 6;
    } else if (dayCounter >= 30 && start >= 6) {
      maxRows = 6;
    } 
    else {
      maxRows = 5;
    }

    for (let i = 0; i < maxRows; i++) {
      const row = document.createElement('tr');
      gridBody.appendChild(row);
   
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (runningTotal < start) {
          cell.classList.add('not_in_month');
          runningTotal++;
        } else if (dateTotal <= dayCounter)  {
          cell.classList.add('in_month');

          cell.textContent = dateTotal;
          cell.addEventListener('click', event => {
            let day = cell.textContent;
            console.log(day, 'hello');
            this.calcBookingDate(dateObj, day);
          });
          dateTotal++;
        } else {
          cell.classList.add('not_in_month');
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


