let clickCount = 0;

const messages = [
  "<em>THERE'S NO TIME NO TIME NO TIME.</em>",
  "<em>Did you get everything???</em>",
  "<em>Please don't MISS OUT.</em>"
];

document.addEventListener("click", function() {
  clickCount++;

  if (clickCount < 20) {
    document.getElementById("message").innerHTML = messages[clickCount % 3];
  }

  if (clickCount === 20) {
    document.getElementById("message").style.display = "none";
    document.getElementById("countdown").style.visibility = "visible";
  }
});

let count = 120;
document.getElementById("countdown").innerHTML = "2:00";

const places = [
  "JFK", "KSPO-DOME", "LHR", "WUKESONG-ARENA", "PETRA", "DEADVLEI",
  "THE-LOUVRE", "KYOTO", "SYX", "BROOKLYN-PARAMOUNT", "PARIS",
  "CGO", "GRAMERCY-THEATRE", "SERENGETI", "TAIPEI", "BIG-BEN",
  "GOCHEOK-SKY-DOME", "LISBON", "GREAT-SPHINX", "PUERTO-RICO",
  "NRT", "CDG", "SHANGHAI", "BALI", "JAMSIL-SPORTS-COMPLEX",
  "STOCKHOLM", "DXB", "SAHARA-DESERT", "CHIANG-MAI", "SEOUL",
  "MERZOUGA", "LAX", "BIG-LOTUS-STADIUM", "SIN", "TAJ-MAHAL",
  "SYD", "WATER-CUBE-ARENA", "PVG", "HONG-KONG", "ICN", "BUDAPEST", "BIRD'S-NEST"
];

function updateBackdrop() {
  const spans = places.map(function(p, i) {
    return '<span id="place-' + i + '">' + p + '</span>';
  });
  const text = spans.join("  ");
  backdrop.innerHTML = text + "  " + text;
}

const backdrop = document.querySelector(".backdrop");
updateBackdrop();

let posY = 0;
window.addEventListener("wheel", function(e) {
  posY -= e.deltaY * 0.5;
  const half = backdrop.scrollHeight / 2;
  if (posY < -half) posY += half;
  if (posY > 0) posY -= half;
  backdrop.style.transform = "translateY(" + posY + "px)";
});

setInterval(function() {
  count = count - 1;
  if (count <= 0) {
    count = 120;
    if (clickCount >= 20) {
      const randomIndex = Math.floor(Math.random() * places.length);
      document.querySelectorAll("#place-" + randomIndex).forEach(function(el) {
        el.style.color = "black";
      });
    }
  }
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;
  if (seconds < 10) { seconds = "0" + seconds; }
  if (minutes < 10) { minutes = "0" + minutes; }
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
}, 100);