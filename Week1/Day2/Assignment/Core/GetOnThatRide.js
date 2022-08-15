/*
The Story: We want an app that once it measures a kid's height, can display whether the child is tall enough to ride the rollercoaster. We're tasked with building the function that will display the right message to the child.

Step 1: Review and edit your variables as needed

Are your variables accurate? Update them if need be.
Step 2: Create a conditional where:

If the rider's height is greater than 52, the console.log should say "Get on that ride, kiddo!". Otherwise, console.log should say "Sorry kiddo. Maybe next year."
TIP: If you get stuck, that's ok! Keep tinkering with it. Use the pages in this course to help you out. 

Stretch Feature 1

Adjust the conditional statement to require both height and age. 

Stretch Feature 2

Adjust the conditional statement to require either height requirement or age requirement must be met. 

NOTE: Google is your friend here for Stretch 2. See what you can tinker and build. 
*/
//Required Height and Age
let requiredHeight = 52.0;
let requiredAge = 10;

//My Height and Age
let height = 69.0;
let age = 33;

//My Height and Age
let kidHeight = 33.0;
let kidAge = 8;

if (height >= requiredHeight || age >= requiredAge){
    console.log("Get on that ride, kiddo!");
}
else{
    console.lof("Sorry kiddo. Maybe next year.")
}