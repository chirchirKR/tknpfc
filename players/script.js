var players_ = [];
var startxi_ = [];
document.addEventListener('DOMContentLoaded', () => {
/*  const players = [
  { name: "Goalkeeper", number: 1, pos: "GK" },
  { name: "Right Back", number: 2, pos: "DF" },
  { name: "Center Back", number: 4, pos: "DF" },
  { name: "Center Back", number: 5, pos: "DF" },
  { name: "Left Back", number: 3, pos: "DF" },
  { name: "Midfielder", number: 6, pos: "MF" },
  { name: "Midfielder", number: 8, pos: "MF" },
  { name: "Attacking Mid", number: 10, pos: "MF" },
  { name: "Winger", number: 7, pos: "FW" },
  { name: "Striker", number: 9, pos: "FW" },
  { name: "Winger", number: 11, pos: "FW" }
];

// Fill pitch
players.forEach((p, i) => {
  const el = document.getElementById(`p${i + 1}`);
  el.innerHTML = p.number;
  el.title = `${p.name} (${p.pos})`;
});

// Full squad cards
const squadDiv = document.getElementById("squad");
players.forEach(p => {
  squadDiv.innerHTML += `
    <div class="card">
      <strong>#${p.number}</strong><br>
      ${p.name}<br>
      <small>${p.pos}</small>
    </div>
  `;
});**/
  sep(players_);
  starting();
});

let goler = [], mider = [], differ = [], striker = [];

function sep(arr) {
  if (arr.length < 1) return;
  arr.forEach((player) => {
    switch (player["pos"]) {
      case "Forward": striker.push(player); break;
      case "Defender": differ.push(player); break;
      case "Midfielder": mider.push(player); break;
      case "Goalkeeper": goler.push(player); break;
      default: striker.push(player);
    }
  });
  
  showPlayers();
}

function showPlayers() {
  let golas = document.getElementById('gola');
  let strike = document.getElementById('strike');
  let defs = document.getElementById('defaa');
  let midios = document.getElementById('midios');
  
  goler.forEach((player) => {
    let name = player["name"].trim().split(' ');
    name = name[0];
    let used = player["name"].trim().split(' ');
    used = used[used.length - 1];
    let jersey = (typeof player["jersey"] == 'number')? player["jersey"] : '_';
    golas.innerHTML += `<div class="play-carder">
      <img alt="" src=""/>
      <p class="hashtag">#${jersey}</p>
      <p><span class="firstName">${name}</span><br><span class="secName">${used}</span></p>
    </div>`;
  });
  
  differ.forEach((player) => {
    let name = player["name"].trim().split(' ');
    name = name[0];
    let used = player["name"].trim().split(' ');
    used = used[used.length - 1];
    let jersey = (typeof player["jersey"] == 'number')? player["jersey"] : '_';
    defs.innerHTML += `<div class="play-carder">
      <img alt="" src=""/>
      <p class="hashtag">#${jersey}</p>
      <p><span class="firstName">${name}</span><br><span class="secName">${used}</span></p>
    </div>`;
  });
  
  mider.forEach((player) => {
    let name = player["name"].trim().split(' ');
    name = name[0];
    let used = player["name"].trim().split(' ');
    used = used[used.length - 1];
    let jersey = (typeof player["jersey"] == 'number')? player["jersey"] : '_';
    midios.innerHTML += `<div class="play-carder">
      <img alt="" src=""/>
      <p class="hashtag">#${jersey}</p>
      <p><span class="firstName">${name}</span><br><span class="secName">${used}</span></p>
    </div>`;
  });
  
  striker.forEach((player) => {
    let name = player["name"].trim().split(' ');
    name = name[0];
    let used = player["name"].trim().split(' ');
    used = used[used.length - 1];
    let jersey = (typeof player["jersey"] == 'number')? player["jersey"] : '_';
    strike.innerHTML += `<div class="play-carder">
      <img alt="" src=""/>
      <p class="hashtag">#${jersey}</p>
      <p><span class="firstName">${name}</span><br><span class="secName">${used}</span></p>
    </div>`;
  });
}


function starting() {
  let pitch = document.getElementById('pitch');
  let p = 0;
  startxi_.forEach((item) => {
    document.getElementById(`p${++p}`).innerHTML = `${p}<br>${item}`;
    
  });
}