// let users = []

// const getData = function (callback) {
//     console.log("getting users")
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users")
//         callback()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)

  
//   setInterval(function(){
//     console.log(new Date())
//   }, 1000)

// const square = num => num*num
// console.log(square(6));
  
// const getFormalTitle = (title, name) => title + " " + name
// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

//ex 1
// const pushPull = func => func()
// const push = function () {
//     console.log("pushing it!")
//   }
  
//   const pull = function () {
//     console.log("pulling it!")
//   }
  
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"

//ex 2
// const getTime = func => func(new Date())
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
  
//   getTime(returnTime)

//ex 3
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };
//   const logData = str => console.log(str)
//   displayData(alert, logData, "I like to party")

//ex 4
// const sum = (num1, num2, num3) => num1+num2+num3
// console.log(sum(1,7,3));

//ex 5
// const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
// console.log(capitalize("bOb")) // returns Bob
// console.log(capitalize("TAYLOR")) // returns Taylor
// console.log(capitalize("feliSHIA")) // returns Felishia

//ex 6
// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }
//  const commentOnWeather = temp => "It's " + determineWeather(temp)

// console.log(commentOnWeather(30)) //returns "It's hot"
// console.log(commentOnWeather(22)) //returns "It's cold"

//ex 7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")
  
