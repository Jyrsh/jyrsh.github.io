document.addEventListener("DOMContentLoaded", () => {
    const projectList = [
        { name: "KathrynBot", owner: "Jyrsh" },
        { name: "ExampleRepo", owner: "ExampleUser" } // Add more projects here
    ];

    const projectsGrid = document.getElementById("projects-grid");

    projectList.forEach(project => {
        const imageUrl = `https://raw.githubusercontent.com/${project.owner}/${project.name}/main/banner.png`;

        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <img src="${imageUrl}" alt="${project.name} Banner" onerror="this.onerror=null; this.src='fallback.jpg';">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>Description of ${project.name}.</p>
            </div>
        `;
        projectsGrid.appendChild(card);
    });
});
