let currentTime = new Date();
let currentHours = currentTime.getHours();

console.log(currentHours);

if(currentHours < 9){

    console.log("School hasn't started yet")
}

if((currentHours) >= 9 && (currentHours < 16 )){

    console.log("I gotta be at school")
}

if(currentHours >= 16){
    
    console.log("School is over")
}