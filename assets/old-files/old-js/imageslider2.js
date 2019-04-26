// window.onload = function() {
  


// var n = 0;
// function currentSlide(n) {
// var slideSelector = document.getElementsByClassName('slide-selector');
var slideSelector = document.querySelectorAll('.slide-selector > span');
var dotList = document.getElementsByClassName('dot');
// console.log(dotList);
for (var i=0; i < dotList.length; i++ ) {
// var indexNumber = dotList[i].index;
// console.log(dotList[i]);
// console.log(dotList[i].index);
console.log(typeof(dotList[i].index));

dotList[i].addEventListener('click', function() {
  console.log(this.index);

});
}
for(var i = 0; i < dotList.length; i++) {
dotList[i].addEventListener('click', function() {
  // this.index = 1;
  console.log(this.index);
  // e.target.id = 'getIndexNumber';
  /*for (var i=0; i < slideSelector.length; i++) {
    var indexNumber = slideSelector[i].index = i;
    var indexNumber = slideSelector[i].index;
    console.log(indexNumber);
  }*/
    // n = e.target.index;
});
}
// }
  // showSlides(slideIndex = n);
// }
// console.log(n);
// }