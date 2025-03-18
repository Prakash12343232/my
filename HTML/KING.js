var ar;
function myfuction() {
    ar = setTimeout(showPage, 300);
}
function showPage() {
    document.getElementById("loader").style.display="none";
    document.getElementById("mydiv").style.display="block";
}
