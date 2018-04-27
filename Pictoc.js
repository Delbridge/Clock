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

if(hours >= 4 && hours <=11 ) {
document.image.style.backgroundImage= "url('Morning.jpg')"
    greeting.innerHTML="Hi There";
    } else if (hours >11 && hours<=14 ) {
     document.image.style.backgroundImage = "url('Noon.jpg')"
greeting.innerHTML="Sunshine State";
    } else if (hours >= 20 && hours <= 23) {
    document.image.style.backgroundImage = "url('Night.jpg')"
     greeting.innerHTML="Hit the hay";
    } else {
        document.body.style.background=color;
    }
    // document.getElementById("greeting").innerHTML.greeting;


 }


//   setTimeout(colorTime, 100);




setInterval( clock, 1000);



    // document.getElementById("image").innerHTML.backgroundImage;