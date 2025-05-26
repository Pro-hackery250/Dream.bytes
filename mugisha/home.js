const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('menulinks');
const links = document.querySelectorAll('.links');
const items = document.querySelectorAll('.items');
const Mebtn = document.getElementById('Me');
const Mebtn1 = document.getElementById('review');
const Mebtn2 = document.getElementById('about');
const Mecontainer = document.getElementById('me');
const Mecontainer1 = document.getElementById('me1');
const spinner = document.getElementById('spinner');

setTimeout(() => {
  spinner.style.display = 'none';
}, 3000);
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

// single page movement

Mebtn.addEventListener('click', () =>{
  Mecontainer.style.display = 'flex';
  Mecontainer1.style.display = 'none';
});
Mebtn1.addEventListener('click', () =>{
  Mecontainer1.style.display = 'flex';
  Mecontainer.style.display = 'none';
});



// typewritter
const words = ["Graphic desginer", "World", "Typing Effect", "JavaScript", "Fun!"];
const textElement = document.querySelector(".text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 100;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    textElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    textElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    delay = 1000; // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    delay = 300;
  } else {
    delay = isDeleting ? 50 : 100;
  }

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
