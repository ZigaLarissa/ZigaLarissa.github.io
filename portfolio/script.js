/*====== dark mode active icon ======*/

const toggleIcon = document.querySelector('.toggle-icon');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});



/*====== scroll sections active link ======*/

// Select all 'section' elements on the page
let sections = document.querySelectorAll('section');

// Select all 'a' elements within 'nav' in the 'header'
let navLinks = document.querySelectorAll('header nav a');

// Add a scroll event listener to the window
window.onscroll = () => {
    // Loop through each 'section'
    sections.forEach(sec => {
        // Get the current vertical scroll position
        let top = window.scrollY;

        // Get the offset position of the 'section', adjusted by 150 pixels (for example, to account for a sticky header)
        let offset = sec.offsetTop - 150;

        // Get the height of the 'section'
        let height = sec.offsetHeight;

        // Get the 'id' attribute of the 'section'
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within the boundaries of this 'section'
        if (top >= offset && top < offset + height) {
            // Loop through each navigation link
            navLinks.forEach(link => {
                // Remove the 'active' class from all navigation links
                link.classList.remove('active');

                // Find the navigation link that corresponds to the current 'section' based on its 'href' attribute
                // and add the 'active' class to it
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });
    /*====== sticky navbar ======*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 600);
};
