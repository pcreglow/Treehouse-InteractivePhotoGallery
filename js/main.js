console.log("Hello World!");

/* $('.gallery-photo img').each(function() {
    $(this).attr('caption', $().text().toLowerCase());
});

$('#photo-search').on('keyup', function() {

    var searchTerm = $(this).val().toLowerCase();

    $('.gallery-photo img').each(function() {
        if ($(this).filter('[caption *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}); */

/* $('#photo-search').on('keyup', function() {
  var value = this.value;
  $('.gallery-photo img').hide().each(function() {
     if ($(this).text().search(value) === ('img[alt="' + value + '"]')) {
       $(this).show();
     } else {
       $(this).hide();
     }
  });
}); */


$('#photo-search').on('keyup', function() {
  var value = this.value;
  if ($('.gallery-photo img').find('[alt="' + value + '"]')) {
    $(this).show();
  } else {
    $(this).hide();
  }
});
