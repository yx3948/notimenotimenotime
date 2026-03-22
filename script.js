let count = 180;
document.getElementById("countdown").innerHTML = "3:00";


const places = [
  "JFK", "KSPO-DOME", "LHR", "WUKESONG-ARENA", "PETRA", "DEADVLEI",
  "THE-LOUVRE", "KYOTO", "SYX", "BROOKLYN-PARAMOUNT", "PARIS",
  "CGO", "GRAMERCY-THEATRE", "SERENGETI", "TAIPEI", "BIG-BEN",
  "GOCHEOK-SKY-DOME", "LISBON", "GREAT-SPHINX", "PUERTO-RICO",
  "NRT", "CDG", "SHANGHAI", "BALI", "JAMSIL-SPORTS-COMPLEX",
  "STOCKHOLM", "DXB", "SAHARA-DESERT", "CHIANG-MAI", "SEOUL",
  "MERZOUGA", "LAX", "BIG-LOTUS-STADIUM", "SIN", "TAJ-MAHAL",
  "SYD", "WATER-CUBE", "PVG", "HONG-KONG", "ICN", "BUDAPEST","BIRD'S-NEST"
];

const text = places.join("  ");
const backdrop = document.querySelector(".backdrop");
backdrop.innerHTML = text + "  " + text;

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
  let minutes = Math.floor(count / 60);
  let seconds = count % 60;
  
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;
}, 100);
