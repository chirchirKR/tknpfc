var res = []; let _myres = [];
function inter() {
    let a = [];
    res.forEach((item) => a.unshift(item));
    _myres = a;
}
const days = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function reqDate_(param=null,stamp="true") {
    if (!param) return 0;
    
    let sd = new Date(param); // Set Date
    let tstamp = sd.getTime();
    if (stamp == "false") {
        let date = sd.getDate();
        let month = months[sd.getMonth()];
        let day = days[sd.getDay()];
        let year = sd.getFullYear();
       return `${day} ${date} ${month}, ${year}`; 
    }
    else {
        return tstamp;
    }
}

function showRes(rez=[]) {
    if (rez.length < 1) return;
    inter();
    let edit = [];
    _myres.forEach((item) => {
        edit.push(`
        <div class="mid-fix">
        <p class="dated-fix">${reqDate_(item["date"], "false")}</p>
        <p class="league-fix">${item["league"]}</p>
        </div>
        <div class="team-name-fix">
        <p class="team-name-res">${item["home"]}</p>
        <p class="team-score">${item["homeScore"]}</p>
        <p class="team-score">${item["awayScore"]}</p>
        <p class="team-name-res">${item["away"]}</p>
        </div>`);
    });
    const resField = document.getElementById('resField');
    resField.innerHTML = edit.join('\n');
}

document.addEventListener('DOMContentLoaded', () => {
    showRes(res);
});