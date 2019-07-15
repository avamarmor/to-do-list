var button = $('button');
var append = $('.append');

button.on("click", boop)

function boop(){
  append.append(`<input type="checkbox">`)
}
