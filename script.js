
let Movies = [
     {
        moviename: "JOKER",
        poster : "https://c4.wallpaperflare.com/wallpaper/675/275/718/joker-2019-movie-joker-joaquin-phoenix-actor-men-hd-wallpaper-preview.jpg",
        rating : 8.5
     },
     {
        moviename: "AVENGERS ENDGAME",
        poster : "https://i.pinimg.com/736x/49/b7/f9/49b7f9891ff52159860b09ab5ed1a2d9.jpg",
        rating : 9.5
     },
     {
        moviename: "AVATAR",
        poster : "https://w0.peakpx.com/wallpaper/433/718/HD-wallpaper-avatar-poster-avatar-poster-blue-hollywood-fantasy-thumbnail.jpg",
        rating : 8.5
     },
     {
        moviename: "EXISTS",
        poster : "https://getwallpapers.com/wallpaper/full/4/8/7/1267898-movie-poster-wallpaper-1920x1200-for-windows-10.jpg",
        rating : 7.5
     },
     {
        moviename: "TITANIC",
        poster : "https://www.movieposters.com/cdn/shop/products/c104f1bfed20481f35bc96cb9addc940_240x360_crop_center.progressive.jpg?v=1573588574",
        rating : 9.2
     },
     {
        moviename: "WHITEHOUSEDOWN",
        poster : "https://i.pinimg.com/736x/70/ca/4f/70ca4f14079446ae6b74d2f912cfa4bb.jpg",
        rating : 7.5
     },
     {
        moviename: "RAM-LEELA",
        poster : "https://wallpapercave.com/wp/wp8807389.jpg",
        rating : 6.9
     },
     {
        moviename: "OPENHEIMER",
        poster : "https://www.tallengestore.com/cdn/shop/products/Oppenheimer-CillianMurphy-ChristopherNolan-HollywoodMoviePoster_1_0d1586b1-e2a3-48ea-84a0-fd76268635f4.jpg?v=1647424462",
        rating : 8.3
     }
]




function searchMovie() 
{
    let MovieName = document.getElementById('search').value;
    
    if(MovieName !== "") {

         let result =Movies.filter(function(movie)
                     {
                        return movie.moviename.toUpperCase().includes(MovieName.toUpperCase())
                     })


         displaymovies(result);

    }

    else  {

      displaymovies(Movies);
    }
}


function displaymovies(data) 
{
   document.getElementById("movies").innerHTML = "";            



            let htmlString = ``;

            for(let i = 0; i < data.length; i++) 
            {
               htmlString = htmlString + `
                  <div class="movie">

                     <div class="overlay">

                        <div class="videos">
                           
                        </div>
                        <div class="details">
                           <h1>${data[i].moviename} </h1>
                           <h2>IMDB: ${data[i].rating} </h2>
                           <h5>JAack Crawley. Katherine Langford</h5>  
                        </div>
                     </div>
                     
                     <img class="poster" src="${data[i].poster} " alt="poster">
                  </div>
               `
            }

            // console.log(htmlString);
            document.getElementById("movies").innerHTML = htmlString;

}

displaymovies(Movies);
