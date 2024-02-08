
function scrollheader (){
    const header = document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add("header_scroll");
    }else {
        header.classList.remove("header_scroll")
    }
}


window.addEventListener("scroll", scrollheader)