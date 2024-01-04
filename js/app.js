/////////////////////////////// Video Pause /////////////////////////////

vid = document.getElementById('video')

// console.log(vid)

vid.addEventListener("mouseover", pauseVid);
vid.addEventListener("mouseout", playVid);

function pauseVid(e) { 
  vid.pause(); 
  console.log('in')
}

function playVid(e) { 
  vid.play(); 
  console.log('out')
}

// vid.addEventListener("mouseout", function (e) { 
//   vid.play(); 
// }) 