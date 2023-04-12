
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})


const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  const formData = new FormData(form); // get the form data

  fetch('process-form.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // show a success message
      console.log('Thank you for your message. We\'ll be in touch soon!');
    } else {
      // show an error message
      console.log('There was a problem sending your message. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

function submitFrom(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  if (name == "") {
    alert("Please Enter Your Name");
    return true;
  }
  if (email == "") {
    alert("Please Enter Your Email Address");
    return true;
  }
  if (message == "") {
    alert("Please Enter Your Message");
    return false;
  }
  alert("Thank You");
  location.reload();
}