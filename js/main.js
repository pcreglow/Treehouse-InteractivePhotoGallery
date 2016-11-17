/* Gallery Search */

function gallerySearch(gallery) {

    $('input').change(function() {
            var filter = $(this).val();
            if (filter) {

                var matches = $(gallery).find('p:Contains(' + filter + ')').parent();
                $('a', gallery).not(matches).hide();
                $(matches).show();

            } else {
                $(gallery).find("a").show();
            }
            return false;
        })
        .keyup(function() {
            $(this).change();
        });
}

$(function() {
    gallerySearch($("#gallery"));
});

/* Lightbox */

var $lightbox = $('<div id="lightbox"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$lightbox.append($image);
$lightbox.append($caption);
$("body").append($lightbox);

$(".gallery-photo a").click(function(event) {
    event.preventDefault();
    var photoLocation = $(this).attr("href");
    $image.attr("src", photoLocation);
    $lightbox.show();
    var captionText = $(this).children("img").attr("caption");
    $caption.text(captionText);
});

$lightbox.click(function() {
    $lightbox.hide();
});
