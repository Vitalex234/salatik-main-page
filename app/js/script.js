$(document).ready(function() {
        $("#light-slider").lightSlider({
            item: 1,
            autoWidth: false,
            slideMove: 1, // slidemove will be 1 if loop is true
            slideMargin: 10,

            addClass: '',
            mode: "slide",
            useCSS: true,
            cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
            easing: 'linear', //'for jquery animation',////

            speed: 400, //ms'
            auto: false,
            pauseOnHover: false,
            loop: false,
            slideEndAnimation: true,
            pause: 2000,

            keyPress: false,
            controls: true,
            prevHtml: '',
            nextHtml: '',

            rtl:false,
            adaptiveHeight:false,

            vertical:false,
            verticalHeight:500,
            vThumbWidth:100,

            thumbItem:10,
            pager: true,
            gallery: false,
            galleryMargin: 5,
            thumbMargin: 5,
            currentPagerPosition: 'middle',

            enableTouch:true,
            enableDrag:true,
            freeMove:true,
            swipeThreshold: 40,

            responsive : [],

            onBeforeStart: function (el) {},
            onSliderLoad: function (el) {},
            onBeforeSlide: function (el) {},
            onAfterSlide: function (el) {},
            onBeforeNextSlide: function (el) {},
            onBeforePrevSlide: function (el) {}
        });

      $('#accordion').accordiom({
            showFirstItem: false
      });

      $('.nav__link').on('click', function(e){
            if ($(this).next().length) {
                  e.preventDefault();
            }
            if ($(this).next().hasClass('sublist-active')) {
                  $(this).next().removeClass('sublist-active')
            } else {
                  $('.nav__sublist').removeClass('sublist-active');
                  $(this).next().addClass('sublist-active');
            }
      });

      $(document).mouseup(function (e){ 
            var div = $(".nav__list"); 
            var div2 = $(".header__search");
            if (!div.is(e.target) 
                && div.has(e.target).length === 0) { 
                  $('.nav__sublist').removeClass('sublist-active'); 
            }
            if (!div2.is(e.target) 
                && div2.has(e.target).length === 0) { 
                  $(".header__search").hide(300);
                  $(".header__search-icon").show(300);
            }
      });

      $(".header__search-icon").on('click', function(){
            $(this).hide(300)
            $(".header__search").show(300)
             $(".header__input").focus()
            
      })

      $(".mobile-btn").on('click', function(){
            $(".topmenu").toggleClass('topmenu-visible');
            $(".nav__list").toggleClass('nav__list-visible');
            $('.header__user').toggleClass('header__user-visible');
      })


    });
