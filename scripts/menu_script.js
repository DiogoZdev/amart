
function toggleMenu() {
    
    if(document.getElementById("menu").classList.contains("left_500")==true){
        document.getElementById("menu").classList.remove("left_500");
        document.getElementById("bar1").classList.add("bar1x");
        document.getElementById("bar2").classList.add("bar2x");
        document.getElementById("bar3").classList.add("bar3x");


    } else {
        document.getElementById("menu").classList.add("left_500");
        document.getElementById("bar1").classList.remove("bar1x");
        document.getElementById("bar2").classList.remove("bar2x");
        document.getElementById("bar3").classList.remove("bar3x");
    }
}