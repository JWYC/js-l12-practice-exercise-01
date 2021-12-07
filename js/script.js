const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
   const usersResults = await fetch ("https://randomuser.me/api?results=5");
   const data = await usersResults.json();
   console.log(data);
}

getData();

const displayUsers = function(usersResults){
   randomFolks.innerHTML ="";
   for (const user in usersResults){
      const country = data.location.country;
      const name = data.name.first;
      const imgURL = data.picture.medium;
   }

};