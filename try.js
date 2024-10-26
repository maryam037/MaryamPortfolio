const projects = [
    {
        title: "LitterGo",
        description: "AI Powered Flutter Mobile Application For Detection And Management Of Litter Dumps using Computer Vision.",
        image: "images/littergo.png",
        link: "https://github.com/maryam037/LitterGo"
    },
    {
        title: "Recipe Recommendation System",
        description: "Employed content-based filtering through feature extraction and cosine similarity to rank and suggest recipes based on user preferences.",
        image: "images/recipe_recommendation.png",
        link: "https://github.com/yourusername/recipe-recommendation"
    },
    {
        title: "Suicide Rate Prediction",
        description: "Analysis on WHO suicide statistics, followed by training a model using Random Forest Classifier after feature selection.",
        image: "images/suicide_rate_prediction.png",
        link: "https://github.com/yourusername/suicide-rate-prediction"
    },
    {
        title: "E-commerce Website",
        description: "Developed a visually appealing and responsive e-commerce website for an online shoes store using HTML, CSS, and JavaScript.",
        image: "images/project1.PNG",
        link: "https://github.com/yourusername/ecommerce-website"
    },
    {
        title: "Skateboarding Blog Website",
        description: "Created a Skateboarding Website with blog posts using HTML, Tailwind and ReactJs.[Under development]",
        image: "images/MA logo2.jpg",
        link: "https://github.com/yourusername/skateboarding-blog"
    }
];

let currentProjectIndex = 0;

function updateProject(index) {
    const project = projects[index];
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
    document.getElementById("project-image").src = project.image;
    document.getElementById("project-image").alt = project.title;
    document.getElementById("project-link").href = project.link;
}

document.querySelector(".next").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex + 1) % projects.length;
    updateProject(currentProjectIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
    currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
    updateProject(currentProjectIndex);
});

// Initialize with the first project
updateProject(currentProjectIndex);
