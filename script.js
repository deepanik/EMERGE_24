(function ($) {
  'use strict';

  // Count Down JS
  $('#simple-timer').syotimer({
    year: 2023,
    month: 4,
    day: 21,
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

document.addEventListener('DOMContentLoaded', function () {
  var headerBar = document.querySelector('.header-bar');
  var navbar = document.querySelector('.navbar');

  // Initial check for scroll position
  checkScroll();

  // Event listener for scroll
  window.addEventListener('scroll', function () {
    checkScroll();
  });

  // Function to check scroll position and toggle classes
  function checkScroll() {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
      headerBar.classList.add('scrolled');
    } else {
      headerBar.classList.remove('scrolled');
    }
  }
})(jQuery);
