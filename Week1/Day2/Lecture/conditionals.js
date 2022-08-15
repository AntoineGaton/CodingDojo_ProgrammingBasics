// Flashlight Example

// Parameters?

var x = 5

function addNums() {
    var x = 5
    var y = 7
    sum = x + y
    console.log(sum)
}

addNums()



// Conditionals

// if this meets this expectation then do this, if it doesn't meet this expectation then do that

// Like a decision tree


function toggleFlashlight(flashlight) {

    // This is checking to see if the flashlight is on or TRUE
    if (flashlight.isOn == true) {
        // Sets the flashlight.isOn to FALSE
        flashlight.isOn = false;
    }

    // Checks to see if it doesnt meet condition
    else

    {
        flashlight.isOn = true;
    }

    console.log("Hello Flashlight")

}

function checkThing(thing) {
    if(!thing) {
        console.log("The thing is not defined")
    }
}



function checkNum(num, num2, num3) {

    if (num == 5) {
        console.log("The number is 5")
        if (num2 == 7) {
            console.log("Found a seven")
            if(num3 == 9) {
                console.log("Found a nine")
            }
        }
        // ! = NOT or false or not true
        else if(num2 != 7) {
            console.log("The number is not 7")
        }
    }

    else if (num == 7) {
        console.log("The number is 7")
    }

    else {
        console.log("The number is not 5 or 7, it be something else")
    }
}

function checkNumForTwo(num) {

    // if the num is 5 OR ht enum is 7
    if (num == 5 || num == 7) {
        console.log("The number is 5")
    }
    // if the num is 5 AND the num is 7
    if (num > 5 && num < 7) {
        console.log("The number must be 6 luls")
    }

    else {
        console.log("The number is not 5 or 7, it be something else")
    }

}