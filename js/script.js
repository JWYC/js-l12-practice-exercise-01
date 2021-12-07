const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
   const usersResults = await fetch ("https://randomuser.me/api?results=5");
   const data = await usersResults.json();
   console.log(data);
}

getData();

