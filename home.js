var premierLg = document.getElementById("premierLg");
var bundesligaLg = document.getElementById("bundesligaLg");
var serieaLg = document.getElementById("serieaLg");
var ligue1Lg = document.getElementById("ligue1Lg");
var laligaLg = document.getElementById("laligaLg");

premierLg.addEventListener("click",(e)=>{
  localStorage.setItem('fetchid', '4328');
  localStorage.setItem('bckgdurl', 'https://besthqwallpapers.com/Uploads/20-5-2019/92948/premier-league-glitter-logo-football-leagues-creative-metal-grid-background-premier-league-logo.jpg');
})

bundesligaLg.addEventListener("click",(e)=>{
  localStorage.setItem('fetchid', '4331');
  localStorage.setItem('bckgdurl', 'https://www.topbets.com.ng/wp-content/uploads/2020/09/bundesliga-994x559.jpg');
})

serieaLg.addEventListener("click",(e)=>{
  localStorage.setItem('fetchid', '4332');
  localStorage.setItem('bckgdurl', 'https://www.persources.com/wp-content/uploads/2018/08/serie-a-italy-1.jpg');
})

ligue1Lg.addEventListener("click",(e)=>{
  localStorage.setItem('fetchid', '4334');
  localStorage.setItem('bckgdurl', 'http://worldsoccertalk.com/wp-content/uploads/2013/10/ligue-1-logo.jpg');
})

laligaLg.addEventListener("click",(e)=>{
  localStorage.setItem('fetchid', '4335');
  localStorage.setItem('bckgdurl', 'https://wallpapercave.com/wp/wp1894701.jpg');
})