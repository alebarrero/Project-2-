const movies= document.getElementById("movies")
const restaurants= document.getElementById("restaurants")
const music= document.getElementById("music")
const concerts= document.getElementById("concerts")

movies.addEventListener("click",function(){
    console.log("test")
    // fetch("/movies")
    window.location.href="/filtered/movies"
}); 

concerts.addEventListener("click",function(){
    console.log("test")
    // fetch("/concerts")
    window.location.href="/filtered/concerts"
});

restaurants.addEventListener("click",function(){
    console.log("test")
    // fetch("/restaurants")
    window.location.href="/filtered/restaurants"
});

music.addEventListener("click",function(){
    console.log("test")
    // fetch("/music")
    window.location.href="/filtered/music"
});