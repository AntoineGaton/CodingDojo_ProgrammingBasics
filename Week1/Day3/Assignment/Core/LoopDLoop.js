/*
MVP Story: 

A local fitness coach and mechanical engineer is building an IoT device that pops out a piece of candy every time a runner reaches 2 miles on a treadmill but stops giving candy out at mile 6. We're tasked with building the loop functionality to know when to give a piece of candy and when to stop.

Step 1: Using comments in your VS Code, answer the following questions: 

How do we know we need a loop here? 
What's the starting point of the loop?
When should the loop stop?
How will it know to stop?
What's the incrementing for each iteration of the loop?
What variables do we need?
NOTE --> the above list of questions is a great tool to help you break down building a loop. Moving forward, you will be expected to know to ask those questions on your own. 

Step 2: Build out the loop.

Step 3: Save and submit.

Stretch Feature 1

Create a new loop where the runner only gets a piece of candy at every 2 miles AND if they were going move than 5.5 miles per hour.
*/

function candyCheckpoint(speed) {
    let finishLine = 6;
    for (let miles = 0; miles <= finishLine; miles++) {
        if(miles == 0 || miles %2 != 0) {
            console.log(`You are at mile ${miles}, keep on going for a candy!`);
        }
        else if(miles == 6) {
            console.log(`You made it to the finish line!`);
        }
        else if(miles %2 == 0) {
            console.log(`You are at mile ${miles}, here is a candy!`);
        }
    }
}

function candyCheckpoint2(speed) {
    let finishLine = 6;
    for (let miles = 0; miles <= finishLine; miles++, speed++) {
        if(miles == 0 || miles %2 != 0) {
            console.log(`You are at mile ${miles}, keep on going for a candy!`);
        }
        else if(miles == 6) {
            console.log(`You made it to the finish line!`);
        }
        else if(miles %2 == 0 && speed > 5.5) {
            console.log(`You are at mile ${miles} running at a speed of ${speed}mph, here is a candy!`);
        }
    }
}

candyCheckpoint();

let speed = 5;
candyCheckpoint2(speed);