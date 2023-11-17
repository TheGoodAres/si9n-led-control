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


/*
function brightness() {
    let currentValue = 1;
    const maxValue = 255;
    const duration = 24 * 60 * 60 * 1000;
    const interval = duration / (maxValue - currentValue);

    const incrementValue = () => {
        if (currentValue < maxValue) {
            currentValue++;
            //changeBrightness(currentValue);
            console.log(currentValue);
        } else {
            clearInterval(intervalId);
            console.log("Reached the maximum value.");
        }
    };

    const intervalId = setInterval(incrementValue, interval);

}

function changeBrightness(brightnessLevel) {
    if (isNumber(brightnessLevel)) {
        let brightness = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0xFF, 0x01, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x01, 0x00, 0xAA, 0xFF, 0x5A];
        brightness[brightness.length - 3] = brightnessLevel;
        if (brightnessLevel > 170) {
            brightness[brightness.length - 2] = brightnessLevel + 85 - 256;
            brightness[brightness.length - 1] = 0x5B;
        } else {
            brightness[brightness.length - 2] = brightnessLevel + 85;
            brightness[brightness.length - 1] = 0x5A;
        }
        si9n.displayMessage({ raw: brightness });
    };
};
*/
const brightness = () => {
    let currentValue = 1;
    const maxValue = 255;
    const duration = 24 * 60 * 60 * 1000;
    const interval = duration / (maxValue - currentValue);

    const changeBrightness = (brightnessLevel) => {
        let brightness = [0x55, 0xAA, 0x00, 0x00, 0xFE, 0xFF, 0x01, 0xFF, 0xFF, 0xFF, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x01, 0x00, 0xAA, 0xFF, 0x5A];
        brightness[brightness.length - 3] = brightnessLevel;
        if (brightnessLevel > 170) {
            brightness[brightness.length - 2] = brightnessLevel + 85 - 256;
            brightness[brightness.length - 1] = 0x5B;
        } else {
            brightness[brightness.length - 2] = brightnessLevel + 85;
            brightness[brightness.length - 1] = 0x5A;
        }
        si9n.displayMessage({ raw: brightness });
    }

    const incrementValue = () => {
        if (currentValue < maxValue) {
            currentValue++;
            changeBrightness(currentValue);
        } else {
            clearInterval(intervalId);
            console.log("Reached maximum brightness");
        }
    }

    const intervalId = setInterval(incrementValue, interval);
}