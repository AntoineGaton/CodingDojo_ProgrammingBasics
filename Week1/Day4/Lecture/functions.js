



function doThing() {
    console.log("Say Something, I'm giving up on you...")
} 

doThing()


function greeting(name) {
    // console.log(name)
    console.log("Hello, " +  name + " welcome to the jungle!")
}

greeting("Geralt of Rivia")

// Function that introduced someone and displayed their name, age and profession

function intro (name, age, profession) {
    console.log(name)
    console.log(age)
    console.log(profession)
    return name
}

intro("Ciri","27","Almost a witcher")
intro("Geralt","534","Always a witcher")

function getName(name) {
    // console.log("Line 32 inside getName function")
    console.log(name)
    return name
}

// getName("Geralt")

console.log(getName("Sonny the Witcher"))


// Question 1:

function hello() {
    console.log('hello');
}


hello();
console.log('Dojo');







// Question 2:

function hello() {
    console.log('hello');
    
    return 15;
}


var result = hello();
console.log('result is', result);
// console.log(hello())