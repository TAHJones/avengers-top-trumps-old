
var dotList = document.getElementsByClassName('dot');
// console.log(typeof(dotList));

// for (var i=0; i < dotList.length; i++ ) {
/*for (var item in dotList) {
    dotList[item].addEventListener('click', function() {
        var indexNumber = dotList[i].index;
        console.log(indexNumber);
        alert(e.target.value);
        alert(this.value);
    });
}*/

var dots = document.querySelectorAll('#slideSelector div');

for(var i=0; i < dots.length; i++) {

  dots[i].index = i;

  dots[i].addEventListener('click', function(e) {
    
    // indexNumber = e.target.innerHTML = e.target.index;
    var n = e.target.index + 1;
    
    console.log(n);

  }, false);
}