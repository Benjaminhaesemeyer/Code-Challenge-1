var count = 0

$('document').ready(function(){
  console.log('jQuery sourced');

$('#container').append('<div id="groovy"></div>')
  $('button').on('click', function() {
    $("#container").append(counter(),swapper())
});

function counter(){
  //counting forward by 1
  count++;
  $('#groovy').append('<div id="box"></div>')
  $('#box').attr('id','box');

  var $al = $("#groovy").children().last();
  //adding counter
  $al.append("<p>" + count + "</p>")
  $al.append('<button id="swap">Swap</button>')
  $al.append('<button id="delete">Delete</button>')
}

function swapper() {
$('#swap').on('click', function() {
$(this).find('#box').css("background-color","yellow");
});
}

});
