// // const Family = function(){
// //     let members = []
// //     const birth = name =>{
// //         members.push(name)
// //         console.log(members);
// //     }
// //     return birth
// // }
  
// // const giveBirth = Family()
// // giveBirth('dani')
// // giveBirth('ido')
// // giveBirth('dana')

// const MathAction = function(){
//     const add = (x,y) => x+y
//     const sub = (x,y) => x-y
//     const multi = (x,y) => x*y
//     const div = (x,y) => x/y
//     return {add, sub, multi, div}
// }

// const m = MathAction()
// console.log(m.add(13, 29))
// console.log(m.multi(1.75, 24))
// console.log(m.multi(7, m.div(36, 6)))

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.listUsers()
// usersModule.addUser('Amit')
// usersModule.addUser('Roni')
// usersModule.listUsers()

//ex 1
// const StringFormatter = function(){
//     const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
//     const skewerCase = str => str.replace(/ /g, "-")
//     return {capitalizeFirst, skewerCase}
// }

// const formatter = StringFormatter()

// console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
// console.log(formatter.skewerCase("blue box")) //should print blue-box

//ex 2
// const Bank = function(){
//     let money = 500
//     const depositCash = cash => money += cash
//     const checkBalance = () => console.log(money);
//     return {deposit: depositCash, showBalance: checkBalance}
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950

//ex 3
const SongsManager = function(){
    let songList = {}
    const addSong = (name, adress) => songList[name] = adress.slice(32);
    const getSong = songname => console.log("https://www.youtube.com/watch?v=" + songList[songname]);
    return {addSong, getSong}
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ