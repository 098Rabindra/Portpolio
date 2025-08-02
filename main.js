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
