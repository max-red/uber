new WOW().init();

// Modal

$ ('.button').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow');
    $("body").css("overflow", "hidden");
    $(".modal__close").click(function(){
        $("body").css("overflow", "auto");
    });
});

$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});

$('.feed-form').validate({
    rules: {
        name : {
            required: true,
            minlength: 2
        },
        phone : {
            required: true,
            minlength: 10
        },
        email : {
            required : true,
            email : true
        }
    },
    messages: {
        name: {
            required: "Пожалуйста введите своё имя",
            minlength: jQuery.validator.format("Введите {0} символа!")
          },
        phone: {
            required: "Пожалуйста, введите свой номер",
            minlength: jQuery.validator.format("Введите {0} цифр!")
          },
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Неправильно введён адрес почты"
        }
    }
});

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    return false;
});

// Scroll

$(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.up').fadeIn();
    } else {
        $('.up').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

// Burger

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    burger = document.querySelector('.header__burger');

    burger.addEventListener('click', () => {
        burger.classList.toggle('header__burger_active');
        menu.classList.toggle('header__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('header__burger_active');
            menu.classList.toggle('header__menu_active');
        });
    });
});