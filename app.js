const menutoggle = document.querySelectorAll('.toggle')[0];
const navigate = document.querySelectorAll('.navigate')[0];
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    navigate.classList.toggle('active');
}
