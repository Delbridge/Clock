function clock(){
    var time = new Date();
    var hours= time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

document.querySelectorAll(".clock")
[0].innerHTML= jazzy(hours) + " : " + jazzy(minutes) + " : " + jazzy(seconds);

function jazzy(numbers){
    if(numbers<10){
        numbers = '0' + numbers
      };
    return numbers;
  }

var greeting = document.getElementById("greeting")

if(hours >= 4 && hours <=11 ) {
      document.body.style.backgroundImage= "url('Morning.jpg')";
    greeting.innerHTML="Hvthvyvtke";
    } else if (hours >=11 && hours<=19 ) {
     document.body.style.backgroundImage = "url('Noon.jpg')";
    greeting.innerHTML="Sunshine State";
    } else if (hours >= 20 && hours <= 23) {
    document.body.style.backgroundImage = "url('Night.jpg')";
     greeting.innerHTML="Yomucke";
    }  


 }


//   setTimeout(colorTime, 100);




setInterval( clock, 1000);



    // document.getElementById("image").innerHTML.backgroundImage;