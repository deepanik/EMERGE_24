(function($) {
  'use strict';

  // Count Down JS
  $('#simple-timer').syotimer({
      year: 2024,
      month: 2,
      day: 7,
      hour: 10,
      minute: 0
  });

  // Function to handle dropdown change event
  function handleDropdownChange() {
      var selectedDay = document.getElementById('dayDropdown').value;

      // Hide all day schedules
      var allDaySchedules = document.querySelectorAll('.day-schedule');
      allDaySchedules.forEach(function(schedule) {
          schedule.style.display = 'none';
      });

      // Display the selected day schedule
      document.getElementById(selectedDay + 'Schedule').style.display = 'block';

      // Save the selected day in local storage
      localStorage.setItem('selectedDay', selectedDay);
  }

  // Add event listener for dropdown change
  document.getElementById('dayDropdown').addEventListener('change', handleDropdownChange);

  // Trigger change event on page load to hide other schedules
  document.addEventListener('DOMContentLoaded', function() {
      // Retrieve the selected day from local storage
      var storedDay = localStorage.getItem('selectedDay');

      // Set the default day to 'day1' if none is stored
      var defaultDay = storedDay || 'day1';

      // Set the dropdown value to the selected day
      document.getElementById('dayDropdown').value = defaultDay;

      // Trigger the change event to display the corresponding schedule
      handleDropdownChange();
  });

})(jQuery);




// const openNav = document.querySelector('.menu-bar button');
// const closeNav = document.querySelector('.close-nav button');
// const Navbar = document.querySelector('.navbar');
// const navLinks = document.querySelectorAll('.navbar ul a');

// // Hiding body scroll when mobile navigation menu opens
// function bodyScroll() {
//     if (Navbar.classList.contains('show')) {
//         document.body.classList.add('hide-scroll');
//     } else if (document.body.classList.contains('hide-scroll')) {
//         document.body.classList.remove('hide-scroll');
//     }
// }


// function showHide() {
//     Navbar.classList.toggle('show');
//     bodyScroll();
// }

// function closeNavbar() {
//     Navbar.classList.remove('show');
//     bodyScroll();
// }

// openNav.onclick = showHide;
// closeNav.onclick = showHide;

// // Close the bugger when a link is clicked
// navLinks.forEach(link => {
//     link.addEventListener('click', closeNavbar);
// });

// script.js

// script.js

$(document).ready(function () {
    // Show or hide the back-to-top arrow based on scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // Scroll to top when the arrow is clicked
    $('#back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
