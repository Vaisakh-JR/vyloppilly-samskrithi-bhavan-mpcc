document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('aside');
    if (!sidebar) return;

    let scrollInterval;
    const scrollSpeed = 5; // Pixels per interval
    const scrollZoneHeight = 100; // Height of the top/bottom active zones in pixels

    sidebar.addEventListener('mousemove', (e) => {
        const rect = sidebar.getBoundingClientRect();
        const mouseY = e.clientY - rect.top;

        // Clear any existing interval to prevent stacking
        clearInterval(scrollInterval);
        scrollInterval = null;

        if (mouseY < scrollZoneHeight) {
            // Scroll Up
            scrollInterval = setInterval(() => {
                sidebar.scrollTop -= scrollSpeed;
            }, 16); // ~60fps
        } else if (mouseY > rect.height - scrollZoneHeight) {
            // Scroll Down
            scrollInterval = setInterval(() => {
                sidebar.scrollTop += scrollSpeed;
            }, 16);
        }
    });

    sidebar.addEventListener('mouseleave', () => {
        clearInterval(scrollInterval);
        scrollInterval = null;
    });
});
