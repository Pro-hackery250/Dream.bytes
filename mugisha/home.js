const body = document.body;
const menuIcon = document.getElementById('menu-icon');
const OpenIcon = document.getElementById('open');
const CloseIcon = document.getElementById('close');
const menuLinks = document.getElementById('menu');
const navbar = document.getElementById('nav');
const links = document.querySelectorAll('.links');
const items = document.querySelectorAll('.items');
const Mebtn = document.getElementById('Me');
const Mebtn1 = document.getElementById('review');
const Mebtn2 = document.getElementById('about');
const Mecontainer = document.getElementById('me');
const Mecontainer1 = document.getElementById('me1');
const spinner = document.getElementById('spinner');
const CustomCursor = document.querySelector('.custom-cursor');
const SelectionContainer = document.getElementById('selection');
const Selectbtn = document.getElementById('select');
const Icons4 = document.querySelector('.icon4'); 
const Options = document.querySelector('.option'); 
const Lightbtn = document.querySelector('.light'); 
const darkbtn = document.querySelector('.dark');
const SettingContainer = document.querySelector('.settings');
const OpenSettingbtn = document.querySelector('.set');
const NotificationsTip = document.querySelector('.notifications');
const CloseSettingbtn = document.getElementById('close2');
const viewcontainers = document.getElementById('view');
const Hideconatiners = document.getElementById('hide');

//notifications
setTimeout(() => {
  NotificationsTip.style.transform = 'translate(0)';
  NotificationsTip.style.opacity = '1';
}, 8000);
setTimeout(() => {
  NotificationsTip.style.transform = 'translateY(100%)';
  NotificationsTip.style.opacity = '0';
}, 12000);
// write and erase


// typewritter
const words = ["Gloire", "Dream", "Bytes"];
const textElement = document.querySelector(".write");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 500;

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
    delay = 900;
  } else {
    delay = isDeleting ? 50 : 100;
  }

  setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// end of typewritter
// navbar on scroll
window.addEventListener('scroll', () =>{
  if(scrollY > 250){
    // menuLinks.style.transform = 'translateY(-200%)';
    navbar.classList.add('scrolled');
  }
  // else if(menuLinks.style.transform = 'translateY(-200%)'){
  //   OpenIcon.style.display = 'block';
  //   CloseIcon.style.display = 'none';
  // }
  else{
    navbar.classList.remove('scrolled');
  }
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
// dark mode & light mode

Icons4.addEventListener('click', () =>{
  Options.style.display = 'flex';
});

Lightbtn.addEventListener('click', () =>{
  Options.style.display = 'none';
  body.classList.remove('darkmode');
});
darkbtn.addEventListener('click', () =>{
  Options.style.display = 'none';
  body.classList.add('darkmode');
});


// open setting
OpenSettingbtn.addEventListener('click', () =>{
  SettingContainer.style.display = 'flex';
});

// close setting
CloseSettingbtn.addEventListener('click', () =>{
  SettingContainer.style.display = 'none';
});


setTimeout(() => {
  spinner.style.display = 'none';
}, 3000);

// hide and show containeers

viewcontainers.addEventListener('click', () =>{
  Hideconatiners.style.display = 'flex';
  Hideconatiners.scrollIntoView({behavior:'smooth'});
});

// track scroll

const box = document.querySelectorAll('.box');
const boxy = document.querySelectorAll('.boxy');
const observer = new IntersectionObserver(entries =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      entry.target.classList.add('see');
    }
  });
}, {
  threshold:0.1
});
box.forEach(box =>{
  observer.observe(box);
});
boxy.forEach(boxy =>{
  observer.observe(boxy);
});

Selectbtn.addEventListener('mouseenter', () =>{
  SelectionContainer.style.transform = 'translateY(0)';
  SelectionContainer.style.opacity = '1';
});
SelectionContainer.addEventListener('mouseleave', () =>{
  SelectionContainer.style.transform = 'translateY(-190%)';
  SelectionContainer.style.opacity = '0';
});


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

links.addEventListener('mouseover', () =>{
   CustomCursor.style.boxShadow = '0 2px 10px orangered';
});
// single page movement

Mebtn.addEventListener('click', () =>{
  Mecontainer.style.display = 'flex';
  Mecontainer1.style.display = 'none';
});

Mebtn2.addEventListener('click', () =>{
  Mecontainer1.style.display = 'flex';
  Mecontainer.style.display = 'none';
});


