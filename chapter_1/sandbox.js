function greet(){
    console.log("Hello there")
}

greet()

let greeting = (name) => console.log("Hi, my name is " + name)

let pets = ["Tonka", "Yeti", "The Puppy", "Jello", "Beau"]

let greetings = (arr) => {
    for(let i = 0; i < arr.length; i++){
        console.log(`Hello, I am a pet and my name is ${arr[i]}`)
    }
}

greeting("Kek")
greeting("Tonka")
greetings(pets)

const calcArea = (radius) => {
    return area = Math.PI * radius**2
} 

const area = calcArea(3)

console.log(area)