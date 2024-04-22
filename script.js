// Function to handle floating banner and header navigation visibility
window.addEventListener('scroll', function() {
  const banner = document.querySelector('.floating-banner');
  const headerNavigation = document.querySelector('.header-navigation');
  if (window.pageYOffset > 100) {
    banner.style.top = '0px';
  } else {
    banner.style.top = '0';
    headerNavigation.style.top = '0';
  }
});

// Function to handle folder tab navigation
const tabButtons = document.querySelectorAll('.tab-button');
const sections = document.querySelectorAll('.main-content > section');

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to the clicked button
    button.classList.add('active');
    // Hide all sections
    sections.forEach(section => section.style.display = 'none');
    // Show the corresponding section
    sections[index].style.display = 'block';
  });
});

// Show the first section by default
tabButtons[0].click();

// Function to handle side navigation clicks
const quickNavLinks = document.querySelectorAll('.quick-nav a');

quickNavLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Find the corresponding tab button index
      const tabIndex = Array.from(sections).indexOf(targetSection);
      
      if (tabIndex !== -1) {
        // Trigger a click event on the corresponding tab button
        tabButtons[tabIndex].click();
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  });
});
