// DAYS CONTAINER (gsap)
const items = document.querySelectorAll("#days .item");

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;
  });

  gsap.to(items, {
    width: item.clicked ? "140px" : "120px",
    background: "rgb(27, 27, 29)",
    color: "white",
    duration: 2,
    ease: "elastic(0.5, .6)",
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    background: "white",
    color: "black",
    width: item.clicked ? "250px" : "140px",
    duration: 2.5,
    ease: "elastic(0.8, .3)",
  });
};

items.forEach((item, i) => {
  item.clicked = false;
  item.addEventListener("click", () => expand(item, i));
});

// TIME
const d = new Date();
const currTime = document.querySelectorAll(".currTime");
currTime.forEach(async (item) => {
  let h = d.getHours();
  let a = "AM";
  if (h >= 12) {
    a = "PM";
    h = h - 12;
  }

  let m = d.getMinutes();
  if (m < 10) {
    m = `0${m}`;
  }

  item.innerHTML = `${h}:${m} ${a}`;
});

// BACKGROUND CHNAGE WITH TIME
const body = document.querySelector("body");
const otherCities = document.querySelector("#other-cities");
const otherCityHead = document.querySelector("#other-cities .heading");
const otherCityHeadBtn = document.querySelector(
  "#other-cities .heading button"
);
function changeBg(time) {
  if (time >= 5 && time < 12) {
    body.style.backgroundImage = 'url("./images/bg/morning.jpg")';
  }
  if (time >= 12 && time < 17) {
    body.style.backgroundImage = 'url("./images/bg/afternoon.jpg")';
  }
  if (time >= 17 && time < 23) {
    body.style.backgroundImage = 'url("./images/bg/evening.jpg")';
  }
  if (time >= 0 && time < 5) {
    body.style.backgroundImage = 'url("./images/bg/night.jpg")';
    body.style.color = "white";
    otherCities.style.color = "black";
    otherCityHead.style.color = "white";
    otherCityHeadBtn.style.color = "white";
  }
}

changeBg(d.getHours());
// changeBg(3);

//// LOCATION BUTTONS
const locBtn = document.querySelectorAll(".point");
const locImg = document.querySelector("#location");
const explore = document.querySelector(".explore");
locBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    if (i == 0) {
      locImg.style.backgroundImage =
        'url("https://www.planetware.com/photos-large/IND/india-delhi-red-fort.jpg")';
      explore.href = "https://www.windy.com/28.610/77.200?27.379,78.340,5";
    }
    if (i == 1) {
      locImg.style.backgroundImage =
        'url("https://www.japan-guide.com/thumb/destination_tokyo.jpg")';
      explore.href = "https://www.windy.com/35.680/139.760?28.710,128.013,5";
    }
    if (i == 2) {
      locImg.style.backgroundImage =
        'url("https://i.natgeofe.com/n/93231b5d-3b4f-4bd6-bcf4-4172ebda2011/parliment-square-london-england_3x2.jpg")';
      explore.href = "https://www.windy.com/51.510/-0.130?51.115,-0.128,8";
    }
    if (i == 3) {
      locImg.style.backgroundImage =
        'url("https://i.natgeofe.com/k/b76526f3-bb84-489d-b229-56bcc08aa915/australia-sydney-opera-house.jpg?w=636&h=358")';
      explore.href = "https://www.windy.com/-35.300/149.100?-35.807,149.101,8";
    }
    if (i == 4) {
      locImg.style.backgroundImage =
        'url("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f6/3b/99/bo-kaap.jpg?w=600&h=400&s=1")';
      explore.href = "https://www.windy.com/-33.930/18.420?-33.979,17.501,9";
    }
    console.log(i);
  });
});


