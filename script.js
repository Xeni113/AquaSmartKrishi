// ----------------- References -----------------
const goFormBtn = document.getElementById("go-form");
const seeReportBtn = document.getElementById("see-report");
const submitBtn = document.getElementById("submit-btn");

const formSection = document.getElementById("form-section");
const reportSection = document.getElementById("report-section");
const loader = document.getElementById("loader");

const cropSelect = document.getElementById("crop-select");
const soilSelect = document.getElementById("soil-select");
const landAreaInput = document.getElementById("land-area");
const regionInput = document.getElementById("region-name");

// Report fields
const reportLocation = document.getElementById("report-location");
const reportTemp = document.getElementById("report-temp");
const reportRain = document.getElementById("report-rain");
const reportWater = document.getElementById("report-water");
const reportSprinklers = document.getElementById("report-sprinklers");
const reportEnergy = document.getElementById("report-energy");

// ----------------- Carousel Auto Slide -----------------
let carouselImg = document.querySelector(".carousel img");
let images = ["images/crop1.jpg", "images/crop2.jpg", "images/crop3.jpg"];
let index = 0;
setInterval(() => {
    index = (index + 1) % images.length;
    carouselImg.src = images[index];
}, 3000);

// ----------------- Section Scroll -----------------
goFormBtn.addEventListener("click", () => {
    formSection.scrollIntoView({ behavior: "smooth" });
});

seeReportBtn.addEventListener("click", () => {
    reportSection.scrollIntoView({ behavior: "smooth" });
});

// ----------------- Submit Button Logic -----------------
submitBtn.addEventListener("click", () => {
    const crop = cropSelect.value;
    const soil = soilSelect.value;
    const area = parseFloat(landAreaInput.value);
    const region = regionInput.value.trim();

    if (!area || area <= 0 || !region) {
        alert("Enter valid data.");
        return;
    }

    loader.style.display = "flex";

    // Simulate calculation delay
    setTimeout(() => {
        loader.style.display = "none";

        // ----------------- Generate Randomized Report -----------------
        reportLocation.textContent = region;
        reportTemp.textContent = ${20 + Math.floor(Math.random() * 15)}°C;
        reportRain.textContent = ${Math.floor(Math.random() * 10)} mm;
        reportWater.textContent = ${area * 2000} L;
        reportSprinklers.textContent = Math.ceil(area * 2);
        reportEnergy.textContent = ${area * 50} kWh;

        // Scroll to report
        reportSection.scrollIntoView({ behavior: "smooth" });

    }, 4000); // delay
});