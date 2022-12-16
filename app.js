const elCarts = document.querySelector(".cart");
const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elCartsText = document.querySelector(".cart_text");
const elDay = document.createElement("div");

const updateUp = (weather) => {
  console.log(weather);
  elCartsText.innerHTML = `
  <h2 class="text_h2">${weather.name}, ${weather.sys.country}</h2>
  <p class="text_P">${weather.weather[0].main}</p>
  <p class="text_P"> today ${(elDay.textContent =
    new Date().getDay())},day ${(elDay.textContent =
    new Date().getHours())}:${(elDay.textContent =
    new Date().getMinutes())},hour ${(elDay.textContent =
    new Date().getFullYear())},yars</p>
  <div class="temp">
    <span>${Math.round(weather.main.temp)}</span>
    <span>&deg;c</span>
  </div>
    `;
  if (Math.round(weather.main.temp) < 0) {
    document.body.style.background =
      "url(https://e0.pxfuel.com/wallpapers/941/148/desktop-wallpaper-16k-resolution-cold-nature-3-ultra-winter.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (Math.round(weather.main.temp) < -10) {
    document.body.style.background =
      "url(https://wallpapercave.com/wp/HLzESVe.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (Math.round(weather.main.temp) > 0) {
    document.body.style.background =
      "url(https://c4.wallpaperflare.com/wallpaper/82/723/741/the-kingdom-of-denmark-the-faroe-islands-village-mountains-waterfalls-sky-sea-blue-waterfalls-near-sea-wallpaper-preview.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  } else if (Math.round(weather.main.temp) > 20) {
    document.body.style.background =
      "url(https://wallpaperaccess.com/full/189774.jpg)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  if (elCartsText.classList.contains("d-none")) {
    elCartsText.classList.remove("d-none");
  }
};

const getWether = async (city) => {
  const data = await getData(city);
  return data;
};

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = elForm.city.value.trim();
  elForm.reset();
  getWether(cityName).then((data) => updateUp(data));
});
