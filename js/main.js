console.log("Hello World!");
/* $('h2').on('click', function() {
  $(this).hide();
}); */
$('.gallery-photo img').each(function() {
  $(this).attr('alt', $().text().toLowerCase());
});

$('#photo-search').on('keyup', function() {

var searchTerm = $(this).val().toLowerCase();

  $('.gallery-photo img').each(function() {
    if($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
      $(this).css({'opacity': '.3'});
    } else {
      $(this).css({'opacity': '1'});
    }
  });
});
