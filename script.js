//input
const places = [
  "HAON", "JFK", "KSPO-DOME", "LHR", "WUKESONG-ARENA", "PETRA", "DEADVLEI", "PINKPANTHERESS",
  "THE-LOUVRE", "KYOTO", "SYX", "RED-VELVET", "XINWENYUE-SHI", "BROOKLYN-PARAMOUNT", "PARIS",
  "CGO", "GRAMERCY-THEATRE", "YOASOBI", "SERENGETI", "TAIPEI", "BIG-BEN", "UTAKA-OZAKI",
  "GOCHEOK-SKY-DOME", "CENTRAL-CEE", "LISBON", "GREAT-SPHINX", "ADELE", "IVE", "PUERTO-RICO",
  "NRT", "CDG", "JESSE-MARGIELA", "SHANGHAI", "BALI", "JAMSIL-SPORTS-COMPLEX",
  "STOCKHOLM", "DXB", "SAHARA-DESERT", "CHIANG-MAI", "SEOUL", "REYNISFJARA", "HIKALU-UTADA",
  "MERZOUGA", "FRANK-OCEAN", "LAX", "BIG-LOTUS-STADIUM", "SIN", "SHAN-YICHUN", "TAJ-MAHAL",
  "SYD", "WATER-CUBE-ARENA", "PVG", "HONG-KONG", "CHEN-YIHAO", "ICN", "BUDAPEST", "BIRD'S-NEST",
  "PH-1"
];

const categories = {
  airport: ["JFK", "LHR", "SYX", "NRT", "CDG", "DXB", "LAX", "SIN", "SYD", "PVG", "ICN", "CGO"],
  venue: ["KSPO-DOME", "WUKESONG-ARENA", "BROOKLYN-PARAMOUNT", "GRAMERCY-THEATRE", "BIG-BEN",
    "GOCHEOK-SKY-DOME", "JAMSIL-SPORTS-COMPLEX", "BIG-LOTUS-STADIUM", "WATER-CUBE-ARENA", "BIRD'S-NEST"],
  place: ["PETRA", "DEADVLEI", "SERENGETI", "GREAT-SPHINX", "SAHARA-DESERT", "TAJ-MAHAL",
    "MERZOUGA", "KYOTO", "PARIS", "TAIPEI", "LISBON", "PUERTO-RICO", "SHANGHAI", "BALI", "STOCKHOLM",
    "CHIANG-MAI", "SEOUL", "HONG-KONG", "REYNISFJARA", "BUDAPEST"],
  singer: ["SHAN-YICHUN", "IVE", "RED-VELVET", "YOASOBI", "UTAKA-OZAKI",
    "HAON", "CENTRAL-CEE", "FRANK-OCEAN", "ADELE", "PINKPANTHERESS",
    "CHEN-YIHAO", "XINWENYUE-SHI", "JESSE-MARGIELA", "PH-1", "HIKALU-UTADA"]
};

const messages = [
  "<em>THERE'S NO TIME NO TIME NO TIME.</em>",
  "<em>Did you get everything?????</em>",
  "<em>Oh, there's more.</em>",
  "<em>YOU deserve this. YOU've earned this.</em>",
  "<em>Please don't MISS OUT.</em>",
  "<em>THERE'S NOTIME NOTIME NOTIME NOTIME NOTIME.</em>",
  "<em>THERE ARE always MORE!</em>",
  "<em>You only live once. But regret lasts forever.</em>"
];

const placePopup = `
 
  <div>FIRST NAME: <input class="popup-input" type="text"></div>
  <div>LAST NAME: <input class="popup-input" type="text"></div>
  <div>PASSPORT NO: <input class="popup-input" type="text"></div>
  <div>DATE OF BIRTH: <input class="popup-input" type="text"></div>
  <div>NATIONALITY: <input class="popup-input" type="text"></div>
  <div>EMAIL: <input class="popup-input" type="text"></div>
  <div>PHONE: <input class="popup-input" type="text"></div>
  <div>DEPARTURE DATE: <input class="popup-input" type="text"></div>
  <div>RETURN DATE: <input class="popup-input" type="text"></div>
  <div>PASSENGERS: <input class="popup-input" type="text"></div>
  <div>SEAT PREFERENCE: <input class="popup-input" type="text"></div>
  <div>MEAL PREFERENCE: <input class="popup-input" type="text"></div>
  <div>FREQUENT FLYER NO: <input class="popup-input" type="text"></div>
  <div>BAGGAGE: <input class="popup-input" type="text"></div>
  <div>TRAVEL INSURANCE: <input class="popup-input" type="text"></div>
  <div>SPECIAL ASSISTANCE: <input class="popup-input" type="text"></div>
  <br>
  <button class="popup-btn" onclick="this.style.color='white'; this.innerHTML='LOADING...'">SUBMIT</button>
`;

//popup airport

function airportPopup() {
  const drive = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
  const security = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
  return `
    <div>DRIVE TO AIRPORT: <span style="color:white;">${drive} </span>MIN</div>
    <div>FLIGHT STATUS: <span style="color:white;">POSSIBLE DELAYS</span></div>
    <div>SECURITY WAIT: <span style="color:white;">~${security} </span>MIN</div>
    <div>GATE: <span style="color:white;">TBD</span></div>
    <div style="margin-top:10px; display:flex; gap:10px;">
      <button class="popup-btn" onclick="this.style.color='white'; this.innerHTML='LOADING...'">CHECK IN</button>
      <button class="popup-btn" onclick="this.style.color='white'; this.innerHTML='LOADING...'">BOARDING PASS</button>
    </div>
  `;
}


const popupContent = {
  // airport: airportPopup(),
  // venue: "SOLD OUT<br>0 tickets remaining<br>Resale only",
  // place: "PEAK SEASON<br>No availability<br>Next opening: unknown",
  singer: "TOUR ANNOUNCED<br>Tickets on sale now<br>Selling fast"
};

function venuePopup(word) {
  const price1 = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
  const price2 = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
  const price3 = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;
  const viewers = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
  let tickets = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  let timeLeft = 15;

  const id = "venue-timer-" + Date.now();

  setTimeout(function () {
    const interval = setInterval(function () {
      timeLeft--;
      const el = document.getElementById(id);
      if (!el) { clearInterval(interval); return; }
      el.innerHTML = timeLeft + "S";
      if (timeLeft <= 0) {
        clearInterval(interval);
        el.innerHTML = "EXPIRED";
        el.style.color = "red";
      }
    }, 1000);
  }, 100);

  return `
    <div><strong>${word}</strong></div>
    <br>
    <div style="opacity:0.4; text-decoration: line-through;">SHOW A · $${price1} · SOLD OUT</div>
    <div style="opacity:0.4; text-decoration: line-through;">SHOW B · $${price2} · SOLD OUT</div>
    <br>
    <div>SHOW C · $${price3}</div>
    <div>TICKETS LEFT: <span style="color:white;">${tickets}</span></div>
    <div>${viewers} PEOPLE VIEWING NOW</div>
    <div>OFFER EXPIRES IN: <span style="color:white;" id="${id}">${timeLeft}S</span></div>
    <br>
    <button class="popup-btn" onclick="this.innerHTML='LOADING...'">BUY NOW</button>
  `;
}

//clickcount
let clickCount = 0;

function handleClick() {
  clickCount++;
  if (clickCount < 20) {
    document.getElementById("message").innerHTML = messages[clickCount % 8];
  }
  if (clickCount === 20) {
    document.getElementById("message").style.display = "none";
    document.getElementById("countdown").style.visibility = "visible";
  }
}


//bg placement
const backdrop = document.querySelector(".backdrop");

function getCategory(word) {
  for (const cat in categories) {
    if (categories[cat].includes(word)) return cat;
  }
  return null;
}

function updateBackdrop() {
  const spans = places.map(function (p, i) {
    return '<span id="place-' + i + '" class="place-word">' + p + '</span>';
  });
  backdrop.innerHTML = spans.join("  ") + "  " + spans.join("  ");

  document.querySelectorAll(".place-word").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.stopPropagation();
      handleClick();
      const word = el.textContent.trim();
      const cat = getCategory(word);
      if (cat) {
        const popup = document.createElement("div");
        popup.className = "popup";
        if (cat === "airport") {
          popup.innerHTML = "<strong>" + word + "</strong><br><br>" + airportPopup();
        } else if (cat === "place") {
          popup.style.width = "20vw";
          popup.style.height = "70vh";
          popup.style.overflowY = "scroll";
          popup.style.scrollbarWidth = "none";
          popup.innerHTML = "<strong>" + word + "</strong><br><br>" + placePopup;
        } else if (cat === "venue") {
          popup.innerHTML = venuePopup(word);
          popup.style.height = "40vh";
        } else {
          popup.innerHTML = "<strong>" + word + "</strong><br><br>" + popupContent[cat];
        }
        popup.style.top = Math.floor(Math.random() * 70) + "vh";
        popup.style.left = Math.floor(Math.random() * 55) + "vw";
        popup.addEventListener("click", function (e) {
          e.stopPropagation();
          handleClick();
          // popup.remove();
        });
        document.body.appendChild(popup);
        setTimeout(function () {
          popup.remove();
        }, 20000);
      }
    });
  });
}

updateBackdrop();


// infinite scroll
let posY = 0;

window.addEventListener("wheel", function (e) {
  posY -= e.deltaY * 0.5;
  const half = backdrop.scrollHeight / 2;
  if (posY < -half) posY += half;
  if (posY > 0) posY -= half;
  backdrop.style.transform = "translateY(" + posY + "px)";
});


// coutndown timer
let count = 60;
document.getElementById("countdown").innerHTML = "2:00";

setInterval(function () {
  count = count - 1;
  if (count <= 0) {
    count = 60;
    if (clickCount >= 20) {
      const randomIndex = Math.floor(Math.random() * places.length);
      document.querySelectorAll("#place-" + randomIndex).forEach(function (el) {
        el.style.color = "black";
        el.style.pointerEvents = "none";
      });
    }
  }
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;
  if (seconds < 10) { seconds = "0" + seconds; }
  if (minutes < 10) { minutes = "0" + minutes; }
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
}, 100);