
//variables
let addUserBtn = document.getElementById('add-user')
let doubleMoneyBtn = document.getElementById('double')
let showMillionairesBtn = document.getElementById('show-millionaires')
let sortByWealthBtn = document.getElementById('sort')
let calculateWealtBtn = document.getElementById('calculate-wealth')
let main = document.getElementById('main')

let data = []

// fetch random user, generate amount of money and add it to the object

async function getRandomUser() {
    let res = await fetch('https://randomuser.me/api');
    let data = await res.json()
    let user = data.results[0]

    let  newUser
 = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
 }    
 addData(newUser)
}

// call the function and push three random people to the data array

getRandomUser()
getRandomUser()
getRandomUser()

// add new object to data array

function addData (obj) {
    data.push(obj);
}







