console.log('Objects.java')


const bigFoot= {
    // Properties
    name: "Big Foot",
    color:'Brown',
    isReal: true,
    height:7, //feet
    diet: "vegetarian",
    woodlandFriends: [{name:'bunny', age:4},
    {name: 'squirel', age:5 },{name: "deer",age:8}],
    eat(plant){
        console.log(`let's eat ${plant}`)
    },

    hide(location){
console.log(`Let's hide in the ${location}`)
    },

    run(){

    }

  

}
console.log(bigFoot.woodlandFriends[0].age)


bigFoot.hide("park")
bigFoot.hide("treehouse")
bigFoot.hide("garage")

bigFoot.eat("cabbage")
function sayHello(name){
    return `Hello, ${name}`
}

bigFoot.woodlandFriends.forEach(function(name){
    console.log(sayHello(name))
})

console.log(bigFoot.isReal)

console.log(bigFoot.diet)

bigFoot.color='strawberry blonde'

bigFoot.diet='keto'
console.log(bigFoot)


console.log(bigFoot.woodlandFriends[2])

delete bigFoot.isReal