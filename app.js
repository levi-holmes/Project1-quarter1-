$("document").ready(function() {
  $("button").click(function() {
  })
});

var apiURLcards = "https://api.magicthegathering.io/v1/cards/?"

var apiURLsets = "https://api.magicthegathering.io/v1/sets/?"

var getUrl = PopulateCards + searchInput;

var PopulateCards = apiURLcards + "name=";

var searchInput = $('#search').val();

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

$("#searchButton").click(function(event){
  event.preventDefault();
  console.log(apiURLcards);
  var searchName = apiURLcards + "name=" + $('#search').val();
  console.log(searchName);
  $.get(searchName)
    .then(function(data){
      console.log(data);
      var cards = data.cards;

      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var image = card.imageUrl;

        $('.cardsContainer').append('<img src="' + image + '">')

      }


	});
})
$(".cardsContainer").empty();
$.get(PopulateCards).then(function(data) {
    var cards = data.cards.imageUrl;
    for (var i = 0; i < cards.length; i++) {
      updatePage(cards[i]);

    }
  });



function cardPopulator(){ $('.searchButton').click (function(){
  });
}

  $.get(getUrl).then(function(data) {
    var cards = data.cards;
    for (var i = 0; i < cards.length; i++) {
      updatePage(cards[i]);
    }
  })
