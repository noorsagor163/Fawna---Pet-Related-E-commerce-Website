$(function () {

    "use strict";


    //===== 
    // For Header Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".header-area").removeClass("shirnkk");
        } else {
            $(".header-area").addClass("shirnkk");
        }
    });


        $('.mobile-bar').on('click', function () {
            $('.sidebar, .off-canvas-overlay').addClass('active');
        });
        $('.close-icon, .off-canvas-overlay').on('click', function () {
            $('.sidebar, .off-canvas-overlay').removeClass('active');
        });

    // For pric Activation

    $('.price-active').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    // For Product Activation

    $('.product-active').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // For Testimonial Activation

    $('.testimonial-active').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    // For Carton Slider Activation

    $('.carton-slider-active').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    // For todo activation
    $('.todo-active').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // For relate-proudct-active activation
    $('.relate-proudct-active').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    // For relate-proudct-active-subscription-1 activation
    $('.relate-proudct-active-subscription-1').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // For relate-proudct-active-subscription-2 activation
    $('.relate-proudct-active-subscription-2').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // For relate-proudct-active-subscription-3 activation
    $('.relate-proudct-active-subscription-3').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // For relate-proudct-active-subscription-4 activation
    $('.relate-proudct-active-subscription-4').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // For relate-proudct-active-subscription-5 activation
    $('.relate-proudct-active-subscription-5').slick({

        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.like-carton-active').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-angle-right"></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.product-c-slider-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.product-c-slider-nav'
    });
    $('.product-c-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-c-slider-active',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // Toggle button Query
    document.querySelectorAll('.toggle-btn .toggle-outer').forEach(function (each) {
        each.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });


    // Nice Number Activation 1
    $('input#edit-pri-con[type="number"]').niceNumber({
        // custom button text
        buttonIncrement: '<i class="fal fa-plus"></i>',
        buttonDecrement: '<i class="fal fa-minus"></i>',
    });

    //   For Scroll to top Button
    $(document).ready(function () {
        var back = $('.back-to-top');
        back.on('click', function () {
            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        })
        $(window).on('scroll', function () {
            var self = $(this),
                height = self.height(),
                top = self.scrollTop();
            if (top > height) {
                back.addClass('visible');
            } else {
                back.removeClass('visible');
            }
        })

    })

    // $("#dashh-tb-content-wrap").niceScroll();

    $('select').niceSelect();









});