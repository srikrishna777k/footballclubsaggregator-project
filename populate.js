
let container = document.querySelector(".container");
let row = document.querySelector(".row");
let info = document.querySelector(".info");
let infoClose = document.querySelector(".close");
let infoimg = document.querySelector(".info img");
let infoname = document.querySelector(".info p:nth-of-type(1)");
let infostad = document.querySelector(".info p:nth-of-type(2)");
let infodesc = document.querySelector(".info p:nth-of-type(3)");
let infotwitter = document.querySelector(".info a:nth-of-type(1)");
let infoyoutube = document.querySelector(".info a:nth-of-type(2)");
let search = document.querySelector("#search");
let fetchid = localStorage.getItem('fetchid');
let bckgdurl = localStorage.getItem('bckgdurl');
localStorage.removeItem("fetchid");
localStorage.removeItem("bckgdurl");

document.body.setAttribute("style",`background-image: url(${bckgdurl})`);

infoClose.addEventListener("click",()=>{
  info.setAttribute("style", "visibility:hidden");
})

async function fetchdata() {
  try {
    let response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${fetchid}`);
    let json = await response.json();
    for (let i = 0; i < json["teams"].length; i++) {
      let col = document.createElement("div");
      col.className = "col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center mb-5";
      col.innerHTML = `<img src=${json["teams"][i].strTeamBadge}/preview alt="">`
      row.append(col);
    }
    return json["teams"];
  } catch (err) {
    alert(err)
  }
}

function filter() {
  let images = document.querySelectorAll(".row img");
  if (search.value != "")
    for (let i = 0; i < images.length; i++) {
      if (images[i].alt.toLowerCase().includes(search.value.toLowerCase())) {
        images[i].parentElement.setAttribute("style", "display:flex !important");
      }
      else {
        images[i].parentElement.setAttribute("style", "display:none !important");
      }
    }
  else{
    for (let i = 0; i < images.length; i++) {
      images[i].parentElement.setAttribute("style", "display:flex !important");
      console.log(images[i].parentElement);
    }
  }
}

fetchdata().then((array) => {
  let images = document.querySelectorAll(".row img");
  for (let i = 0; i < images.length; i++) {
    images[i].alt = array[i].strTeam;
  }
  document.addEventListener("click", (e) => {
    for (let i = 0; i < images.length; i++) {
      if (e.target == images[i]) {
        info.setAttribute("style", "visibility:visible");
        console.log(array[i].strTeam);
        infoimg.src = array[i].strStadiumThumb + "/preview";
        infoname.innerHTML = array[i].strTeam;
        infostad.innerHTML = array[i].strStadium;
        infodesc.innerHTML = array[i].strDescriptionEN;
        infotwitter.href = "https://" + array[i].strTwitter;
        infoyoutube.href = "https://" + array[i].strYoutube;
        console.log(array[i].strTwitter);
        break;
      }
      else {
        info.setAttribute("style", "visibility:hidden");
      }
    }
  })
  search.addEventListener("keyup", filter);
})