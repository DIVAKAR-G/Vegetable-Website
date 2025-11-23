// ---------------------- Get all buttons and total box ----------------------
const addbtn = document.querySelectorAll(".add-btn");
const canbtn = document.querySelectorAll(".can-btn");
const buybtn = document.getElementById("btns"); // Buy / View Total button
let box = document.getElementById("box");       // Total container
let totalValueSpan = document.getElementById("total-value"); // Span for total price

// ---------------------- Add Button ----------------------
addbtn.forEach((btn, index) => {
    btn.addEventListener('click', function() {
        // Mark item as added
        btn.classList.remove("btn-outline-success");
        btn.textContent = "Added";
        btn.style.backgroundColor = "green";
        btn.style.color = "white";

        // Hide total until Buy/View Total is clicked
        box.style.display = "none";
        totalValueSpan.textContent = "Rs. 0";
    });
});

// ---------------------- Cancel Button ----------------------
canbtn.forEach((btn, index) => {
    const added = addbtn[index];
    btn.addEventListener('click', function() {
        // Reset add button
        added.style.backgroundColor = "";
        added.style.color = "";
        added.textContent = "Add";
        added.classList.add("btn", "btn-outline-success");

        // Hide total immediately
        box.style.display = "none";
        totalValueSpan.textContent = "Rs. 0";
    });
});

// ---------------------- Buy / View Total Button ----------------------
buybtn.addEventListener('click', function() {
    let total = 0;

    // Loop through all items and sum prices of added items
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        const button = item.querySelector(".add-btn");
        if (button.textContent === "Added") {
            let price = item.getAttribute("data-price");
            total += Number(price);
        }
    });

    if (total > 0) {
        // Show total box
        box.style.display = "block";
        totalValueSpan.textContent = "Rs. " + total;

        // Optional: save total in localStorage
        localStorage.setItem("Value", total);
    } else {
        // Hide total box if nothing is selected
        box.style.display = "none";
        totalValueSpan.textContent = "Rs.0";
    }
});
