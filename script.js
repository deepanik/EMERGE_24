(function ($) {
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
    allDaySchedules.forEach(function (schedule) {
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
  document.addEventListener('DOMContentLoaded', function () {
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




const openNav = document.querySelector('.menu-bar button');
const closeNav = document.querySelector('.close-nav button');
const Navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar ul a');

// Hiding body scroll when mobile navigation menu opens
function bodyScroll() {
    if (Navbar.classList.contains('show')) {
        document.body.classList.add('hide-scroll');
    } else if (document.body.classList.contains('hide-scroll')) {
        document.body.classList.remove('hide-scroll');
    }
}


function showHide() {
    Navbar.classList.toggle('show');
    bodyScroll();
}

function closeNavbar() {
    Navbar.classList.remove('show');
    bodyScroll();
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

// Close the bugger when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeNavbar);
});



// $(document).ready(function(){
//   // Initialize the dropdown
//   $('.form-select').change(function(e){
//     e.preventDefault(); // Prevent the default behavior of the link
//     var selectedValue = $(this).val();
//     // Hide all speakers
//     $('.speaker').hide();
//     // Show speakers based on the selected day
//     $('.' + selectedValue).show();
//   });
// });

//   // Assuming you have jQuery and Bootstrap JS included in your project

//   $(document).ready(function () {
//     $('.dropdown-menu a').on('click', function (e) {
//       e.preventDefault();
//       var selectedValue = $(this).data('value');
      
//       // Redirect based on the selected value
//       if (selectedValue === 'all') {
//         window.location.href = 'all-speakers'; // Replace with your actual URL
//       } else if (selectedValue === 'feb7') {
//         window.location.href = 'feb-7th-speakers'; // Replace with your actual URL
//       } else if (selectedValue === 'feb8') {
//         window.location.href = 'feb-8th-speakers'; // Replace with your actual URL
//       } else if (selectedValue === 'feb9') {
//         window.location.href = 'feb-9th-speakers'; // Replace with your actual URL
//       }
//     });
//   });

function filterSpeakers() {
  var selectedValue = document.getElementById("SpeakerDropdown").value;
  var speakers = document.querySelectorAll('.speaker');

  speakers.forEach(function (speaker) {
    speaker.style.display = 'none'; // Hide all speakers

    if (selectedValue === 'all' || speaker.classList.contains(selectedValue)) {
      speaker.style.display = 'block'; // Display the selected speakers
    }
  });
}