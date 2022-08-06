//--> Search funtionality
//--> if example i search movie "avengers" so browser made 7 8 request a av ave aven aveng avenge avenger avenges
//--> kind of if you type fast so it made really less request as compared to upper senario.

//--> main() function for checking input and then work on it

let main_div = document.getElementById("movies");

//--> this id for setTimeout function
let id;
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
  //--> for making html empty
  main_div.innerHTML = null;

  data.forEach(function (el) {
    let otherdiv = document.createElement("div");
    otherdiv.setAttribute("id", "movies_innerdiv");

    //--> putting event listner to that div when someone click on movie list
    //--> then event happens and then event pass the value data into that newevent()...
    otherdiv.addEventListener("click", () => {
      newevent(el);
      console.log(el);
    });

    let img = document.createElement("img");
    img.setAttribute("id", "image");
    img.src = el.Poster;

    let movies = document.createElement("p");
    movies.innerText = el.Title;

    otherdiv.append(img, movies);
    main_div.append(otherdiv);
  });
}

//--> debounce or delay function

//--> debounce fucntion working--> if someone type faster then 1 sec so then bounce the
//--> api request if someone slow type take time more than one min then one second
//--> then fetch data every one sec letter

//--> parameter are nothing but main is main function delay is time delay we have
//--> done in html which is
function debounce(main, delay) {
  //--> type [a] --> debounce --> main --> setTimeout --> fetch
  //--> type [ab] --> debounce --> main --> setTimeout --> fetch
  //--> type [abc] --> debounce --> main --> setTimeout --> fetch

  //--> so now we write kind of if in search box or stack already having that letters
  //--> so dont fetch prevoius words ex if user type--> abc so why need to check a or ab again..?

  //-->so now we can clear that previous timeOut
  if (id) {
    clearTimeout(id);
  }

  //--> if now i type any word my setTimeout function will excute
  id = setTimeout(function () {
    main(); // main function passing
  }, delay); // delay we have passed one sec in html
}


let new_data = document.getElementById("new_data");
let newimg = document.getElementById("newimg");
let newData_div = document.getElementById("newimg");


//--> for when user click any movie in scroll bar then this function get called
//--> then it shows the image in below slide

function newevent(el) {
  
  new_data.innerHTML=''
  let newimg_img = document.getElementById("newimg_img");
  newimg.src = el.Poster;
  console.log(el);

  let moviename = document.getElementById("moviename");
  moviename.innerText = `Movie Name =${el.Title}`;

  let type = document.getElementById("type");
  type = innerText = `Type =${el.Type}`;

  let Year = document.getElementById("year");
  Year = innerText = `Year =${el.Year}`;

  newimg.append(newimg_img);
  newData_div.append(moviename, type, Year);
  new_data.append(newimg,newData_div)
}
