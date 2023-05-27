let sonido = new Audio('../sonidos/do.wav');
let sonire =new Audio('../sonidos/re.wav');
let sonimi =new Audio('../sonidos/mi.wav');
let sonifa =new Audio('../sonidos/fa.wav');
let sonisol =new Audio('../sonidos/sol.wav');
let sonila =new Audio('../sonidos/la.wav');
let sonisi =new Audio('../sonidos/si.wav');

// document.addEventListener('keydown', function(event) {
//     if (event.key === 'a' || event.key === 'A') {
//       sonido.play();
//       var tecla1 = document.querySelector('.tecla1');
//       tecla1.classList.add('pulsado');
//     }
//   });
//   document.addEventListener('keyup', function(event) {
//     if (event.key === 'a' || event.key === 'A') {
//       tecla1.classList.remove('pulsado');
//     }
//   });

// var tecla1 = document.querySelector('.tecla1');

// document.addEventListener('keydown', function(event) {
//   if (event.key === 'a' || event.key === 'A') {
//     sonido.play();
//     tecla1.style.transform = 'scale(0.8)';
//     tecla1.classList.add('pulsado');
//   }
// });

// document.addEventListener('keyup', function(event) {
//   if (event.key === 'a' || event.key === 'A') {
//     tecla1.style.transform = 'scale(1)';
//     tecla1.classList.remove('pulsado');
//   }
// });

var tecla1 = document.querySelector('.tecla1');
var tecla2 = document.querySelector('.tecla2');
var tecla3 = document.querySelector('.tecla3');
var tecla4 = document.querySelector('.tecla4');
var tecla5 = document.querySelector('.tecla5');
var tecla6 = document.querySelector('.tecla6');
var tecla7 = document.querySelector('.tecla7');

var teclas = [
  { key: 'a', div: tecla1, sound: sonido },
  { key: 's', div: tecla2, sound: sonire },
  { key: 'd', div: tecla3, sound: sonimi },
  { key: 'h', div: tecla4, sound: sonifa },
  { key: 'j', div: tecla5, sound: sonisol },
  { key: 'k', div: tecla6, sound: sonila },
  { key: 'l', div: tecla7, sound: sonisi }
];

document.addEventListener('keydown', function(event) {
    teclas.forEach(function(tecla) {
      if (event.key === tecla.key || event.key === tecla.key.toUpperCase()) {
        tecla.sound.play();
        tecla.div.style.transform = 'scale(0.8)';
        tecla.div.classList.add('pulsado');
      }
    });
  });
  
  document.addEventListener('keyup', function(event) {
    teclas.forEach(function(tecla) {
      if (event.key === tecla.key || event.key === tecla.key.toUpperCase()) {
        tecla.div.style.transform = 'scale(1)';
        tecla.div.classList.remove('pulsado');
      }
    });
  });
  
  
  
  
  
  
