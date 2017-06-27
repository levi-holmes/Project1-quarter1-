var $SetSelect = $('#cardSets')

$.get('https://api.magicthegathering.io/v1/sets/')
  .then(function(data){
    console.log(data);
for (var i = 0; i < data.sets.length; i++) {
  $SetSelect.append("<option><p>" + data.sets[i].name + "</p></option>")
}
})

var $select = $('#cardSets')

$.get('https://api.magicthegathering.io/v1/sets/')
  .then(function(data){
    console.log(data);
for (var i = 0; i < data.sets.length; i++) {
  $select.append("<option><p>" + data.sets[i].name + "</p></option>")
}
})
