var $SetSelect = $('#cardSets')

$.get('https://api.magicthegathering.io/v1/sets/')
  .then(function(data){
    console.log(data);
for (var i = 1; i < data.sets.length; i++) {
  $SetSelect.append("<option><p>" + data.sets[i].name + "</p></option>")
}
})

var $Costselect = $('#cardCost')

$.get('https://api.magicthegathering.io/v1/cards/')
  .then(function(data){
    console.log(data);
for (var i = 0; i < 17; i++) {
  $Costselect.append("<option><p>" + i + "</p></option>")
}
})

// var $Rarityselect = $('#')
//
// $.get('https://api.magicthegathering.io/v1/cards/')
//   .then(function(data){
//     console.log(data);
// for (var i = 0; i < data.sets.length; i++) {
//   $Rarityselect.append("<option><p>" + data.sets[i].rarity + "</p></option>")
// }
// })

console.log(CBLOCK, CSETS, RARITY, COLOR, CMC, CTYPE);
