$(document).ready(function () {
  $(".navbar-nav .nav-link").click(function () {
    $(".navbar-collapse").collapse("hide");
  });
});

$(document).ready(function () {
  $('nav a[href^="#"]').on("click", function (event) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: target.offset().top,
        },
        1000
      );
    }
  });
});
let progress1 = document.getElementById("progressbar1");
let progress2 = document.getElementById("progressbar2");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progress1Height = (window.pageYOffset / totalHeight) * 100;
  progress1.style.height = progress1Height + "%";
  let progress2Height = (window.pageYOffset / totalHeight) * 100;
  progress2.style.height = progress2Height + "%";
};

document.addEventListener("DOMContentLoaded", function () {
  const texts = ["Things", "UX/UI", "Mobile Apps", "Web Apps", "AI/ML models"];
  let index = 0;
  const changingTextElement = document.getElementById("changing-text");

  function updateText() {
    changingTextElement.textContent = texts[index];
    changingTextElement.style.color = getColor(index);
    index = (index + 1) % texts.length;
  }

  function getColor(index) {
   const colors = ["#e11d48", "#3b82f6", "#059669", "#f59e0b", "#8b5cf6"];
    return colors[index];
  }

  updateText(); // Initial call to set the first text
  setInterval(updateText, 2000); // Update text every 2 seconds
});

const lines = [
  '<div class="line"><span class="comment"># Know me Better. </span></div>',
  '<div class="line"><span class="comment"># I can, because I believe.</span></div>',
  '<div class="line"><span class="comment"># My vast variety of skills is continuously expanding.</span></div>',
  "<br>",
  '<div class="line"><span class="keyword">class</span> <span class="classname"></span><span class="punctuation">:</span></div>',
  "<br>",
  '<div class="line indent"><span class="keyword">def</span> <span class="function-name">__init__</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
  "<br>",
  '<div class="line indent-2"><span class="parameter">self</span><span class="punctuation">.</span><span class="property">name</span> <span class="operator">=</span> <span class="string">\'Maryam Ashfaq\'</span></div>',

  '<div class="line indent-2"><span class="parameter">self</span><span class="punctuation">.</span><span class="property">email</span> <span class="operator">=</span> <span class="string">\'Maryamashfaq1828@gmail.com\'</span></div>',
  '<div class="line indent"><br><span class="keyword">def</span> <span class="function-name">work_experience</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',

  "<br>",
  '<div class="line indent-2"><span class="keyword">return</span> <span class="punctuation">[</span></div>',
  '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2022\'</span><span class="punctuation">:</span> <span class="string">\'Front-End Developer Intern at Teresol Pvt Ltd. \'</span> <span class="punctuation">},</span></div>',
  '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2024\'</span><span class="punctuation">:</span> <span class="string">\'Intern at Inter Services Public Relations (ISPR). \'</span> <span class="punctuation">},</span></div>',
  '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2025\'</span><span class="punctuation">:</span> <span class="string">\'Junior Full Stack Developer at Calcite Technologies\'</span> <span class="punctuation">},</span></div>',


  '<div class="line indent-2"><span class="punctuation">]</span></div>',
  "<br>",
  '<div class="line indent"><span class="keyword">def</span> <span class="function-name">education</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
  "<br>",
  '<div class="line indent-2"><span class="keyword">return</span> <span class="punctuation">[</span></div>',
  '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2020-2024\'</span><span class="punctuation">:</span> <span class="string">"Bachelor of Science in Information Technology from Bahria University, Islamabad, Pakistan"</span> <span class="punctuation">},</span></div>',
  '<div class="line indent-3"><span class="punctuation">{</span> <span class="string">\'2021-2022\'</span><span class="punctuation">:</span> <span class="string">"Bachelor of Science in Computer Software Engineering(Exchange semester) from Altinbas University, Istanbul, Turkey"</span> <span class="punctuation">}</span></div>',
  '<div class="line indent-2"><span class="punctuation">]</span></div>',
  "<br>",
  '<div class="line indent"><span class="keyword">def</span> <span class="function-name">skills</span><span class="punctuation">(</span><span class="parameter">self</span><span class="punctuation">):</span></div>',
  "<br>",
  '<div class="line indent-2"><span class="keyword">return</span> <span class="punctuation">[</span></div>',
  '<div class="line indent-3"><span class="string">\'HTML\'</span><span class="punctuation">,</span> <span class="string">\'CSS\'</span><span class="punctuation">,</span> <span class="string">\'Bootstrap\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'JQuery\'</span><span class="punctuation">,</span> <span class="string">\'JavaScript\'</span><span class="punctuation">,</span> <span class="string">\'Vanilla js\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Flutter\'</span><span class="punctuation">,</span> <span class="string">\'Dart\'</span><span class="punctuation">,</span> <span class="string">\'Java\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'ReactJs\'</span><span class="punctuation">,</span> <span class="string">\'NodeJs\'</span><span class="punctuation">,</span> <span class="string">\'ExpressJS\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Vite\'</span><span class="punctuation">,</span> <span class="string">\'MongoDB\'</span><span class="punctuation">,</span> <span class="string">\'ASP .NET\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Postman\'</span><span class="punctuation">,</span> <span class="string">\'Trello\'</span><span class="punctuation">,</span> <span class="string">\'Slack\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Tailwind CSS\'</span><span class="punctuation">,</span> <span class="string">\'Next JS\'</span><span class="punctuation">,</span> <span class="string">\'Typescript\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Render\'</span><span class="punctuation">,</span> <span class="string">\'AWS\'</span><span class="punctuation">,</span> <span class="string">\'S3 Bucket\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Hostinger\'</span><span class="punctuation">,</span> <span class="string">\'JWT\'</span><span class="punctuation">,</span> <span class="string">\'AUTH\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'SOCKET.IO \'</span><span class="punctuation">,</span> <span class="string">\'Third Party APIs\'</span><span class="punctuation">,</span> <span class="string">\'Nodemailer\'</span><span class="punctuation">,</span></div>',
 '<div class="line indent-3"><span class="string">\'Payment Gateways \'</span><span class="punctuation">,</span> <span class="string">\'Stripe\'</span><span class="punctuation">,</span> <span class="string">\'Paypal\'</span><span class="punctuation">,</span></div>',




  '<div class="line indent-3"><span class="string">\'Python\'</span><span class="punctuation">,</span> <span class="string">\'C++\'</span><span class="punctuation">,</span> <span class="string">\'Latex-Overleaf\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Git/Github\'</span><span class="punctuation">,</span> <span class="string">\'Vercel\'</span><span class="punctuation">,</span> <span class="string">\'PHP\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'SQL\'</span><span class="punctuation">,</span> <span class="string">\'Web-extensions\'</span><span class="punctuation">,</span> <span class="string">\'API integrations\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Firebase\'</span><span class="punctuation">,</span> <span class="string">\'Machine Learning models\'</span><span class="punctuation">,</span> <span class="string">\'ML Algorithms\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Computer Vision\'</span><span class="punctuation">,</span> <span class="string">\'Front-End\'</span><span class="punctuation">,</span> <span class="string">\'Back-End\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Web applications\'</span><span class="punctuation">,</span> <span class="string">\'Mobile Applications\'</span><span class="punctuation">,</span> <span class="string">\'Hybrid/Native\'</span><span class="punctuation">,</span></div>',
  '<div class="line indent-3"><span class="string">\'Web deployment\'</span><span class="punctuation">,</span> <span class="string">\'Mobile Applications publications\'</span><span class="punctuation">,</span> <span class="string">\'Deployments\'</span><span class="punctuation">,</span></div>',
 
  '<div class="line indent-2"><span class="punctuation">]</span></div>',
  "<br>",
];

const container = document.getElementById("typing-container");
const caretContainer = document.getElementById("caret-container");
let lineIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    container.insertBefore(document.createElement("div"), caretContainer);
    caretContainer.previousSibling.innerHTML = lines[lineIndex];
    lineIndex++;
    setTimeout(typeLine, 500); // Adjust the delay here for typing speed
  }
}

// Intersection Observer to start typing animation on scroll
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        container.style.display = "block"; // Show the container
        typeLine(); // Start typing animation
        observer.unobserve(entry.target); // Stop observing after animation starts
      }
    });
  },
  { threshold: 0.5 }
); // Adjust threshold as needed

observer.observe(document.getElementById("AboutMe"));

document.addEventListener('DOMContentLoaded', function() {
  const readMoreLinks = document.querySelectorAll('.read-more');
  
  readMoreLinks.forEach(link => {
      link.addEventListener('click', function() {
          const hiddenContent = this.nextElementSibling;
          if (hiddenContent) {
              hiddenContent.style.display = 'block';
              this.style.display = 'none';
          }
      });
  });
});


    // Read More functionality - Fixed
    $(document).ready(function() {
        $('.read-more').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $hiddenContent = $this.siblings('.hidden-content');
            
            if ($hiddenContent.is(':visible')) {
                $hiddenContent.slideUp(300);
                $this.text('Read More...');
            } else {
                $hiddenContent.slideDown(300);
                $this.text('Read Less...');
            }
        });

        // Smooth scrolling for internal links
        $('a[href^="#"]').on('click', function(event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
            }
        });

        // Add animation on scroll
        $(window).scroll(function() {
            $('.enhanced-card').each(function() {
                var elementTop = $(this).offset().top;
                var elementBottom = elementTop + $(this).outerHeight();
                var viewportTop = $(window).scrollTop();
                var viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    $(this).addClass('animate__animated animate__fadeInUp');
                }
            });
        });

        // Enhance gallery images on hover
        $('.gallery-image').hover(
            function() {
                $(this).css('transform', 'scale(1.05)');
            },
            function() {
                $(this).css('transform', 'scale(1)');
            }
        );
    });

    
