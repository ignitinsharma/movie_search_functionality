//--> Search funtionality
//--> if example i search movie "avengers" so browser made 7 8 request a av ave aven aveng avenge avenger avenges
//--> kind of if you type fast so it made really less request as compared to upper senario.

//--> main() function for checking input and then work on it

let main_div = document.getElementById("movies");

async function main() {
  try {
    //--> what we are searching
    let query = document.getElementById("query").value;

    //-->  search input we checking in api
    let data = await fetch(
      //--> so that is movie api and in last i have query means im checking query what user
      //--> entered in box so im passing that input to query and then api will check and give it me results..

      `http://www.omdbapi.com/?apikey=e69f7110&s=${query}`
    );

    //--> data come in readable stream so we have colllect and change using JSON()
    //--> also we await here while coverting data because its also take time while coveting
    //--> its a kind of wait when this take time so we can use just kidding... but kind of.....
    let newdata = await data.json();
    console.log(newdata);
    //--> we are appending here because data is coming from after coverting
    //--> so thats why we have to pass the data from here to their

    //--> in upper data is coming in whole bundle but we need search data only so whats why we are
    //--> taking main objs search data only

    //--> we go into database and taking search results Data.Search
    let actualData = newdata.Search;

    
    //--> we are doing this because in some case api not able to fetch data then its showing
    //--> if data is undefined not readable format so we are not appending it
    //--> into main display function if data is not qual to undeifned means data is valid format so we
    //--> so pass them into display fucntion
    if (actualData != undefined) {
      display(actualData);
    }
  } catch (error) {
    //--> catch for error value for handling sucess value
    console.log(error);
  }
}


//--> after fetching data sucessfully we have to append the things and display to main screen.

function display(data) {
  data.forEach(function (el) {
    //--> for making html empty

    main_div.innerHTML = null;

    let otherdiv=document.createElement("div");

    let img=document.createElement("img");
    img.setAttribute("id", "image")
    img.src=el.Posters;

    let movies = document.createElement("p");
    movies.innerText = el.Title;


    otherdiv.append(img,movies);
    main_div.append(otherdiv);
  });
}


//--> debounce or delay function 

//--> debounce fucntion working--> if someone type faster then 1 sec so then bounce the 
//--> api request if someone slow type take time more than one min then one second 
//--> then fetch data every one sec letter  

function debounce(func, delay){


}