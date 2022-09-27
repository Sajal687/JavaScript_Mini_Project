const eventDate = "27 September 2022 04:26 PM";

document.getElementById('eventDate').innerText = eventDate;

let inputs = document.querySelectorAll('input');

// inputs[0].value = 12;

const timer = () =>{
 const evt = new Date(eventDate);
 // console.log(evt);
 const curr = new Date();
 // console.log(curr);

 let gap = evt - curr;     //Gap contain milliseconds difference
 if(gap < 0){
  return;
 }
 gap = Math.floor(gap/1000);  // convert miliseconds to seconds
 // console.log(gap);

 //Calulate Days
 inputs[0].value = Math.floor(gap / 60 / 60 / 24);

 //Calculate Hours
 inputs[1].value = Math.floor(gap/60/60) % 24;

 //Calculate Minutes
 inputs[2].value = Math.floor(gap/60) % 60;

 //Calculate Seconds
 inputs[3].value = Math.floor(gap) % 60;

}

timer();


setInterval(()=>{
 timer()
},1000);