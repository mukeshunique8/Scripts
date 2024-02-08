function copyToClipboard(text, button) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  
    button.classList.add('copied-button');
  
    setTimeout(() => {
      button.classList.remove('copied-button');
    }, 1000);
  }
  





  const draggableElements = document.querySelectorAll('.draggable');

  draggableElements.forEach(element => {
      element.addEventListener('dragstart', function (event) {
          event.dataTransfer.setData('text/plain', event.target.textContent);
          event.target.style.backgroundColor = 'lightgreen';
      });

      element.addEventListener('dragend', function (event) {
          event.target.style.backgroundColor = 'lightblue';
      });
  });

  


  // Get the navbar element
var navbar = document.getElementById("navbar");

// Get all the links inside the navbar
var links = navbar.getElementsByTagName("a");

// Toggle the navbar visibility when clicking outside or clicking navbar elements
document.addEventListener("click", function(event) {
    var section17 = document.getElementById("section17");
    
    if (!navbar.contains(event.target) || section17.contains(event.target)) {
        navbar.classList.toggle("hide");
    } else {
        for (var i = 0; i < links.length; i++) {
            if (event.target === links[i]) {
                navbar.classList.add("hide");
                break;
            }
        }
    }
});

// Additional event listeners to prevent hiding navbar inside section17
section17.addEventListener("click", function(event) {
    event.stopPropagation();
});

section17.addEventListener("mousedown", function(event) {
    event.stopPropagation();
});








// Show the navbar when hovering near its previous position
document.addEventListener("mousemove", function(event) {
    var y = event.clientY;
    if (y < 50) {
        navbar.classList.remove("hide");
    }
});

// Show the navbar when hovering at the top of the screen
window.addEventListener("scroll", function() {
    var scrollY = window.scrollY;
    if (scrollY === 0) {
        navbar.classList.remove("hide");
    }
});
