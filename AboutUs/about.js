document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".feature");
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.5s ease-out";
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});