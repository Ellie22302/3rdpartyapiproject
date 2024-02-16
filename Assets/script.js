
const localeSettings = {};
  dayjs.locale(localeSettings);

$(function () {
  const cHour = dayjs().format('H');

  function hColor(){
    $('.time-block').each(function(){
      const bHour = parseInt(this.id);
      $(this).toggleClass('past', bHour < cHour);
      $(this).toggleClass('present', bHour === cHour);
      $(this).toggleClass('future', bHour > cHour);
    });
  }

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
$('.time-block').each(function(){
  const key= $(this).attr('id');
  const value= localStorage.getItem(key);
  $(this).children('.description').val(value);
})


  function showTime(){
    const dateEl = $('#date');
    const timeEl = $('#time');
    const curDate = dayjs().format('dddd, MMMM D, YYYY');
    const curTime = dayjs().format('hh:mm:ss A');
    dateEl.text(curDate);
    timeEl.text(curTime);
  }
  

  hColor();
  save();
  colors();
  setInterval(showTime, 1000);
});
 // console.log(showTime);
  // dayjs().toDate()
  // var now = dayjs()
  // console.log(now.$d);