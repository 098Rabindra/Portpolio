var typed = new Typed(".text", {
    strings: ["Java Developer", "Backend Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function updateTime() {
  const options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    hour12: false // 24-hour format
  };
  
  const now = new Date().toLocaleTimeString('en-IN', options);
  document.getElementById('time').textContent = now;
}

setInterval(updateTime, 1000);
updateTime();


const container = document.querySelector('.projects-container');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

function getVisibleCards() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
}

nextBtn.addEventListener('click', () => {
    const visible = getVisibleCards();
    const total = container.children.length;
    if (index < total - visible) {
        index++;
        slide();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        slide();
    }
});

function slide() {
    const cardWidth = container.children[0].offsetWidth + 40;
    container.style.transform = `translateX(-${index * cardWidth}px)`;
}

window.addEventListener('resize', slide);



