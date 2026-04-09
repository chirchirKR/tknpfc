let DOM_ = false;
var news_ = [];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

document.addEventListener('DOMContentLoaded', () => {
    DOM_ = true;
    showNews(news_);
    
});


function showNews(news=[]) {
    let edit = ['<h2 class="title-">NEWS</h2>'];
    if (news.length < 1) return;
    news.forEach(function (new_) {
        let url = new_["photo"];
        edit.push(`
        <div class="news-card">
        
        <h3>${new_["title"]}</h3>
        <img src="${(url.startsWith('/res/'))? '..'+url : url }"/>
        <figcaption>${new_["caption"]}</figcaption>
        <p class="news-text">${new_["content"]}</p><br><br>
        <p class="author-time">${new_["author"]} - ${reqDate(new_["date"], "false")} - ${reqDate(new_["date"], "n")}</p></div>`);
    });
    
    const field = document.getElementById('newsField');
    field.innerHTML = edit.join('\n\n');
}

function search(value=null) {
    //alert(value);
    //if (!value) return;
    if (!value || value == "") {
        document.querySelector('.suggestBox').innerHTML = "";
        return;
    }
    if (value.includes(':')) {
        let suggests = [];
        let [author,id] = value.trim().split(':');
        news_.forEach((item) => {
            if (item["id"].toLowerCase().includes(id.toLowerCase())) {
                suggests.push(item);
            }
        });
        let edit = [];
        suggests.forEach((item) => {
            edit.push(`
            <div class="suggestItem" onclick="click_('${item["id"]}')">
            <p><span class="suggestId">${item["id"]}</span><span class="suggestTitle">${item["title"]}</span></p>
            </div>`);
        });
        document.querySelector('.suggestBox').innerHTML = edit.join('\n');
    }
    else {
        const sb = document.querySelector('.suggestBox');
        sb.innerHTML = `<div class="no-results"> <span class="suggestId">×</span>To find Accurate Results include a colon ( : )</div>`;
    }
}

function click_(id) {
    let read = [];
    //alert(news_);
    news_.forEach(function (item) {
        if (item["id"].toLowerCase().includes(id.toLowerCase())) {
            read.push(item);
        }
    });
    let edit = [];
    const sb = document.querySelector('.suggestBox');
    //alert(read);
    read.forEach(function (new_) {
        let url = new_["photo"];
        edit.push(`
        <div class="news-card">
        <img src="${(url.startsWith('/res/'))? '..'+url : url }"/>
        <h3>${new_["title"]}</h3>
        <p class="news-text">${new_["content"]}</p>
        <p class="author-time">${new_["author"]} - ${reqDate(new_["date"], "false")} - ${new_["time"]}</p></div>`);
    });
    sb.innerHTML = edit.join('\n');
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

function panks() {
    
const advert = document.getElementById("advert");
const image = document.getElementById("mainImage");

/* Show advert on page load */
window.onload = () => {
    advert.classList.add("active");

    setTimeout(() => {
        advert.classList.remove("active");
    }, 3000); // hide after 3 seconds
};

/* Show advert if image fails */
image.onerror = () => {
    advert.classList.add("active");
};

}