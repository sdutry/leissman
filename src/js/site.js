jQuery(function() {
  imageMapResize();
});

//define naturalWidth and naturalHeight jQuery methods
(function($){
  var props = ['Width', 'Height'];
  var prop;

  while (prop = props.pop()) {
    (function (natural, prop) {
      $.fn[natural] = (natural in new Image()) ? 
      function () {
        return this[0][natural];
      } : 
      function () {
        var node = this[0];
        var img;
        var value;

        if (node.tagName.toLowerCase() === 'img') {
          img = new Image();
          img.src = node.src,
          value = img[prop];
        }
        return value;
      };
    }('natural' + prop, prop.toLowerCase()));
  }
}(jQuery));

jQuery(function() {
  jQuery('body#stardew img.overlay').on('click', function() {
    jQuery('#modalOverlayImage').attr('src', $(this).attr('src'));
    var fullImageModalWidth = $(this).naturalWidth() + 32;
    var maxScreenModalWidth = window.innerWidth - 32;
    var modalWidth = Math.min(fullImageModalWidth, maxScreenModalWidth);
    jQuery('#imagemodal .modal-dialog').css('width', modalWidth);
    jQuery('#imagemodal').modal('show');
  });
});
