/////////////////////////////// Cursor Position /////////////////////////////

let cursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.link');
let videos = document.querySelectorAll('.video-container');

const moveCursor = (e)=> {
  // const cursorWidth = cursor.clientWidth
  // const mouseY = e.clientY - (cursorWidth/2);
  // const mouseX = e.clientX - (cursorWidth/2);
  // cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
}

window.addEventListener('mousemove', moveCursor)


/////////////////////////////// Cursor Link Grow /////////////////////////////

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('link-grow')
  });
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('link-grow')
  });
})

videos.forEach(video => {
  video.addEventListener('mouseover', () => {
    cursor.classList.add('video-grow')
  });
  video.addEventListener('mouseleave', () => {
    cursor.classList.remove('video-grow')
  });
})