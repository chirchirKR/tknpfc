const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var news__ = [];
document.addEventListener('DOMContentLoaded', () => {
    showNew_(news__);
})

function showNew_(n=[]) {
    let edit = ['<h2 class="title-">NEWS</h2>'];
    let field = document.getElementById('newField');
    if (n.length < 1) return;
    if (n.length < 4) {
        n.forEach(function (item) {
            let url = item["photo"];
            //console.log(url)
            edit.push(`
            <div class="news-board" onclick="window.location.href = './news/index.html'">
            <img src="${(url.startsWith('/res/'))? '.'+url : url }"/><div>
            <h4>${item['title']}</h4>
            <p><span class="p-stadium">${item['stadium']}</span>~<span class="p-dated">${reqDate(item['date'], "false")} ${reqDate(item['date'],"0")}</span></p>
            </div></div>
            <hr class="sep-news">`);
        });
        edit.push(`<div class="more-button">
            <button onclick="window.location.href = './news/index.html'">MORE NEWS &gt;&gt;</button>
            </div>`);
        field.innerHTML = edit.join('\n');
        return;
    }
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
       return `${day.slice(0,3)} ${date} ${month.slice(0,3)} ${year}`; 
    }
    else if (stamp == "tstamp") {
        return tstamp;
    }
    else {
        h = sd.getHours() - 3;
        m = sd.getMinutes();
        return h+':'+m;
    }
}
