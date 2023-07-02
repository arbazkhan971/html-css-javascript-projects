const search = document.querySelector('.search-container');
const searchInput = document.querySelector('.input');
const searchIcon = document.querySelector('.button');

console.log(search.classList);
searchIcon.addEventListener("click",()=>{
    // if( search.classList.contains('active') ){
    //     search.classList.remove('active');
    // }else{
    //     search.classList.add('active');
    //     searchInput.focus();
    // }
    search.classList.toggle('active');
    searchInput.focus();
})