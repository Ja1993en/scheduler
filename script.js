var currentDay = $('#currentDay');
var container = $('#container');


var x = localStorage.getItem("mytime");
currentDay.text( moment().format('MMMM Do YYYY'));
var workHours = ['9am', '10am', '11am', '12pm', '13pm','14pm','15pm', '16pm', '17pm']

// Sets Dom elements 
pageSetup = ()=>{
 
  var hour = moment().format('HH')
  var currentHours = parseInt(hour)
for(var i=0; i<=workHours.length -1; i++){
    container.append(`<div class="row">
    <div class=" current-time col-1"> ${workHours[i]} </div>
    <textarea class="form-control col-10 jll " aria-label="With textarea"></textarea>
    <button class="col-1 saveBtn "><i class="bi bi-save-fill"></i></button>
  </div>`);

  var hoursIndex = parseInt(workHours[i])
 

const time1 = currentHours ;
const time2 =jalen
var kk= $($('textarea')[i])

  kk.each(function(i){
          if (time1 > time2) {
            kk.addClass("past");
            console.log('past')
           } else if (time1 < time2) {
             kk.addClass('future')
             console.log('future')
            ;
           } else {
             console.log('present ')
            kk.addClass('present')
           }
       })
// timeComparision(jalen);

}
// savedTodo();
}


pageSetup();

const toDo = JSON.parse(localStorage.getItem('toDo')) || [];


savedTodo = ()=>{
console.log(kk)
console.log(toDoinput)
 var latest = { 
  topScores: scoreCount,
  name: toDoinput.val()
}
}
savedTodo();
// click button save to local storage and show in correct
// show in correct DOM eleme

