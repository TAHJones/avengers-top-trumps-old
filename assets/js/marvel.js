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

    xhr.open("GET", "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e8e6c4f6d9f4f13655a0a25d4649f754", true);
    xhr.send();
}

// callback function that retrieves comic character data from getMarvelData function and adds to index.html using page section functions
function showMarvelData(data) {
    marvelData(data);
    copyRightData(data);
}
/*function printDataToConsole(data) {
    console.log(data);
}*/

function marvelData(data) {
    var marvelData = document.getElementById('marvelData');
    // marvelList.innerHTML = `<div>${data.toString()}</div>`
    
    var marvelName = data.data.results[10].name;
    var marvelDescription = data.data.results[10].description;
    
    var portraitSmall =	'50x75px';
    var portraitMedium = '100x150px';
    var portraitLarge = '150x225px';
    var portraitFantastic =	'168x252px';
    var portraitUncanny = '300x450px';
    var portraitIncredible = '216x324px';
    var thumbnailPath = data.data.results[50].thumbnail.path;
    // modifiy path name to https to avoid getting blocked mixed content
    thumbnailPath = thumbnailPath.replace('http','https');
    console.log(thumbnailPath);
    var thumbnailExtension = data.data.results[50].thumbnail.extension;
    // var thumbnail = "https://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_xlarge.jpg";
    
    var fullThumbnailPath = thumbnailPath + "/" + portraitLarge + "." + thumbnailExtension;
    console.log(fullThumbnailPath);

        // marvelList.innerHTML = marvelListData;
        marvelData.innerHTML = `<div>${marvelName}</div><div>${marvelDescription}</div><img src="${fullThumbnailPath}" alt="Superhero image"></img>`;
        // marvelList.innerHTML = `<img src="${thumbnail}" alt="Superhero image"></img>`;
        


}

function copyRightData(data) {
    var copyRight = document.getElementById('copyRight');
    copyRight.innerHTML = `<p>${data.attributionText}</p>`;
}

// when page has loaded get data from Marvel API and send to showMarvelData callback function
window.addEventListener('load', getMarvelData(showMarvelData), false);
