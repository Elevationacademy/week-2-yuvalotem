//quetion 1
// const findOddTimes = function (arr) {
//     let cnt = 0
//     for (let i = 0; i < 10; i++) {
//         for (let j of arr) {
//             if (j == i) {
//                 cnt++
//             }
//         }
//         if (cnt % 2 == 1) {
//             console.log(i)
//         }
//         cnt = 0
//     }
// }

//quetion 1 extention
// const findOddTimes2 = function (arr) {
//     let cnt = {}
//     for (let i = 0; i < arr.length; i++) {
//         if (cnt[arr[i]] == undefined) {
//             cnt[arr[i]] = 1
//         } else {
//             cnt[arr[i]]++;
//         }
//     }
//     for (let j in cnt) {
//         if (cnt[j] % 2 == 1) {
//             console.log(j)
//         }
//     }
// }
// arr = [3, 6, 7, 7, 6, 6, 3]
// findOddTimes2(arr)

//quetion 2
// const createUnSorted = function(i){
//     let arr = []
//     for(let j = 1; j<=100; j++){
//         arr[i] = 
//     }
// }


// const person = {
//     username: "Felica",
//     introduce: function(){
//       console.log(`Hi, I'm ${this.username}`)
//     }
//   }

//   person.introduce() //prints "Hi, I'm Felicia"


//ex 1
//   const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         this.hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }

//   person.feed() //should alert "I'm no longer hungry"

//ex 2
// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

//ex 3
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
// };

// const airplane = {
//     fly: function () {
//         if (this.fuel < 2) {
//             return 'on the ground!';
//         }
//         else {
//             return 'flying!';
//         }
//     },
//     fuel: 0
// };

// console.log('The plane should not be able to fly (yet): ' + airplane.fly());

// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());

// pumpFuel(airplane);
// console.log('Take off! ' + airplane.fly());

//ex 4
// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function (num) {
//         this.coinCount -= num;
//       } 
//   };

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

//ex 5
// const revealSecret = function () {
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };

//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };

//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

//ex 6
const coffeeShop = {
    beans: 40,
    money: 0,

    drinkRequirements: {
        latte: { beanRequirement: 10, price: 15 },
        americano: { beanRequirement: 5, price: 10 },
        doubleShot: { beanRequirement: 15, price: 20 },
        frenchPress: { beanRequirement: 12, price: 17 }
    },

    makeDrink: function (drinkType) {
        if (this.drinkRequirements[drinkType]) {
            if (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
                this.beans -= this.drinkRequirements[drinkType].beanRequirement
                console.log(`this is your ${drinkType} enjoy`)
                return true;
            } else {
                console.log("Sorry, we're all out of beans")
                return false;
            }
        } else {
            console.log(`Sorry, we don't make ${drinkType}`)
            return false;
        }
    },
    makeDrink2: function (drinkType) {
        if (this.drinkRequirements[drinkType] && this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
            this.beans -= this.drinkRequirements[drinkType].beanRequirement
            console.log(`this is your ${drinkType} enjoy`)
            return true
        } else {
            let msg = ''
            this.drinkRequirements[drinkType] ? msg = "Sorry, we're all out of beans" : msg = `Sorry, we don't make ${drinkType}`
            console.log(msg)
            return false
        }
    },
    buyDrink: function (drinkType) {
        if (this.makeDrink(drinkType)) {
            this.money += this.drinkRequirements[drinkType].price
        }
    },
    buyBeans: function (numBeans) {
        this.money -= numBeans * 0.5
        this.beans += numBeans
    }
}

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(20)
console.log(`money: ${coffeeShop.money} coffe beans: ${coffeeShop.beans}`)
