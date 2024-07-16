document.addEventListener("DOMContentLoaded", function() {
    // Target the image element that should change (replace with your actual class name if different)
    const mainImage = document.querySelector(".slidercard");
  
    // Define an array of objects representing each color selection and its corresponding image path
    const cards = [
      { id: 1, img: "pics/Cards (1).png" },
      { id: 2, img: "pics/Cards (2).png" },
      { id: 3, img: "pics/Cards (3).png" },
      { id: 4, img: "pics/Cards (4).png" }
    ];
  
    // Initialize current color index (starts at 0)
    let currentIndex = 0;
  
    // Function to show a specific image based on index
    function showImage(index) {
      // Check if index is within valid range
      if (index >= 0 && index < cards.length) {
        // Update image source based on clicked color's index
        mainImage.src = cards[index].img;
        currentIndex = index; // Update current index
      }
    }
  
    // Select all elements with class .color-name (assuming these represent color selections)
    const colorNames = document.querySelectorAll(".color-name");
  
    // Add click event listener to each color selection element
    colorNames.forEach((colorName, index) => {
      colorName.addEventListener("click", () => {
        // Show image based on the clicked element's index
        showImage(index);
      });
    });
  });