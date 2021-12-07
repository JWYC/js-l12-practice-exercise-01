const randomFolks = document.querySelector(".random-peeps");

const getData = async function(){
   const usersRequests = await fetch ("https://randomuser.me/api?results=5");
   const data = await usersRequests.json();
   const userResults = data.results;
   displayUsers(userResults);
   
}

getData();

const displayUsers = function(userResults){
   randomFolks.innerHTML ="";
   for (let user in userResults){
      const country = user.location.country;
      const name = user.name.first;
      const imgURL = user.picture.medium;
      document.createElement("userDiv");
      userDiv.innerHTML = `
         <h3>${name}</h3>
         <p>${country}</p>
         <img src ${imgURL} alt= "User avatar"/>
      `;
      randomFolks.append(userDiv);
   }

};