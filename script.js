window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
        document.querySelector('.navbar').style.top = '0';
        document.querySelector('.container').classList.add('show');
    }, 2000); // Delay 2 detik
});

document.addEventListener('mousemove', function(e) {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.body.style.backgroundPosition = `${100 - x}% ${100 - y}%`;
});

const texts = ["MiminCat", "M. Faaiz Nashrullah"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
    currentText = texts[count];
    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.getElementById('typing-text').textContent = letter;

    if (!isDeleting && letter.length === currentText.length) {
        isDeleting = true;
        setTimeout(type, 3000); // Delay before starting to delete the text
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        setTimeout(type, 500); // Delay before starting to type the next text
    } else {
        setTimeout(type, isDeleting ? 100 : 200);
    }
})();

function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);
    const ageInMilliseconds = now - birth;
    const ageDate = new Date(ageInMilliseconds);

    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    const hours = ageDate.getUTCHours();
    const minutes = ageDate.getUTCMinutes();
    const seconds = ageDate.getUTCSeconds();

    return `${years} tahun, ${months} bulan, ${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik`;
}

function updateAge() {
    const age = calculateAge('2007-03-23');
    document.getElementById('age').textContent = age;
}

document.addEventListener('DOMContentLoaded', function() {
    updateAge();
    setInterval(updateAge, 1000); // Update age every second
});

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Disable image drag and drop
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Disable image download
document.addEventListener('mousedown', function(e) {
    if (e.button === 2 && e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Gyroscope effect for mobile devices
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', function(event) {
        const x = event.gamma; // In degree in the range [-90,90]
        const y = event.beta; // In degree in the range [-180,180]
        document.body.style.backgroundPosition = `${50 + x / 3}% ${50 + y / 3}%`;
    }, true);
}
