/////////////////////////////// Video Pause /////////////////////////////

vid = document.getElementById('video');
vidMob = document.getElementById('video-mobile');

// console.log(vid)

vid.addEventListener("mouseover", pauseVid);
vid.addEventListener("mouseout", playVid);

vidMob.addEventListener("touchstart", pauseMob);
vidMob.addEventListener("touchend", playMob);
// vidMob.addEventListener("touchstart", playVid);


function pauseVid(e) { 
  vid.pause(); 
  vid.classList.add('videohover')
}

function playVid(e) { 
  vid.play(); 
  vid.classList.remove('videohover')
}

function pauseMob(e) { 
  vidMob.pause(); 
  vidMob.classList.add('videohover')
}

function playMob(e) { 
  vidMob.play(); 
  vidMob.classList.remove('videohover')
}