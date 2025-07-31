
const body = document.body;
const menuIcon = document.getElementById('menu-icon');
const OpenIcon = document.getElementById('open');
const CloseIcon = document.getElementById('close');
const menuLinks = document.getElementById('menu');
const navbar = document.getElementById('nav');
const links = document.querySelectorAll('.links');
const Codelinks = document.querySelectorAll('.codelink');
const items = document.querySelectorAll('.items');
const Mecontainer1 = document.getElementById('me1');
const spinner = document.getElementById('spinner');
const CustomCursor = document.querySelector('.custom-cursor');
const Picconatiners = document.getElementById('pic');
const VideoCont = document.getElementById('video');
const Codescontainer = document.getElementById('codes');
const TipsContent = document.getElementById('tipcont');
const Codescontainer2 = document.getElementById('codes2');
const TipsContent2 = document.getElementById('tipcont2');
const CodesCloses = document.getElementById('remove');
const CodesCloses2 = document.getElementById('remove2');
const CoonterContainer = document.getElementById('count');
const explorebtn = document.getElementById('explore');


// explorebtn.addEventListener('click', () =>{
//   CoonterContainer.style.display = 'flex';
//   CoonterContainer.scrollIntoView({top:50});
// });

Picconatiners.addEventListener('mouseenter', () =>{
  VideoCont.play();
});

Picconatiners.addEventListener('mouseleave', () =>{
  VideoCont.pause();
});

CodesCloses.addEventListener('mouseenter', () =>{
  Codescontainer.style.display = 'none';
});
CodesCloses2.addEventListener('mouseenter', () =>{
  Codescontainer2.style.display = 'none';
});



window.addEventListener("mousemove", (e) =>{
  CustomCursor.style.top = e.clientY + "px";
  CustomCursor.style.left = e.clientX + "px";
});



// mobile nav 
function togglebar(){
    menuLinks.style.transform = 'translateY(0)';
    menuLinks.style.opacity = '1';
    OpenIcon.style.display = 'none';
    CloseIcon.style.display = 'block';
    CloseIcon.style.opacity = '1';
  }
  function untogglebar(){
    menuLinks.style.transform = 'translateY(-200%)';
    menuLinks.style.opacity = '0';
    OpenIcon.style.display = 'block';
    CloseIcon.style.display = 'none';
  }



  links.forEach(link =>{
    link.addEventListener('click', function() {
      links.forEach(i =>
        i.classList.remove('active')
      );
      this.classList.add('active');
    });
  });

  
  items.forEach(link =>{
    link.addEventListener('click', function() {
      items.forEach(i =>
        i.classList.remove('active')
      );
      this.classList.add('active');
    });
  });
  
  Codelinks.forEach(link =>{
    link.addEventListener('click', function() {
      Codelinks.forEach(i =>
        i.classList.remove('active')
      );
      this.classList.add('active');
    });
  });

  
    // codes bytes


TipsContent.addEventListener('click', () =>{
  Codescontainer.style.display = 'flex';
});
TipsContent2.addEventListener('click', () =>{
  Codescontainer2.style.display = 'flex';
});





        document.addEventListener('DOMContentLoaded', () => {
            // Get the HTML element where the percentage will be displayed
            const percentageDisplay = document.getElementById('percentage');
            let count = 0; // Initialize the counter value
            const intervalTime = 40; // Time in milliseconds for each increment (determines speed)

            /**
             * Function to update the counter display.
             * It increments the count and updates the text content until 100% is reached.
             */
            function updateCounter() {

                if (count <= 100) {
                    // Update the text content with the current count and a '%' sign
                    percentageDisplay.textContent = count + '%';
                    count++; 
                    // Increment the count for the next update
                } else {
                    // Once 100% is reached, stop the interval to prevent further execution
                    clearInterval(counterInterval);
                    // Optional: Change text or add a completion message
                    percentageDisplay.textContent = '100% Complete!';
                    percentageDisplay.classList.remove('text-blue-600'); // Remove blue color
                    percentageDisplay.classList.add('text-green-600'); // Add green color for completion
                }
            }


            explorebtn.addEventListener('click', () =>{
              
            })
            // Set up an interval to call the updateCounter function repeatedly
            // This creates the animation effect of the counter
            const counterInterval = setInterval(updateCounter, intervalTime);
        });
