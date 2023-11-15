document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');
    const settingsSections = document.querySelectorAll('.settings-section');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all menu items and settings sections
            menuItems.forEach(i => i.classList.remove('active'));
            settingsSections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to the clicked menu item and the corresponding settings section
            this.classList.add('active');
            const targetSection = document.getElementById(this.getAttribute('data-target'));
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });


});

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById("brightnessSlider");
    const brightnessText = document.getElementById("brightnessValue");

    function updateSliderWidth() {
        // Set the slider to be approximately 1/3 of the window width
        slider.style.width = (window.innerWidth / 3) + 'px';
    }
    // Call this function to set the initial width
    updateSliderWidth();

    slider.addEventListener("change", function () {
        brightnessText.innerText = this.value;
    });
    // Add event listener for window resize
    window.addEventListener('resize', updateSliderWidth);
});
