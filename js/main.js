$(function() {
    $('.generic a').mouseenter(function(event) {
        $(this).css('z-index', 4);
        $(this).children('.stand-out').addClass('blocked');
        $(this).children('.stand-out').stop().fadeIn(400);
    });
        
    $('.generic a').mouseleave(function(event){
        $(this).css('z-index', 2);
        $(this).children('.stand-out').stop().fadeOut(200, function(event) {
        $(this).children('.stand-out').removeClass('blocked');
      });
    });
});

$(function() {    
    //select all the a tag with name equal to modal
    $('a[name=modal]').click(function(e) {
        //Cancel the link behavior
        e.preventDefault();
        //Get the A tag
        var id = $(this).attr('href');
    
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
    
        //Set height and width to mask to fill up the whole screen
        $('#mask').css({'width': 8000,'height':maskHeight});
        
        //transition effect        
        $('#mask').fadeIn(1000);    
        //$('#mask').fadeTo("slow", 0.5);    
    
        //Get the window height and width
        var winH = $(window).height();
        var winW = $(window).width();
              
        //Set the popup window to center
        $(id).css('top',  (winH/2-$(id).height()/2) -111);
        $(id).css('left', winW/2-$(id).width()/2);
    
        //transition effect
        $(id).fadeIn(2000); 
    
    });
    
    //if close button is clicked
    $('.window .close').click(function (e) {
        //Cancel the link behavior
        e.preventDefault();
        $('#mask, .window').hide();
    });        
    
    //if mask is clicked
    $('#mask').click(function () {
        $(this).hide();
        $('.window').hide();
    });            
});

$(function() {  
    var fadeTitle = function(){
      $('#intro-text').fadeOut();
    };
    $(window).one("click", function(){
        fadeTitle();
    });

    function nextClick() { 
        console.log('next');
        var currentDist = $(window).scrollLeft();
        fadeTitle();
        $('body,html').animate({ scrollLeft: $(window).scrollLeft() + 1000 }, 2000);
    }

    function prevClick() { 
        console.log('prev');
        var currentDist = $(window).scrollLeft();
        fadeTitle();
        $('body,html').animate({ scrollLeft: $(window).scrollLeft() - 1000 }, 2000);
    }
    
    //$("#next").on("click", nextClick);
    //$("#previous").on("click", prevClick);

    $(window).scroll(function () {
        var myVal = ($(window).scrollLeft() * 0.1263) - 868;
        $('#scroll-slider').css('background-position', myVal);
        if($(window).scrollLeft() > 6070) {
            $('#next').unbind('click');
            $('#next').addClass('hand');
            $('#scroll-slider').css('background-position', myVal);
        } 
        else {
            $('#next').removeClass('hand');
            $('#next').off('click').on('click', nextClick);
        }
        if($(window).scrollLeft() === 0) {
            $("#previous").unbind('click');
            $('#previous').addClass('hand');
        } 
        else {
            $('#previous').removeClass('hand');
            $('#previous').off('click').on('click', prevClick);
        }
        //$('#scroll-slider').css('background-position', myVal);    
    });
});

$(function() {  
    $(".furniture-buttons a").each(function(index) {
        $(this).mouseenter(function(){
            $(this).children('span').children('i').css('color', '#FF99CC');
        }).mouseleave(function(){
            $(this).children('span').children('i').css('color', '#F940AF');
        });

    });
    $(".autoDealer-buttons a").each(function(index) {
        $(this).mouseenter(function(){
            $(this).children('span').children('i').css('color', '#0CD0D6');
        }).mouseleave(function(){
            $(this).children('span').children('i').css('color', '#66DDFF');
        });
    })
    $(".restaurant-buttons a").each(function(index) {
        $(this).mouseenter(function(){
            $(this).children('span').children('i').css('color', '#99FF82');
        }).mouseleave(function(){
            $(this).children('span').children('i').css('color', '#54FA49');
        });
    })
    $(".dentist-buttons a").each(function(index) {
        $(this).mouseenter(function(){
            $(this).children('span').children('i').css('color', '#FBBE66');
        }).mouseleave(function(){
            $(this).children('span').children('i').css('color', '#FFAE00');
        });

    })
})

$(function() { 
    //$('#previousSlide').css('opacity', '0.5');
    
    localStorage.setItem('global-index', 0);
    localStorage.setItem('global-slide', 0);
    localStorage.setItem('global-location', JSON.stringify(coxMedia.interiors.autoDealer));
    
    $('.dentist-buttons a').on('click', function() {
        //updateInfo($('.button a').index(this), coxMedia.interiors.dentist, 0);
        $('.footer-nav').css('opacity', 0.3);
        $('#nextSlide').unbind('click').bind('click', nextSlide);
        $('#previousSlide').addClass('hand');
        $('#nextSlide').removeClass('hand');
        localStorage.setItem('global-index', $('.button a').index(this));
        localStorage.setItem('global-slide', 0); 
        localStorage.setItem('global-location', JSON.stringify(coxMedia.interiors.dentist));
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), localStorage.getItem('global-slide'));
    });
    $('.restaurant-buttons a').on('click', function() {
        //updateInfo($('.button a').index(this), coxMedia.interiors.restaurant, 0);
        $('.footer-nav').css('opacity', 0.3);
        $('#nextSlide').unbind('click').bind('click', nextSlide);
        $('#previousSlide').addClass('hand');
        $('#nextSlide').removeClass('hand');
        localStorage.setItem('global-index', $('.button a').index(this));
        localStorage.setItem('global-slide', 0); 
        localStorage.setItem('global-location', JSON.stringify(coxMedia.interiors.restaurant));
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), localStorage.getItem('global-slide'));
    });
    $('.autoDealer-buttons a').on('click', function() {
        //updateInfo($('.button a').index(this), coxMedia.interiors.autoDealer, 0);
        $('.footer-nav').css('opacity', 0.3);
        $('#nextSlide').unbind('click').bind('click', nextSlide);
        $('#previousSlide').addClass('hand');
        $('#nextSlide').removeClass('hand');
        localStorage.setItem('global-index', $('.button a').index(this));
        localStorage.setItem('global-slide', 0); 
        localStorage.setItem('global-location', JSON.stringify(coxMedia.interiors.autoDealer));
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), localStorage.getItem('global-slide'));
    });
    $('.furniture-buttons a').on('click', function(event) {
        //updateInfo($('.button a').index(this), coxMedia.interiors.furniture, 0); 
        $('.footer-nav').css('opacity', 0.3);
        $('#nextSlide').unbind('click').bind('click', nextSlide);
        $('#previousSlide').addClass('hand');
        $('#nextSlide').removeClass('hand');
        localStorage.setItem('global-index', $('.button a').index(this));
        localStorage.setItem('global-slide', 0); 
        localStorage.setItem('global-location', JSON.stringify(coxMedia.interiors.furniture));
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), localStorage.getItem('global-slide'));
    });

    function updateInfo(index, location, slide) {
        var newIndex = index;
        var newLocal = JSON.parse(localStorage.getItem('global-location'));
        var newSlide = slide;

        $('#interior-intro-text i').html(newLocal.section[newIndex].title);
        $('#modal-content h3').html(newLocal.section[newIndex].slides[newSlide].title); 
        $('#modal-content p').html(newLocal.section[newIndex].slides[newSlide].description);
        if(newLocal.section[newIndex].slides[newSlide].links) {
            for(i = 0; i < newLocal.section[newIndex].slides.length; i++) {
                $('#modal-content p').append(newLocal.section[newIndex].slides[i].links);
            }
        }
    }

    $('#nextSlide').bind('click', nextSlide);

    function nextSlide() {
        var newIndex = localStorage.getItem('global-slide');
        ++newIndex;
        $('#previousSlide').unbind('click').bind('click', previousSlide);
        $('#previousSlide').removeClass('hand');
        if(newIndex > 1) {
            console.log('here');
            $('#nextSlide').addClass('hand');
            $('#nextSlide').unbind('click');
        }
        localStorage.setItem('global-slide', newIndex);
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), newIndex);
    }

    function previousSlide() {
        var newIndex = localStorage.getItem('global-slide');
        --newIndex;
        $('#nextSlide').unbind('click').bind('click', nextSlide);
        $('#nextSlide').removeClass('hand');
        if(newIndex === 0) {
            console.log('here');
            $('#previousSlide').addClass('hand');
            $('#previousSlide').unbind('click');
        }
        localStorage.setItem('global-slide', newIndex);
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), newIndex);
    }

    /*function nextSlide() {
        console.log(localStorage.getItem('global-slide'));
        var newIndex = localStorage.getItem('global-slide');
        var newLocal = JSON.parse(localStorage.getItem('global-location'));
        addOne();
        $('#previousSlide').bind('click', previousSlide);
        if(newIndex >= 1) {
            $('#nextSlide').unbind('click');
        }
    }

    function previousSlide() {
        var newIndex = localStorage.getItem('global-slide');
        var newLocal = JSON.parse(localStorage.getItem('global-location'));
        $('#nextSlide').bind('click', nextSlide);
        subtractOne();
        if(newIndex <= 1) {
            console.log('here');
            $('#previousSlide').unbind('click');
        }
    }

    function addOne() {
        var newIndex = localStorage.getItem('global-slide');
        var newLocal = JSON.parse(localStorage.getItem('global-location'));
        
        ++newIndex;
        localStorage.setItem('global-slide', newIndex);
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), newIndex);
    }   

    function subtractOne() {
        var newIndex = localStorage.getItem('global-slide');
        var newLocal = JSON.parse(localStorage.getItem('global-location'));

        --newIndex;
        localStorage.setItem('global-slide', newIndex);
        updateInfo(localStorage.getItem('global-index'), localStorage.getItem('global-location'), newIndex);
    } */  
});

$(function() { 
    
        //getValue(e.pageX - window.scrollX); 
        //coordX=document.getElementById("scroll-cover").clientX;
    $('#scroll-cover').click(function(e){
            e = e || window.event;

            var target = e.target || e.srcElement,
                rect = target.getBoundingClientRect(),
                offsetX = e.clientX - rect.left,
                offsetY = e.clientY - rect.top;
                console.log(offsetX);
                getValue(offsetX)
    });

    function getValue(clicked) {
        var click = clicked;
        console.log(clicked);
        var clickRatio = click / 1024;
        var scrollClick = (8000*clickRatio) - 910;
        $('body,html').animate({ scrollLeft: scrollClick }, 3000);
    }
});

$(function() { 
    $('.generic a').on('click', function() {
        localStorage.setItem('latestPosition', $(window).scrollLeft());
        //localStorage.setItem('latestPosition', $(window).scrollLeft());
        var index = $(this).parent().index();
        $('.footer-nav').css('opacity', 0.3);
        $('#popup-box .stand-out i').html(coxMediaDescriptions.descriptions[index].title);
        $('#modal-content p').html(coxMediaDescriptions.descriptions[index].description);
        //console.log($(this).parent().index());
        //var lastChar = myString[myString.length -1];
    });

    $('.close').on('click', function() {
        $('iframe').attr('src', '');    
        $('.footer-nav').css('opacity', 1);
    });

    $('#mask').on('click', function() {   
        $('.footer-nav').css('opacity', 1);
    });

    $('.watch').on('click', function() {
        $('iframe').attr('src', '//www.youtube.com/embed/nIxfyRula7k?list=PLskZGPLFHskE4QwBtagDTFM7oyP-7aszk');    
    });
});

