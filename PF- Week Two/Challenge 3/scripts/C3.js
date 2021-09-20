// Creating a function to calculate total cost
function cal() {

    // Grabbing values from the form
    const dinner = parseFloat(document.getElementById("din").value);
    const tip = parseFloat(document.getElementById("per").value) * 0.01;

    // Calculating total cost
    const total = parseFloat((dinner * tip) + dinner).toFixed(2);

    // Adding html to display cost
    const html = "<h2>Total Cost</h2><p>Your total cost including tip is $" + total + ".</p>"
    document.getElementById("data").innerHTML = html;
};

// Adding function to clear form 
document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("tip_form").reset();
});

// Invoking cal function when button is clicked
document.getElementById("calc").addEventListener("click", cal);