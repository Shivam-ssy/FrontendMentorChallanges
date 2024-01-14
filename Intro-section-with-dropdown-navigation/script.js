const menu=document.querySelector(".nav-list-mobile")
function showMenu(){
    menu.style.visibility="visible"

}
function closeMenu(){
    menu.style.visibility= "hidden"
}
const listMenu = document.querySelectorAll(".drop-down");
const lists = document.querySelectorAll(".drop-down-content");

listMenu.forEach((menu, index) => {
    menu.addEventListener('click', () => {
        lists.forEach((list, i) => {
            if (i !== index) {
                list.style.display = "none";
            }
        });
        lists[index].style.display = (lists[index].style.display === "block") ? "none" : "block";
    });
});