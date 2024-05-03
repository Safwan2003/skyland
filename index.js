// Header Start

window.addEventListener("scroll", function(){
  let header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 0);
  });

  // javascript for navigation side bar menu
  let menu = document.querySelector('.menu');
  let menuBtn = document.querySelector('.menu-btn');
  let closeBtn = document.querySelector('.close-btn');
  menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

  closeBtn.addEventListener("click", () =>{
      menu.classList.remove('active');

  });

// Header Close


// Slick Carousel Start

    $(document).ready(function(){
        $('.slick-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay:true,
            autoplaySpeed:3000,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    });
// Slick Carousel End





// Video Autoplay Start
// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to autoplay or pause video when in or out of view
function handleVideoPlayback() {
  const video = document.getElementById('about-video');
  if (isInView(video)) {
      video.play();
  } else {
      video.pause();
  }
}

// Event listener to trigger video playback when scrolling
window.addEventListener('scroll', handleVideoPlayback);

// Call the function once when the page loads
handleVideoPlayback();
// Video Autoplay End





let calcScrollValue = () =>{
  let scrollProgress = document.getElementById('progress');
  let whatsappBtn = document.getElementById('whatsapp');
  let progressValue = document.getElementById('progress-value');
  let pos = document.documentElement.scrollTop;
  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if(pos > 100){
    whatsappBtn.style.display="grid";
  } else{
    
    whatsappBtn.style.display="none";
  };
  
  if(pos > 100){
    scrollProgress.style.display="grid";
  } else{
    
    scrollProgress.style.display="none";
  };
  scrollProgress.addEventListener("click", () =>{
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll= calcScrollValue;
window.onload= calcScrollValue;