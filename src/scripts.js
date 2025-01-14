// Initialize an object to store the current slide index for each project
let currentSlideIndex = {};

// Function to show the slide for a specific project and slide index
function showSlide(slideIndex, projectIndex) {
  // Select all slides for the specific project
  const slides = document.querySelectorAll(`[data-index="${projectIndex}"] .slide`);
  
  // Loop through all slides and set the opacity based on the active slide
  slides.forEach((slide, i) => {
    slide.style.opacity = i === slideIndex ? '1' : '0';
  });
}

// Function to show the next slide for a specific project
function nextSlide(projectIndex) {
  // Initialize the slide index for the project if it doesn't exist
  if (currentSlideIndex[projectIndex] === undefined) {
    currentSlideIndex[projectIndex] = 0;
  }

  // Select all slides for the specific project
  const slides = document.querySelectorAll(`[data-index="${projectIndex}"] .slide`);
  
  // Increment the slide index and loop back to the first slide if needed
  currentSlideIndex[projectIndex] = (currentSlideIndex[projectIndex] + 1) % slides.length;

  // Show the updated slide
  showSlide(currentSlideIndex[projectIndex], projectIndex);
}

// Function to show the previous slide for a specific project
function prevSlide(projectIndex) {
  // Initialize the slide index for the project if it doesn't exist
  if (currentSlideIndex[projectIndex] === undefined) {
    currentSlideIndex[projectIndex] = 0;
  }

  // Select all slides for the specific project
  const slides = document.querySelectorAll(`[data-index="${projectIndex}"] .slide`);
  
  // Decrement the slide index and loop back to the last slide if needed
  currentSlideIndex[projectIndex] = (currentSlideIndex[projectIndex] - 1 + slides.length) % slides.length;

  // Show the updated slide
  showSlide(currentSlideIndex[projectIndex], projectIndex);
}

// Initial setup to show the first slide of each project
document.querySelectorAll('[data-index]').forEach(slideshow => {
  const projectIndex = slideshow.getAttribute('data-index');
  currentSlideIndex[projectIndex] = 0;
  showSlide(0, projectIndex);
});