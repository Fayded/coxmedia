$(function() {
	var onSuccess = function(location){
		var stateJSON = location.subdivisions[0].iso_code;
        localStorage.setItem('state', stateJSON);
		var city = location.city.names.en;
		var state = coxMedia.locations[stateJSON];
		//console.log(state.Macon.population + ' state');
        if(localStorage.getItem('latestPosition') === null) {
                if(state) {
                        $.each(state.city, function(i, val) {
                            if(city !== state.city[i].name) {
                                changeScrollBG(state.city[0].climate);
                                localStorage.setItem('climate', state.city[0].climate);
                                //$('.city').html(state.city[0].name + ', ' + stateJSON);
                                //localStorage.setItem('cityInfo', state.city[0].name);
                                //$('.population').html("POP " + state.city[0].population);
                                //localStorage.setItem('population', state.city[0].population);
                            } else {
                                localStorage.setItem('cityInfo', city);
                                localStorage.setItem('climate', state.city[i].climate);
                                $('.city').html(city + ', ' + stateJSON);
                                $('.population').html("POP " + state.city[i].population);
                                localStorage.setItem('population', state.city[i].population);
                                changeScrollBG(state.city[i].climate);
                                return false;
                            }
                        });  
                }        
        } else {
                changeScrollBG(localStorage.getItem('climate'));
                console.log(localStorage.getItem('climate'));
                $(window).scrollLeft(localStorage.getItem('latestPosition'));
                $('.city').html(localStorage.getItem('cityInfo') + ', ' + stateJSON);
                $('.population').html("POP " + localStorage.getItem('population'));
        }
	};
	var onError = function(error){
                console.log('error');
                $('#scroll-bg').css('background-position', '0 -532px');
                $(window).scrollLeft(0);
                var myArray = [ $('.label-2-arid'), $('.label-4-arid'), $('.b-12-arid'), $('.b-14-arid'), $('.b-56-arid'), $('.label-8'), $('.b-23'), $('.b-24'), $('.b-55'), $('.b-31'), $('.label-7'), $('.label-11')];
                $.each(myArray, function() {
                        $(this).removeClass('hideDef');
                });
                //$('.label-2-arid').removeClass('hideDef');
                //$('.label-4-arid').removeClass('hideDef');
	       //console.log("Error:\n\n" + JSON.stringify(error, undefined, 4));
	};

    var changeScrollBG = function(climate) {
            var newClimate = climate;
        localStorage.setItem('climate', newClimate);
            if(newClimate === "Arid") {
                $('#scroll-bg').css('background-position', '0 -532px');
                        $(window).scrollLeft(0);
                var myArray = [ $('.label-2-arid'), $('.label-4-arid'), $('.b-12-arid'), $('.b-14-arid'), $('.b-56-arid'), $('.label-8'), $('.b-23'), $('.b-24'), $('.b-55'), $('.b-31'), $('.label-7'), $('.label-11')];
                $.each(myArray, function() {
                    $(this).removeClass('hideDef');
                });
                if(localStorage.getItem('cityInfo') !== null) {
                    $('.sign-arid').removeClass('hideDef');
                }
                //$('.label-2-arid').removeClass('hideDef');
                //$('.label-4-arid').removeClass('hideDef');
            
            }
            else if(newClimate === "Plain") {
                $('#scroll-bg').css('background-position', '0 -582px');
                        $(window).scrollLeft(2000);
                var myArray = [ $('.b-12'), $('.b-14'), $('.label-4-plain'), $('.label-2'), $('.label-8'), $('.b-56'), $('.b-24'), $('.b-23'), $('.b-31'), $('.b-55'), $('.label-7')];
                $.each(myArray, function() {
                    $(this).removeClass('hideDef');
                });
                if(localStorage.getItem('cityInfo') !== null) {
                    $('.sign-plain').removeClass('hideDef');
                }
            }
            else if(newClimate === "Temperate") {
                //$('.label-4').html('<a href="autoDealer.html" data-stellar-ratio="1" style="top: 419px; left: 870px"><span class="stand-out hide"><span class="left-banner"><em>Stand&nbsp;Out.&nbsp;</em></span><span class="right-banner"><i>Generate&nbsp;More&nbsp;Buzz</i></span></span></a>');
                $('#scroll-bg').css('background-position', '0 -632px');
                        $(window).scrollLeft(4000);
                var myArray = [ $('.label-10'), $('.b-12'), $('.b-14'), $('.label-4-temperate'), $('.label-11'), $('.label-8-temperate'), $('.label-2'), $('.b-56-temperate'), $('.b-23-temperate'), $('.b-24-temperate'), $('.b-55'), $('.b-31')];
                $.each(myArray, function() {
                    $(this).removeClass('hideDef');
                });
                if(localStorage.getItem('cityInfo') !== null) {
                    console.log('not-null');
                    $('.sign-temperate').removeClass('hideDef');
                }
            }
            else if(newClimate === "Tropical") {
                $('#scroll-bg').css('background-position', '0 -682px');
                        $(window).scrollLeft(6000);
                var myArray = [ $('.b-12'), $('.b-14'), $('.label-7'), $('.label-2'), $('.b-23'), $('.b-24'), $('.label-8'), $('.b-56-tropical'), $('.b-55-tropical'), $('.b-31-tropical'), $('.label-11-tropical'), $('.label-4-tropical')];
                $.each(myArray, function() {
                    $(this).removeClass('hideDef');
                });
                if(localStorage.getItem('cityInfo') !== null) {
                    $('.sign-tropical').removeClass('hideDef');
                }
            } else {
                        $('#scroll-bg').css('background-position', '0 -532px');
                        $(window).scrollLeft(0);
                        var myArray = [ $('.label-2-arid'), $('.label-4-arid'), $('.b-12-arid'), $('.b-14-arid'), $('.b-56-arid'), $('.label-8'), $('.b-23'), $('.b-24'), $('.b-55'), $('.b-31'), $('.label-7'), $('.label-11')];
                        $.each(myArray, function() {
                                $(this).removeClass('hideDef');
                        });
                        //$('.label-2-arid').removeClass('hideDef');
                        //$('.label-4-arid').removeClass('hideDef');
                }
        }
    if(localStorage.getItem('oneTime') === null) {
        geoip2.city(onSuccess, onError);
        localStorage.setItem('oneTime', 'notNull');
    } else {
        changeScrollBG(localStorage.getItem('climate'));
        $('.city').html(localStorage.getItem('cityInfo') + ', ' + localStorage.getItem('state'));
        $('.population').html("POP " + localStorage.getItem('population'));
        $(window).scrollLeft(localStorage.getItem('latestPosition'));
    }
});