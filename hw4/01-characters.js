// URL to Game of Thrones API to fetch all characters
function getInfo(){
fetch('https://thronesapi.com/api/v2/Characters')
   .then (response => {
      return response.json();
}).then( info => {
   const ht = info.map(user =>{
      return `<div id="inside"><p><img id ="charname" alt="${user.firstName}" src="${user.imageUrl}"</img> </p>
       <p id="name"> ${user.firstName} ${user.lastName}</p>
       <p id="title"> ${user.title} </p> </div>`;
   }).join('')
   document.querySelector('#ids').innerHTML = ht;
})
.catch(error => {
   console.log(error);

})
}
getInfo();