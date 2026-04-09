var fixs = [];
const days = ["Sunday","Monday","Tuesday","WednesDay","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.addEventListener('DOMContentLoaded', () => {
    showFixs(fixs);
});
function showFixs(fixes=[]) {
    if (fixes.length < 1) return;
    
    let edit = ['<h3 class="title-">UPCOMING FIXTURES</h3>'];
    fixes.forEach((item) => {
        if (Date.now() < new Date(item["date"]).getTime()) {
        edit.push(`<div class="fix-card">
        <div class="fix-leftcard">
        <p class="fix-name">${item["home"]}</p>
        <p class="fix-name">${item["away"]}</p>
        </div>
        <div class="fix-rghtcard">
        <p class="time-fix-">${item["time"]}</p>
        <p class="date-fix-">${reqDate(item["date"],"false")}</p>
        <p class="date-fix-">${item["stadium"]}</p>
        </div>
        </div>
        `);
        }
    });
    const field = document.getElementById('fixField');
    field.innerHTML = edit.join('\n\n');
}

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
