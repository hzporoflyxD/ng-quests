document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');
    // показать оверлей сразу после загрузки страницы
    overlay.style.display = 'flex';

    // закрыть оверлей
    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playSound');
    const audio = new Audio('allsong.mp3'); 
  
    if (playButton) {
      playButton.addEventListener('click', () => {
        audio.play();
        overlay.style.display = 'none';
      });
  
      audio.addEventListener('ended', () => { 
        audio.currentTime = 0;
        audio.play();
      });
    }
  });


document.addEventListener('DOMContentLoaded', function() {
  const openOverlayButton = document.getElementById('menu-minigames-btn');
  const overlay = document.querySelector('.overlay-menu-minigames');
  const closeOverlayButton = document.getElementById('returnToMainMenu');



  if (openOverlayButton && overlay && closeOverlayButton) { 
      openOverlayButton.addEventListener('click', () => {
          overlay.style.display = 'flex'; // показ оверлея
      });


      closeOverlayButton.addEventListener('click', () => {
          overlay.style.display = 'none'; // закрытие оверлея
      });

  }

  });

