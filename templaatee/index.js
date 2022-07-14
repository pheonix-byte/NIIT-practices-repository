function showmenu(){
    var nav =document.getElementById("nav-list")
    nav.style.right="0px";
    nav.style.transition="2s"
    var button=document.getElementById("menu")
    button.style.visibility="hidden"

    
}
function hidemenu(){
    var nav =document.getElementById("nav-list")
    nav.style.transition="2s"
    nav.style.right="-200px";
    var button=document.getElementById("menu")
    button.style.visibility="visible"

 

    
}