document.addEventListener("DOMContentLoaded", async () => {
    const projectList = [
        { name: "Wind-up-Kathryn", owner: "Jyrsh" },
        { name: "Catalyst-Saga", owner: "Jyrsh"},
        { name: "AnotherProject", owner: "AnotherUser" }
    ];

    const projectsGrid = document.getElementById("projects-grid");

    for (const project of projectList) {
        const imageUrl = `https://raw.githubusercontent.com/${project.owner}/${project.name}/main/banner.png`;
        const repoUrl = `https://github.com/${project.owner}/${project.name}`;

        // Create card
        const card = document.createElement("div");
        card.className = "project-card";
        card.innerHTML = `
            <a href="${repoUrl}" target="_blank">
                <img src="${imageUrl}" alt="${project.name} Banner" onerror="this.onerror=null; this.src='fallback.png';">
            </a>
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>Loading description...</p>
            </div>
        `;

        projectsGrid.appendChild(card);
    }
});
