// ===== PRELOADER

$(window).on('load', function () {
    var $preloader = $('#page-preloader');

    $preloader.fadeOut();
});



$(document).ready(function() {
    $('body .section').eq(0).addClass("active").fadeIn(1000); // Показываем первый блок, можно и не первый, если прописать нужную цифру в eq()
    setInterval('blockAnimate();', 12000);// Вызываем функцию для смены блока каждые 20 секунд
});

// Функция для смены блоков, показывает блоки по очереди, начальный блок задаётся выше
function blockAnimate() {
    var length = $('body .section').length - 1;
    $('body .section').each(function(index) {
        if($(this).hasClass('active') && index != length) {
            $(this).removeClass("active").fadeOut(1000).next('.section').addClass("active").delay(1000).fadeIn(1000);
            return false;

        } 
        
        else if (index == length) {
            $(this).removeClass('active').fadeOut(1000);
            $('body .section').eq(0).addClass("active").delay(1000).fadeIn(1000);
            return false;
        }
    });
};

$(document).ready(function(){
  $(".menu-btn").click(function() {
    $(".menu-desktop").fadeToggle(300);
  });
});
$(document).ready(function(){
  $(".menu-close").click(function() {
    $(".menu-desktop").fadeToggle(300);
  });
});
$(document).ready(function(){
  $(".menu-btn").click(function() {
    $('.menu-close').addClass('change');
  });
});
$(document).ready(function(){
  $(".menu-close").click(function() {
    $('.menu-close').removeClass('change');
  });
});



$(document).ready(function(){
  $(".close-cookies").click(function() {
    $('.cookie-branch').hide();
    $('#section1').css("height", "100vh");
    $('#section2').css("height", "100vh");
    $('#section3').css("height", "100vh");
    $('#section4').css("height", "100vh");
    $('#section5').css("height", "100vh");
  });
});