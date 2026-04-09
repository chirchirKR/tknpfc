var reses = [];
function showLastFix(res=[]) {
    if (res.length < 1) return;
    
    let tstamp = [];
    reses.forEach((item) => {
        let [hr, min] = item["time"].trim().split(':');
        hr = +hr * 3600000;
        min = +min * 60000;
        tstamp.push(reqDate(item["date"], "tstamp")+ hr + min);
    });
    tstamp = tstamp.sort((a,b) => {a+b});
    //console.log(tstamp);
    let res_ = {};
    reses.forEach((item) => {
        let [hr, min] = item["time"].trim().split(':');
        hr = +hr * 3600000;
        min = +min * 60000;
        if (reqDate(item["date"], "tstamp") + hr + min === tstamp[tstamp.length - 1]) {
            res_ = item;
            //console.log(reqDate(item["date"], "tstamp") + hr + min);
        }
    });
    let edit = `<div class="top-fix">
        <p class="next-fix">Latest Result</p><p class="all-fix" onclick="window.location.href='./results/index.html'">All Results &gt;&gt;</p>
      </div>
      <div class="mid-fix">
        <p class="dated-fix">${reqDate(res_["date"], "false")}</p>
        <p class="league-fix">${res_["league"]}</p>
      </div>    
      <div class="team-name-fix">
        <p class="team-name-res">${res_["home"]}</p>
        <p class="team-score">${res_["homeScore"]}</p>
        <p class="team-score">${res_["awayScore"]}</p>
        <p class="team-name-res">${res_["away"]}</p>
      </div>`;
    
    const resField = document.getElementById('resField');
    resField.innerHTML = edit;
}

document.addEventListener('DOMContentLoaded', () => {
    showLastFix(reses);
});