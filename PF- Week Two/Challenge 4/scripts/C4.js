// Creating a function to calculate area and perimeter
function calc() {

    // Grabbing length and width values from form's user input 
    const length = parseFloat(document.getElementById("len").value).toFixed(2);
    const width = parseFloat(document.getElementById("wid").value).toFixed(2);

    // Calculating area and perimeter 
    const area = length * width;
    const perim = (length * 2) + (width * 2);

    // Adding html to display results
    const html = "<p><strong>Area:  </strong>" + area + " square inches.</p><p><strong>Perimeter:  </strong>" + perim + " inches.</p>";
    document.getElementById("data").innerHTML = html;
}


// Adding a function to clear form
document.getElementById("clear").addEventListener("click", () => {
                document.getElementById("rec_form").reset();
            });

// Invoking calc function on button click  
document.getElementById("cal").addEventListener("click", calc);