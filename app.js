var apiURLcards = "https://api.magicthegathering.io/v1/cards/?"

var apiURLsets = "https://api.magicthegathering.io/v1/sets/?"


var $SetSelect = $('#cardSets')

$.get(apiURLsets)
  .then(function(data){
    console.log(data);
for (var i = 1; i < data.sets.length; i++) {
  $SetSelect.append("<option><p>" + data.sets[i].name + "</p></option>")
}
})

var $Costselect = $('#cardCost')

$.get(apiURLcards)
  .then(function(data){
    console.log(data);
for (var i = 0; i < 17; i++) {
  $Costselect.append("<option><p>" + i + "</p></option>")
}
})


// var apiURL = "https://api.magicthegathering.io/v1/cards?"
//
// var getUrl = apiURL + colorSelect + typeSelect + raritySelect + eternalSelect + modernSelect + nameSelect;
//
// document.getElementById('searchButton').click(function() {
//   alert('I was clicked')
// })
//https://api.magicthegathering.io/v1/cards?name=elf

var searchName = apiURLcards + "name=" + searchInput;
console.log(searchName);

$("#searchButton").click(function(event){
  event.preventDefault();
  console.log(apiURLcards);
//var searchInput = $('#search').val();
 $.get(searchName)
.then(function(data){
console.log(searchInput);

	});
})
$(".cardsContainer").empty();
$.get(searchName.then(function(data) {
    var cards = data.cards;
    for (var i = 0; i < cards.length; i++) {
      updatePage(cards[i]);

    }
})

function updatePage(cards) {
    $(".cardsContainer").append('<img src="'+ cards.imageUrl + '">')
};


$('.searchButton').click (function(){
var searchInput = $('#search').text();
apiURL + "name=" + searchInput;})
// window.open(url);)
