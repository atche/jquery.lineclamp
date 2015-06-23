/*
  * jQuery Line Clamp - Multiline text with ellipsis
  *
  * @modified: 2015/06/23
  * @version:  1.1.0
  * @requires: jQuery 1.7.x or later
  * @author:   Atsushi Yoshii
  * @link:     https://github.com/atche/jquery.lineclamp
  * @license:  The MIT License
*/

;(function($){
  var ellipsis = {
    core: function(obj, h){
      var $lcScope = obj.find('.jq-lineClamp-trim'),
          $lcWrap = obj.children('.jq-lineClamp-wrap'),
          wrapHeight = $lcWrap.height();
      if(wrapHeight > Math.round(h)){
        while($lcWrap.height() > Math.round(h) && $lcScope.text().length >= 2){
          var trimText = $lcScope.html();
          $lcScope.html(trimText.slice(0,-2) + '…');
        }
      }
    }
  };

  $.fn.lineClamp = function(line, opts){
    opts = $.extend({
      display: this.css('display'),
      wrapper: '<span />',
      responsive: false
    }, opts);

    return this.each(function(){
      var emptyElm = 'area, base, br, col, command, embed, hr, img, input, keygen, link, meta, param, source, track, wbr',
          $this = $(this),
          $child = $this.children().not(emptyElm);

      $this.css('display',opts.display).wrapInner(opts.wrapper).children().addClass('jq-lineClamp-wrap').css('display','inline-block');

      if($child.length){
        var hArray = [];
        $child.each(function(){
          var thisLH = $(this).css('line-height');
          if(thisLH.match(/[^¥d¥.]+$/)){
            hArray.push(parseFloat(thisLH) * line);
          }else{
            hArray.push(parseFloat($(this).css('font-size')) * parseFloat(thisLH) * line);
          }
        });
        var thisHeight = Math.max.apply(null, hArray);
        if(!$this.find('.jq-lineClamp-trim').length){
          $child.eq($child.length - 1).addClass('jq-lineClamp-trim');
        }
      }else{
        var thisHeight = $this.css('line-height').match(/[^¥d¥.]+$/) ? parseFloat($this.css('line-height')) * line : parseFloat($this.css('font-size')) * parseFloat($this.css('line-height')) * line;
        $this.children('.jq-lineClamp-wrap').addClass('jq-lineClamp-trim');
      }

      var originInner = $this.find('.jq-lineClamp-trim').html();

      ellipsis.core($this, thisHeight);

      if(opts.responsive){
        $(window).on('resize',function(){
          $this.find('.jq-lineClamp-trim').html(originInner);
          ellipsis.core($this, thisHeight);
        });
      }
    });
  };
})(jQuery);