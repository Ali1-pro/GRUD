var siteNameInput = document.getElementById('siteName')
var siteUrlInput = document.getElementById('siteUrl')
var bookContiner ;
if(localStorage.getItem("book") == null){
    bookContiner = [];
}else {
    bookContiner = JSON.parse(localStorage.getItem("book"));
    displayBook();
}
function addBook() {
    var bookSite = {
        code: siteNameInput.value,
        url: siteUrlInput.value,
    }
    bookContiner.push(bookSite);
    displayBook();
    localStorage.setItem("book",JSON.stringify(bookContiner));
    clearForm();
}
function clearForm(){
    siteNameInput.value = null;
    siteUrlInput.value = null;
}
function displayBook(){
    var crtona='';
    for(var i=0;i<bookContiner.length;i++){
        crtona+= ` <tr >
        <td class="fw-bold">${i}</td>
        <td class="fw-bold">${bookContiner[i].url}</td>
        <td><button class="btn mine-color text-white my-btnn fw-bolder"><i class="fa-solid fa-eye pe-2"></i>Visit</button></td>
        <td><button onclick="Delete(${i})" class="btn btn-danger  text-white fw-bold"><i class="fa-solid fa-trash-can"></i>Delete</button></td>
    </tr>`
    }
document.getElementById('my-table').innerHTML = crtona;
}
function Delete(deleteook){
    bookContiner.splice(deleteook,1)
    console.log(bookContiner);
    localStorage.setItem("book",JSON.stringify(bookContiner));
    displayBook();
}