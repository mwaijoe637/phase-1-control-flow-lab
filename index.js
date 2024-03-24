function scuberGreetingForFeet(distance){
  // Write your code here!


  

  let greeting;

  if(distance <= 400){
    greeting = 'This one is on me!';
  }
  else if (distance > 400 && distance <= 2000){
    greeting = 'That will be twenty bucks.';
  }
  else if (distance > 2000 && distance <=2500){
    greeting = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500){
    greeting = 'No can do.';

  
  }

 return greeting;


}

console.log(scuberGreetingForFeet(199))
console.log(scuberGreetingForFeet(1500))
console.log(scuberGreetingForFeet(2001))
console.log(scuberGreetingForFeet(2501))


function ternaryCheckCity(city){
  // Write your code here!
  let cityName;

  cityName = city === "NYC" ? "Ok, sounds good." : "No go.";

  return cityName;


}

console.log(ternaryCheckCity("NYC"))
console.log(ternaryCheckCity("Pittsburgh"))

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
    switch (tip) {
        case 'generous':
            response = 'Thank you so much.';
            break;
        case 'not as generous':
            response = 'Thank you.';
            break;
        default:
            response = 'Bye.';
    }
    return response;
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));