

function clock(){
    var time = new Date();
    hours= time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

document.querySelectorAll(".clock")
[0].innerHTML= jazzy(hours) + " : " + jazzy(minutes) + " : " + jazzy(seconds);

function jazzy(numbers){
    if(numbers<10){
        numbers = '0' + numbers
      };
    return numbers;
  }

function colorTime(){
color="#" + hours + minutes + seconds;
document.body.style.background=color;
document.getElementById("hex").innerHTML.color
 }


   setTimeout(colorTime, 100);


}


setInterval( clock, 1000);

