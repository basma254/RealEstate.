//// gallery
// Define an array of numbers to use in the query selectors
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array and create variables and event listeners
numbers.forEach(number => {
  // Create variables for the see button, card container, and close button
  const seeBtn = document.querySelector(`.see-${number}`);
  const viewForm = document.querySelector(`.card-container-${number}`);
  const formClose = document.querySelector(`#form-close-${number}`);

  // Add event listener to see button
  seeBtn.addEventListener('click', function() {
    // Toggle visibility of card container
    viewForm.classList.toggle('active');
  });

  // Add event listener to close button
  formClose.addEventListener('click', function() {
    // Hide card container
    viewForm.classList.remove('active');
  });

  // Add event listener to window scroll
  window.addEventListener('scroll', function() {
    
      viewForm.classList.remove('active');
    
  });
});



// tabs


  for (var i = 1; i <= 9; i++) {
    $(document).on("click", ".card-container-" + i + " .naccs .menu div", function() {
      var numberIndex = $(this).index();
  
      if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");
  
        $(this).addClass("active");
        $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");
  
        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
    });
  }