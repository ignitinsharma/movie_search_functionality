//--> Search funtionality
//--> if example i search movie "avengers" so browser made 7 8 request a av ave aven aveng avenge avenger avenges
//--> kind of if you type fast so it made really less request as compared to upper senario.

//--> main() function for checking input and then work on it

let main_div=document.getElementById('movies');

async function main() {

  try {

    //--> what we are searching
    let query = document.getElementById("query").value;
    //console.log(query)

    //-->  search input we checking in api
    let data = await fetch(
      `http://www.omdbapi.com/?apikey=e69f7110&s=${query}`
    );

    //--> data come in readable stream so we have colllect and change using JSON()
    //--> also we await here while coverting data because its also take time while coveting
    //--> its a kind of wait when this take time so we can use just kidding... but kind of.....
    let newdata = await data.json();

    //--> we are appending here because data is coming from after coverting
    //--> so thats why we have to pass the data from here to their
    console.log(newdata);

    //--> we go into database and taking search results Data.Search
    let actualData= data.Search

if(actualData!=undefined)
{
    display(actualData);

}

  } 
   //--> catch for error value for handling sucess value
  catch (error) {
    console.log(error);
  }
}


//--> after fetching data sucessfully we have to append the things and display to main screen.

function display(data){


    data.forEach(function(el){

        //--> for making html empty

        main_div.innerHTML=null
        
        let movies=document.createElement('p')
        movies.innerText=el.Title;

        main_div.append(movies)
    })

}