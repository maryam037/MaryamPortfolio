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

const lines = [
    '<div class="line"><span class="comment"># Know me Better. </span></div>',
    '<div class="line"><span class="comment"># I can, because I believe.</span></div>',
    '<div class="line"><span class="comment"># My vast variety of skills is continuously expanding.</span></div>',
    '<br>',
    '<div class="line"><span class="keyword">class</span> <span class="classname"></span><span class="punctuation">:</span></div>',
    '<br>',
    '<div class="line indent"><span class="keyword">def</span> <span class="function-name">__init__</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
    '<br>',
    '<div class="line indent-2"><span class="parameter">self</span><span class="punctuation">.</span><span class="property">name</span> <span class="operator">=</span> <span class="string">\'Maryam Ashfaq\'</span></div>',
    '<div class="line indent-2"><span class="parameter">self</span><span class="punctuation">.</span><span class="property">date_of_birth</span> <span class="operator">=</span> <span class="number">5-4-2001</span></div>',
    '<div class="line indent-2"><span class="parameter">self</span><span class="punctuation">.</span><span class="property">email</span> <span class="operator">=</span> <span class="string">\'Maryamashfaq1828@gmail.com\'</span></div>',
    '<div class="line indent"><br><span class="keyword">def</span> <span class="function-name">work_experience</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
    '<br>',
    '<div class="line indent-2"><span class="keyword">return</span> <span class="punctuation">[</span></div>',
    '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2022-2022\'</span><span class="punctuation">:</span> <span class="string">\'Front-End Developer Intern at Teresol Pvt Ltd. \'</span> <span class="punctuation">},</span></div>',
    '<div class="line indent-2"><span class="punctuation">]</span></div>',
    '<br>',
    '<div class="line indent"><span class="keyword">def</span> <span class="function-name">education</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
    '<br>',
    '<div class="line indent-2"><span class="keyword">return</span> <span class="punctuation">[</span></div>',
    '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2020-2024\'</span><span class="punctuation">:</span> <span class="string">"Bachelor of Science in Information Technology from Bahria University, Islamabad, Pakistan"</span> <span class="punctuation">},</span></div>',
    '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2021-2022\'</span><span class="punctuation">:</span> <span class="string">"Bachelor of Science in Computer Software Engineering(Exchange semester) from Altinbas University, Istanbul, Turkey"</span> <span class="punctuation">}</span></div>',
    '<div class="line indent-2"><span class="punctuation">]</span></div>',
    '<br>',
    '<div class="line indent"><span class="keyword">def</span> <span class="function-name">skills</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
    '<br>',
    '<div class="line indent-2"><span class="keyword">return</span> <span class="punctuation">[</span></div>',
    '<div class="line indent-3"><span class="string">\'HTML\'</span><span class="punctuation">,</span> <span class="string">\'CSS\'</span><span class="punctuation">,</span> <span class="string">\'Bootstrap\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'JQuery\'</span><span class="punctuation">,</span> <span class="string">\'JavaScript\'</span><span class="punctuation">,</span> <span class="string">\'Vanilla js\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'Flutter\'</span><span class="punctuation">,</span> <span class="string">\'Dart\'</span><span class="punctuation">,</span> <span class="string">\'Java\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'Python\'</span><span class="punctuation">,</span> <span class="string">\'C++\'</span><span class="punctuation">,</span> <span class="string">\'Latex-Overleaf\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'Git/Github\'</span><span class="punctuation">,</span> <span class="string">\'ASP .NET\'</span><span class="punctuation">,</span> <span class="string">\'PHP\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'SQL\'</span><span class="punctuation">,</span> <span class="string">\'Web-extensions\'</span><span class="punctuation">,</span> <span class="string">\'API integrations\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'Firebase\'</span><span class="punctuation">,</span> <span class="string">\'Machine Learning models\'</span><span class="punctuation">,</span> <span class="string">\'ML Algorithms\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-3"><span class="string">\'Computer Vision\'</span><span class="punctuation">,</span> <span class="string">\'Front-End\'</span><span class="punctuation">,</span> <span class="string">\'Back-End\'</span><span class="punctuation">,</span></div>',
    '<div class="line indent-2"><span class="punctuation">]</span></div>',
    '<br>',
];

const container = document.getElementById('typing-container');
const caretContainer = document.getElementById('caret-container');
let lineIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        container.insertBefore(document.createElement('div'), caretContainer);
        caretContainer.previousSibling.innerHTML = lines[lineIndex];
        lineIndex++;
        setTimeout(typeLine, 500); // Adjust the delay here for typing speed
    } 
}

 // Intersection Observer to start typing animation on scroll
 const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            container.style.display = 'block'; // Show the container
            typeLine(); // Start typing animation
            observer.unobserve(entry.target); // Stop observing after animation starts
        }
    });
}, { threshold: 0.5 }); // Adjust threshold as needed

observer.observe(document.getElementById('ABOUTME'));