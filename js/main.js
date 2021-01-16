                    setTimeout(() => {
                        $('#navbar').css('opacity', '1');
                    }, 1000);

                    $('#sub-title').delay(2000).fadeIn(2000, function() {
                        $('#sub-title').css('display', 'all');

                        if ($('.text-slider').length == 1) {
                            var typed_strings = $('.text-slider-items').text();
                            var typed = new Typed('.text-slider', {
                                strings: typed_strings.split(','),
                                typeSpeed: 80,
                                loop: true,
                                backDelay: 1700,
                                backSpeed: 22
                            });
                        }
                    })

                    $(function() {
                        $('.nav-item').click(function() {
                            $(this).closest('li').addClass('active').siblings().removeClass('active');
                        })
                    })

                    /*--/ Star Counter /--*/
                    $('.counter').counterUp({
                        delay: 15,
                        time: 2000
                    });
                    // Disable form submissions if there are invalid fields
                    (function() {
                        'use strict';
                        window.addEventListener('load', function() {
                            // Get the forms we want to add validation styles to
                            var forms = document.getElementsByClassName('needs-validation');
                            // Loop over them and prevent submission
                            var validation = Array.prototype.filter.call(forms, function(form) {
                                form.addEventListener('submit', function(event) {
                                    if (form.checkValidity() === false) {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    }
                                    event.preventDefault();
                                    form.classList.add('was-validated');
                                    form.setAttribute('netlify', '');
                                }, false);
                            });
                        }, false);
                    })();
                    (function($) {
                        "use strict";

                        var nav = $('nav');
                        var navHeight = nav.outerHeight();

                        $('.navbar-toggler').on('click', function() {
                            if (!$('#navbar').hasClass('navbar-reduce')) {
                                $('#navbar').addClass('navbar-reduce');
                            }
                        })

                        // Preloader
                        $(window).on('load', function() {
                            if ($('#preloader').length) {
                                $('#preloader').delay(100).fadeOut('slow', function() {
                                    $(this).remove();
                                });
                            }
                        });

                        // Back to top button
                        $(window).scroll(function() {
                            if ($(this).scrollTop() > 100) {
                                $('.back-to-top').fadeIn('slow');
                            } else {
                                $('.back-to-top').fadeOut('slow');
                            }
                        });
                        $('.back-to-top').click(function() {
                            $('html, body').animate({
                                scrollTop: 0
                            }, 1500, 'easeInOutExpo');
                            return false;
                        });

                        /*--/ Star ScrollTop /--*/
                        $('.scrolltop-mf').on("click", function() {
                            $('html, body').animate({
                                scrollTop: 0
                            }, 1000);
                        });

                        /*--/ Star Scrolling nav /--*/
                        var mainNav_height = $('#navbar').outerHeight() - 22;
                        $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
                            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                                var target = $(this.hash);
                                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                                if (target.length) {
                                    var scrollto = target.offset().top - mainNav_height;
                                    $('html, body').animate({
                                        scrollTop: scrollto
                                    }, 1000, "easeInOutExpo");
                                    return false;
                                }
                            }
                        });

                        // Scroll to sections on load with hash links
                        if (window.location.hash) {
                            var initial_nav = window.location.hash;
                            if ($(initial_nav).length) {
                                var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
                                $('html, body').animate({
                                    scrollTop: scrollto_initial
                                }, 1000, "easeInOutExpo");
                            }
                        }

                        // Closes responsive menu when a scroll trigger link is clicked
                        $('.js-scroll').on("click", function() {
                            $('.navbar-collapse').collapse('hide');
                        });

                        // Activate scrollspy to add active class to navbar items on scroll
                        $('body').scrollspy({
                            target: '#navbar',
                            offset: navHeight
                        });
                        /*--/ End Scrolling nav /--*/

                        /*--/ Navbar Menu Reduce /--*/
                        $(window).trigger('scroll');
                        $(window).on('scroll', function() {
                            var pixels = 50;
                            var top = 1200;
                            if ($(window).scrollTop() > pixels) {
                                $('.navbar-expand-md').addClass('navbar-reduce');
                                $('.navbar-expand-md').removeClass('navbar-trans');
                                $('.navbar-expand-md').removeClass('color');
                                $('#home').removeClass('active');
                            } else {
                                if (!$('#navbarDefault').hasClass('show')) {
                                    $('.navbar-expand-md').removeClass('navbar-reduce');
                                }
                                $('.navbar-expand-md').addClass('navbar-trans');
                                $('#home').addClass('active');
                                $('.navbar-expand-md').addClass('color');
                            }

                            if ($(window).scrollTop() > top) {
                                $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
                            } else {
                                $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
                            }
                        });

                        // Initiate venobox (lightbox feature used in portofilo)
                        $(document).ready(function() {
                            $('.venobox').venobox({
                                'share': false
                            });
                        });

                    })(jQuery);