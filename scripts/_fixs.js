var fixes = [];
/*const days = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function reqDate(param=null,stamp="true") {
    if (!param) return 0;
    
    let sd = new Date(param); // Set Date
    let tstamp = sd.getTime();
    if (stamp == "false") {
        let date = sd.getDate();
        let month = months[sd.getMonth()];
        let day = days[sd.getDay()];
        let year = sd.getFullYear();
       return `${day.slice(0,3)}, ${date} ${month.slice(0,3)}, ${year}`; 
    }
    else {
        return tstamp;
    }
}
*/

function showNextFixture(fixs=[]) {
    if (fixs.length < 1) {
        //alert();
        let edit = `  <section class="reminder">
        <p>× No Fixture For Now</p></section>`;
        const showNewFix = document.getElementById('showNewFix');
        showNewFix.innerHTML = edit;
        return;
    }
    
    let tstamp = [];
    fixs.forEach((item) => {
        if(Date.now() < new Date(item["date"]).getTime()) {
            let [hr, min] = item["time"].trim().split(':');
            hr = +hr * 3600000;
            min = +min * 60000;
            tstamp.push(reqDate(item["date"], "tstamp") + hr + min);
        }
    });
    //console.log(tstamp);
    tstamp = tstamp.sort((a,b) => {a+b});
    /*console.log(tstamp);
    console.log(Date.now());*/
    let fix_ = {};
    fixs.forEach((item) => {
        let [hr, min] = item["time"].trim().split(':');
        hr = +hr * 3600000;
        min = +min * 60000;
        if (tstamp[0] == reqDate(item["date"], "tstamp") + hr + min) {
            fix_ = item;
        }
    });
    let edit = `<div class="top-fix">
        <p class="next-fix">Next fixture</p><p class="all-fix" onclick="window.location.href = './fixtures/index.html'">All Fixtures &gt;&gt;</p>
      </div>
      <div class="mid-fix">
        <p class="dated-fix">${reqDate(fix_["date"], "false")}</p>
        <p class="league-fix">${fix_["league"]}</p>
      </div>
      <div class="bottom-fix">
        <img alt="" src="${fix_["homeLogo"]}"/>
        <div class="time-fix">${fix_["time"]}<br>VS</div>
        <img alt="" src="${fix_["awayLogo"]}"/>
      </div>
      <div class="team-name-fix">
        <p class="team-home-fix">${fix_["home"]}</p>
        <p class="team-away-fix">${fix_["away"]}</p>
      </div>`;
    const showNewFix = document.getElementById('showNewFix');
    showNewFix.innerHTML = edit;
}

document.addEventListener('DOMContentLoaded', () => {
    showNextFixture(fixes);
});