$(document).ready(function() {

    /* Make jQuery:contains Case-Insensitive - CSS Tricks */

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function(elem) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

    /* Gallery Search */

    function gallerySearch(gallery) {

        $('input').change(function() {
                var filter = $(this).val();
                if (filter) {

                    var matches = $(gallery).find('p:contains(' + filter + ')').parent();
                    $('li', gallery).not(matches).hide();
                    $(matches).show();

                } else {
                    $(gallery).find("li").show();
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

    /* Lightbox and Gallery Controls */

    var $lightbox = $('<div id="lightbox"></div>');
    var $previous = $('<p class="previous"><</p>')
    var $image = $('<img>');
    var $caption = $('<p></p>');
    var $next = $('<p class="next">></p>')


    $lightbox.append($next);
    $lightbox.append($previous);
    $lightbox.append($image);
    $lightbox.append($caption);
    $("body").append($lightbox);

    $(".gallery-photo").click(function(event) {
        event.preventDefault();
        var photoLocation = $(this).children("a").attr("href");
        $image.attr("src", photoLocation);
        $lightbox.show();
        getLightboxImage(this);
        var captionText = $(this).children("p").text();
        $caption.text(captionText);


    $next.click(function(event) {
      event.stopPropagation();
      slideNextImage();
      $image.show();
      $caption.text(getLightboxCaption);
    });

    $previous.click(function(event) {
      event.stopPropagation();
      slidePreviousImage();
    });

    function getLightboxImage(image) {
      lightboxImage = $(image).children("a").next();
      lightboxCaption = $(image).children("p").next().text();
      lightboxImageLocation = $(lightboxImage).attr("href");
      $image.attr("src", lightboxImageLocation);
      $caption.text(lightboxCaption);
    }

    function slideNextImage() {
      getNextImageParent = $(lightboxImage).parent().next();
      getLightboxCaption = $(getNextImageParent).children("p").text();
      getNextImageLocation = $(getNextImageParent).children("a").attr("href");
      $image.attr("src", getNextImageLocation);
      getLightboxImage(getNextImageParent);
    }

    function slidePreviousImage() {

    }

    });

    $lightbox.click(function() {
        $lightbox.hide();
    });

});
