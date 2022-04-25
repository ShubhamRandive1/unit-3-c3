// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

//key = d8a461d3

// const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=d8a461d3';

const movies_div = document.getElementById('search_bar');

let id;


async function searchMovie() {


    try {




        const search = document.getElementById('search').value;


        const api = `https://omdbapi.com/?t=${search}&i=&page=1&apikey=d8a461d3`


        const res = await fetch(`${api}`);



        const data = await res.json();

        console.log(data)


        const movies = data.search;


        return movies;


    } catch (err) {
        console.log('err', err);
    }
}


function appendMovies(data) {


    search.innerHTML = '';

    data.forEach(function (ele) {

        let div = document.createElement('div');


        let imgs = document.createElement('img');
        imgs.src = ele.Poster;

        let p = document.createElement('p');

        p.innerText = ele.Title;


        let btn = document.createElement('button');

        btn.setAttribute('class', 'book_now');

        btn.addEventListener('click', function () {

        });


        div.append(imgs, p, btn);
        search.append(div);
    });
}

async function main() {

    let data = await searchMovie();


    //console.log("data", data);


    if (data == undefined) {
        return false;
    }
    appendMovies(data);


}

function debounce(funct, delay) {
    if (id) {
        clearTimeout(id);
    }



    id = setTimeout(function () {

        funct()
    }, delay);


}