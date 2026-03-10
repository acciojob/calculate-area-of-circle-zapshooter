function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");

    // Calculate the area using Math.PI
    let area = Math.PI * radius * radius;

    // Round to 2 decimal places and display the result
    alert("The area of the circle with radius " + radius + " is " + area.toFixed(2));
}

calculateArea();