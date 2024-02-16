// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const localeSettings = {};
  dayjs.locale(localeSettings);

$(function () {
  const cHour = dayjs().format('H');

function colors(){
  $('.time-block').each(function() {
    const bHour = parseInt(this.id);
    if (bHour == cHour) {
      $(this).removeClass('past future').addClass('present');
    } else if (bHour < cHour) {
      $(this).removeClass('future present').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
}

function save(){
  $('.saveBtn').on('click', function() {
    const key = $(this).parent().attr('id');
    const value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  // TODO: Add code to display the current date in the header of the page.
  function showTime(){
    const dateEl = $('#date');
    const timeEl = $('#time');
    const curDate = dayjs().format('dddd, MMMM D, YYYY');
    const curTime = dayjs().format('hh:mm:ss A');
    dateEl.text(curDate);
    timeEl.text(curTime);
  }
  setInterval(showTime, 1000);


  console.log(showTime);
  dayjs().toDate()
  var now = dayjs()
  console.log(now.$d);
  save();
  colors();
});
