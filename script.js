// Get the modal
const modal = document.querySelector(".modal");

// Get the close button
const closeBtn = document.querySelector(".modal .close");

// Get all portfolio items
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Loop through each portfolio item
portfolioItems.forEach(item => {
    item.addEventListener("click", function() {
        const imgSrc = this.querySelector("img").getAttribute("src");
        const title = this.querySelector(".portfolio-overlay h3").innerText;
        const description = this.querySelector(".portfolio-overlay p").innerText;

        // Set the modal content
        document.querySelector(".modal-content img").setAttribute("src", imgSrc);
        document.querySelector(".modal-content h3").innerText = title;
        document.querySelector(".modal-content p").innerText = description;

        // Show the modal
        modal.classList.add("show");
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
});

// Close the modal when clicking outside of the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

// Add form submission handling if needed
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message sent!");
});
