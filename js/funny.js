var sdvig = 0;
var test = document.getElementById('logo_move');
var logoMove = document.getElementById('tittle_company_move');
move()
function move(time) {
    test.style.transform = 'rotateY(' + sdvig + 'deg)';
    test.style.transition = 5 + 's' + ' cubic-bezier(.47,.57,.13,.69)';
    sdvig = sdvig + 360;
    time = sdvig;
    setTimeout(move, 5200);
}
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    move(0);
  } else {
    move(0);
  }
});


