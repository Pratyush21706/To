var task,database,datew;
var count =0;
var a = 1;

function setup(){
input = select("#cnt")
div = select(".iam")
pre = select(".non");
noInt = select(".dis")
noInt.style("display","none")
page = select(".page")
    dew = select(".dt");
    mandy = select("#sitt");
    option = select(".opt");
    ad = select(".add");
    cros = select(".add1")
  var firebaseConfig = {
  apiKey: "AIzaSyAZ12rHKVyfreB5oONojasLM2QXs9Szl2U",
    authDomain: "todo-ec98e.firebaseapp.com",
    databaseURL: "https://todo-ec98e-default-rtdb.firebaseio.com",
    projectId: "todo-ec98e",
    storageBucket: "todo-ec98e.appspot.com",
    messagingSenderId: "693543253844",
    appId: "1:693543253844:web:657d09490cd18cfcb2fac1"
  };
        //Initialising Firebase here
  firebase.initializeApp(firebaseConfig);
//    Console Logging firebase
  console.log(firebase);
//  Initialising the firebase database
 database = firebase.database();

console.log(firebase);
    var ref = database.ref("Pratyush");
    ref.on("value", gotData, errData);
    
    var objDiv = document.getElementById("cpt");
objDiv.scrollTop = objDiv.scrollHeight;
    
    
    date = day();
    montha = month();
    if(montha===1){
        montha = "January"
    }
    if(montha===2){
        montha = "Febraury"
    }
    if(montha===3){
        montha = "March"
    }
    if(montha===4){
        montha = "April"
    }
    if(montha===5){
        montha = "May"
    }
    if(montha===6){
        montha = "June"
    }
     if(montha===7){
        montha = "July"
    }
    if(montha===8){
        montha = "August"
    }
    if(montha===9){
        montha = "September"
    }
    if(montha===10){
        montha = "October"
    }
    if(montha===11){
        montha = "November"
    }
    if(montha===12){
        montha = "December"
    }
    
}
function draw(){
    isOnline();
    console.log(dew.value() + "and input : "+ input.value() )
      document.getElementById("dat").innerHTML = date+ " "+montha + " "+ year(); 
          document.getElementById("mady").innerHTML = montha + " "+ year(); 

    count++;
   
//if(count>300&&a===1){
//   noT.style("display","block");
//       pre.style("display","none");
//
//}
}

function addTask(){
        page.style("display","none")

    task = input.value();
    date = dew.value();
    console.log(task);
     var data ={
          tsk : task,
         dat : date
}
database.ref("Pratyush").push(data,finished);
   
  console.log("send called");
    
    var ref = database.ref("Pratyush");
    ref.on("value", gotData, errData);
    
    window.location.reload();
}

function finished(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('data saved!');
  }
}

function gotData(data) {
    var listings = selectAll(".task");
    for(var i =0; i<listings.length; i++){
        listing[i].remove();
    }
  var fruits = data.val();
  // Grab the keys to iterate over the object
  var keys = Object.keys(fruits);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    // Look at each fruit object!
    var fruit = fruits[key];
      console.log(fruit.dat)
     pre.style("display","none") 
      if(fruit.dat==date){
 createDiv(fruit.tsk).addClass("task").parent(div)
      }
  }
}

function errData(error) {
  if (error) {
    console.log('ooops');
  } else {
    console.log('Wow');
  }
}

function isOnline() { 
    return ( navigator.onLine) 
    console.log("wowo")
}
function openPage(){
        page.style("display","block")

}

function openOpt(){
        option.style("display","block")
//        ad.style("margin-right","18%")
            option.style("margin-right","6%")
                option.style("border","none")
                cros.style("display","block")
                    ad.style("display","none")


}

function closeOpt(){
        option.style("display","none")
//        ad.style("margin-right","18%")
                cros.style("display","none")
                    ad.style("display","block")


}