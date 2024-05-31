$(document).ready(function(){
    $('nav a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
let progress1 = document.getElementById('progressbar1');
let progress2 = document.getElementById('progressbar2');
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
    let progress1Height = (window.pageYOffset / totalHeight) * 100;
    progress1.style.height = progress1Height + "%";
    let progress2Height = (window.pageYOffset / totalHeight) * 100;
    progress2.style.height = progress2Height + "%";
}

document.addEventListener('DOMContentLoaded', function () {
    const texts = ["Things", "UX/UI", "Mobile Apps", "Web Apps", "AI/ML models"];
    let index = 0;
    const changingTextElement = document.getElementById('changing-text');

    function updateText() {
        changingTextElement.textContent = texts[index];
        changingTextElement.style.color = getColor(index);
        index = (index + 1) % texts.length;
    }

    function getColor(index) {
        const colors = ["#ff8505", "#1eff4e", "#800000", "#f93872", "#FFD700"];
        return colors[index];
    }

    updateText(); // Initial call to set the first text
    setInterval(updateText, 2000); // Update text every 2 seconds
});
