// Function to scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }


// Function to toggle the visibility of the photo table
document.getElementById('toggle-table').addEventListener('click', function() {
  var table = document.getElementById('photo-table');
  if (table.style.display === 'none') {
      table.style.display = 'block';
      this.textContent = 'Hide Photos'; // Change button text to 'Hide Photos'
  } else {
      table.style.display = 'none';
      this.textContent = 'See me in action'; // Change button text back to 'Show Photos'
  }
});
