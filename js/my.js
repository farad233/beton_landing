jQuery(document).ready(function ($) {
    $("#menu").mmenu({
        "offCanvas": {
            "zposition": "front",
            "position": "right"
        }
    });
    var API = $("#menu").data("mmenu");

    $(".hamburger").click(function () {
        API.close();
    });


});

$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            return false;
        }
    });

    if ($('.descript_beton > .mulbold').attr('aria-expanded') === "true") {
        alert()
    }

});
$(document).ready(function () {
    jQuery.validator.addMethod("usPhoneFormat", function (value, element) {
        return this.optional(element) || /[\(]\d{3}[\)]\d{3}[\-]\d{4}/.test(value);
    }, "Enter a valid phone number.");



    $(".form1").validate({
        rules: {
            adres: {
                required: true
            },
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".form1").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });

    $(".dopvopr").validate({
        rules: {
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".dopvopr").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });
    $(".form2").validate({
        rules: {
            adres: {
                required: true
            },
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".form2").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });
    $(".form12").validate({
        rules: {
            adres: {
                required: true
            },
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".form12").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });
    $(".calcform").validate({
        rules: {
            adres: {
                required: true
            },
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".calcform").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });

    $(".modform").validate({
        rules: {
            adres: {
                required: true
            },
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".modform").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });

    $(".modform1").validate({
        rules: {
            phone: {
                number: true,
                required: true
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "telegram.php",
                data: $(".modform1").serialize(),
                success: swal({
                    title: "Спасибо за заявку!",
                    type: "success",
                    showConfirmButton: false,
                    timer: 2000
                })
            });
            return false;
        }
    });


    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("nav a.scrola").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });


    $('.scrollogo').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    $(window).on("load resize", function (e) {
        if ($(window).width() < 992) {
            $('#topnavigation').addClass('collapse');
            $('.mobowl').addClass('owl-carousel');

            $('.mobowl').owlCarousel({
                loop: false,
                margin: 0,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            })
        } else {
            $('#topnavigation').removeClass('collapse')
        }
    });
});


document.getElementById('priceSpan').innerText = document.getElementById('priseFirstChild').innerText 
var arrItem = [];
document.querySelectorAll('.data-price').forEach(element => {
    element.innerText
    arrItem.push(element.innerText)
});

document.querySelectorAll('.radio-label').forEach(function(item, i) {
    item.dataset.price = arrItem[i]

});



$(document).ready(function () {
    var koefnumb = wNumb({
        decimals: 0,
        thousand: '',
        prefix: ' ',
        suffix: ''
    });
    var price; // Цена марки бетона
    var koef; // Значение ползунка
    var seted;
    var totalpr; // Общая стоимость

    function createSlider(slide) {
        var slider = noUiSlider.create(sliders[slide], {
            start: 1,
            connect: "lower",
            orientation: "horizontal",
            step: 1,
            range: {
                'min': 0,
                'max': 50
            },
            format: wNumb({
                decimals: 0,
                thousand: '',
                postfix: ' м³',
            })
        });

        $(sliders[slide]).data('slider', slider);

        slider.on('update', function (values, handle) {
            $('.slider-input').val(values[handle]);
            $('input[name="objem"]').val(values[handle]);
            koef = (values[handle]);

            $('.priceit1').html(koefnumb.from(koef));

            totalpr = price * koefnumb.from(koef);
            $('.totalpr').html(totalpr);
            $('input[name="itogo"]').val(totalpr);
        });


        $('.buttons_wrtapper input.radio-label').each(function () {

        });
        $('.slider-input').change(function () {
            // on input change, get the slider from the previous element using data
            // now we have the slider object to call set.
            $('.slider').data('slider').set(this.value);
            seted = $(this).val()

        });

        $(".buttons_wrtapper input.radio-label").each(function () {
            if ($(this).is(":checked")) {
                $(this).addClass("checkedcheck");
            } else {
                $(this).removeClass("checkedcheck");
            }

            $('.slider').data('slider').set(seted)
            if ($(this).hasClass("checkedcheck")) {
                price = $(this).data('price');
                $('.buttons_wrtapper input.radio-label').val(price);

            }




            $(".buttons_wrtapper input.radio-label").change(function () {
                $('.slider').data('slider').set(seted)
                price = $(this).attr("data-price")
                $('.priceit').html(price);
                $('input[name="cenamkv"]').val(price);
            });
        });



    }



    var sliders = $('.slider');
    for (var i = 0; i < sliders.length; i++) {
        createSlider(i);
    }




});


var lastId,
    topMenu = $(".topnav"),
    topMenuHeight = topMenu.outerHeight() + 95,
    menuItems = topMenu.find("a"),
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });
menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();

});



$(window).scroll(function () {

    var fromTop = $(this).scrollTop() + topMenuHeight;


    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";
    if (lastId !== id) {
        lastId = id;
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }

});


$(document).ready(function(){
    setTimeout(function(){
        $('#m2').modal('show');
    },10000);
});
