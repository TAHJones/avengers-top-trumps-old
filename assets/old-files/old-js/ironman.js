var apiEndpoint = 'https://gateway.marvel.com:443/v1/public/';
var resourceType = 'characters';
// var superHero = 'Spider-Man';
var superHero = 'Iron Man';
// var superHero = 'Captain America';
// var superHero = 'Hulk';
// var superHero = 'Thor';
// var superHero = 'Doctor Strange'; no description
// var superHero = 'Black Panther'; no description
// var superHero = 'Hawkeye'; no description
// var superHero = 'Captain Midlands'; // can't find
// var superHero = 'Ant-Man'; can't find
// var superHero = 'Carol Danvers'; can't find
// var superHero = 'Deadpool';
// var superHero = 'Black Widow'; // no description
// var superHero = 'Falcon';
// var superHero = 'Groot'; // no description
// var superHero = 'Guardians of the Galaxy';
// var superHero = 'Happy Hogan'; // no description
// var superHero = 'Korg'; // no description
// var superHero = 'Nick Fury'; // no description
// var superHero = 'Rocket Raccoon'; // no description
// var superHero = 'Scarlet Witch'; // no description
// var superHero = 'Mantis'; // no description
// var superHero = 'Vision'; // no description
// var superHero = 'Quicksilver'; // no description
// var superHero = 'Winter Soldier'; // no description
// var superHero = 'Wasp';
// var superHero = 'Colossus';
// var superHero = 'Mr. Fantastic'; // no description
// var superHero = 'Wong';
// var superHero = 'Silver Surfer'; // no description

// var superHero = 'Thanos';
// var superHero = 'Doctor Doom'; // no description
// var superHero = 'Dormammu';  // no description
// var superHero = 'Ultron';
// var superHero = 'Abomination'; // can't find
// var superHero = 'Loki'; // no description
// var superHero = 'Galactus'; // no description
// var superHero = 'Grandmaster'; // no description
// var superHero = 'Infant Terrible'; // no description
// var superHero = 'Justin Hammer'; // no description
// var superHero = 'Kronos'; // no description
// var superHero = 'M.O.D.O.K.'; // no description
// var superHero = 'Magneto'; // no description
// var superHero = 'Mandarin'; // no description
// var superHero = 'Mephisto'; // no description
// var superHero = 'Morbius'; // no description
// var superHero = 'Nebula'; // no description
// var superHero = 'Sentinel'; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description
// var superHero = ''; // no description

var apiKey = 'e8e6c4f6d9f4f13655a0a25d4649f754';

var apiURL = apiEndpoint + resourceType + '?name=' + superHero + '&apikey=' + apiKey;

//https://gateway.marvel.com:443/v1/public/characters?name=Ironman&apikey=e8e6c4f6d9f4f13655a0a25d4649f754

// console.log(apiURL);
// console.log('https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man&apikey=e8e6c4f6d9f4f13655a0a25d4649f754');

// get comic character data from the Marvel API using XMLHttpRequest object
function getMarvelData(callBack) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log("success!", this.readyState, this.status, this.statusText, this.responseText);
            callBack(JSON.parse(this.responseText));
            // callBack(this.responseText);
        } else {
            console.log("error!", this.readyState, this.status, this.statusText);
        }
    };

    xhr.open("GET", apiURL, true);
    xhr.send();
}

// https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man&apikey=e8e6c4f6d9f4f13655a0a25d4649f754

// callback function that retrieves comic character data from getMarvelData function and adds to index.html using page section functions
function showMarvelData(data) {
    marvelData(data);
}

// function that...
function marvelData(data) {
    var marvelData = document.getElementById('marvelData');
    var marvelName = data.data.results[0].name;
    var marvelDescription = data.data.results[0].description;
    var marvelResources = data.data.results[0].urls;
    console.log(marvelResources);

    // loop through array of objects containing external urls and generate list of page links
    var marvelResourceList;
    for (var item in marvelResources) {
        var type = marvelResources[item].type;
        var url = marvelResources[item].url;
        marvelResourceList += `<li><a href="${url}" target="_blank">${type}</a></li>`;
    }

    // removed 'undefined from the beginning of the list'
    marvelResourceList = marvelResourceList.replace('undefined','');

    // console.log(marvelResourceList.replace('undefined',''));
    // resource path requires api key query string
    // marvelResources = marvelResources + apiKey;
    // var marvelResources = 'https://gateway.marvel.com:443/v1/public/characters/1009610?apikey=e8e6c4f6d9f4f13655a0a25d4649f754';
    // var portraitSmall =	'50x75px';
    // var portraitMedium = '100x150px';
    // var portraitLarge = '150x225px';
    // var portraitFantastic =	'168x252px';
    // var portraitUncanny = '300x450px';
    // var portraitIncredible = '216x324px';
    var thumbnailPath = data.data.results[0].thumbnail.path;
    // modifiy path name to https to avoid getting blocked mixed content
    thumbnailPath = thumbnailPath.replace('http','https');
    // console.log(thumbnailPath);
    var thumbnailExtension = data.data.results[0].thumbnail.extension;
    // var thumbnail = "https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg";

    // var fullThumbnailPath = thumbnailPath + "/" + portraitLarge + "." + thumbnailExtension;
    var fullThumbnailPath = thumbnailPath + "." + thumbnailExtension;
    // console.log(fullThumbnailPath);

        // marvelList.innerHTML = marvelListData;
        marvelData.innerHTML = `<div><h2>${marvelName}</h2></div>
                                <div><p>${marvelDescription}</p></div>
                                <div><img src="${fullThumbnailPath}" alt="${marvelName}" height="200px" width="200px"></img>
                                <div><ul>${marvelResourceList}</ul></div>`;
                                // <div><a href="${marvelResources}" target="_blank">${marvelResources}</a></div>

        // marvelList.innerHTML = `<img src="${thumbnail}" alt="Superhero image"></img>`;


}

// when page has loaded get data from Marvel API and send to showMarvelData callback function
window.addEventListener('load', getMarvelData(showMarvelData), false);

