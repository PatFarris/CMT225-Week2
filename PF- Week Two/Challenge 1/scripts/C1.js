//Creating a function to calculate degrees of third angle
function calc() {
    // Grabbing values of angles from form's input fields
    const ang1 = parseFloat(document.getElementById("deg1").value);
    const ang2 = parseFloat(document.getElementById("deg2").value);

    // Calculating value of third angle
    const ang3 = parseFloat(180 - (ang1 + ang2));

    // Adding html to display results
    const html = "<h2>Angle 3 is equal to " + ang3 + "&deg.</h2>";
    document.getElementById("data").innerHTML = html;
}


// Adding function to clear form
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("degform").reset();
});

// Invoking calc function on button click
document.getElementById("calc").addEventListener("click", calc);