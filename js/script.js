const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
   const usersRequests = await fetch ("https://randomuser.me/api?results=5");
   const data = await usersRequests.json();
   const userResults = data.results;
   console.log(userResults);
   displayUsers(userResults);
   
}

getData();

const displayUsers = function(userResults){
   randomFolks.innerHTML ="";
   for (let user of userResults){
      const country = user.location.country;
      const name = user.name.first;
      const imgURL = user.picture.medium;
      const userDiv = document.createElement("Div");
      userDiv.innerHTML = `
         <h3>${name}</h3>
         <p>${country}</p>
         <img src = ${imgURL} alt= "User avatar"/>
      `;
      randomFolks.append(userDiv);
   }

};