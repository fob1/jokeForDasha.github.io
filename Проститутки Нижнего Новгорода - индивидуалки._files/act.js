
var pr=false;
function openright() {
	$(".menu_container").animate({left: '0'}, 500);
  pr=true;
}
function closeright() {
	$(".menu_container").animate({left: '-250px'}, 500);
  pr=false;
}



$(document).ready(function() {


  //////////////////////////////////////


  $('body').on('click', '.top_menu2', function () {
    if(pr==false) openright();
    else closeright();
  });
  
  
  //////////////////////////////////////
  
  
  $('ul.select_city').each(function() {
    var select=document.createElement('select');
    $(select).insertBefore('ul.select_city');
    select.id="select_city";
    $('ul.select_city').remove();

    
    $('li a', this).each(function() {
      option=$(document.createElement('option')).appendTo(select).val(this.href).html($(this).html());
    });
    $("select#select_city").change(function() {
      window.location.href = this.value;
    })
  });
  
  
  ///////////////////////////////////////////////////


  $('body').on('submit', '#addComment', function (event) {
    var posting=$.post('/add_comment.php', $(this).serialize());
    posting.done(function(data){
      alert(data);
      jQuery('#addComment').trigger('reset');
    });
    return false;
  });
  
  
  //////////////////////////////////////////////////
  

  $('body').on('click', '.swiper-button-close', function() {
    $( ".swiper" ).remove();
  });


  $('.photos').on('click', 'a', function() {
    var num=$(this).index('.photos a');
    var imgs=$(".photos a").toArray();
    photo(imgs, num);
    return false;
  });


  function photo(imgs, num) {
    
    window.scrollTo(0, 0);

    var out='<div class="swiper">';
    out+='<style>@import url("/css/swiper.css");</style>';
    out+='<script src="/javascripts/swiper.jquery.min.js"></scr'+'ipt>';
    out+='<div class="swiper-container"><div class="swiper-wrapper">';
    
    $.each(imgs, function (key, value) {
      out+='<div class="swiper-slide">';
      out+='<img data-src="'+value+'" class="swiper-lazy">';
      out+='<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>';
      out+='</div>';
    });
    
    out+='</div>';
    out+='<div class="swiper-pagination swiper-pagination-white"></div>';
    out+='<div class="swiper-button-next swiper-button-white"></div>';
    out+='<div class="swiper-button-prev swiper-button-white"></div>';
    out+='<div class="swiper-button-close"></div>';
    out+='</div>';
    
    out+='<script>';
    out+='var swiper = new Swiper(\'.swiper-container\', {';
    out+='initialSlide: '+num+',';
    out+='nextButton: \'.swiper-button-next\',';
    out+='prevButton: \'.swiper-button-prev\',';
    out+='pagination: \'.swiper-pagination\',';
    out+='paginationClickable: true,';
    out+='preloadImages: false,';
    out+='lazyLoading: true';
    out+='});';
    out+='</scr'+'ipt>';
    out+='</div>';
    
    $(out).appendTo($("body"));
  }

  ////////////////////////////////////////////

  
});
