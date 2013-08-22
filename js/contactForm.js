// JavaScript Document

var inputThis;

$(function () {
    $('input').val("");

    //$('.styleSelectBox').customStyle();

    $("#btnSubmit").click(function (e) {
        e.preventDefault();

        $(".textVal").trigger('blur');
        $(".emailVal").trigger('blur');
        $(".phoneVal").trigger('blur');

        validateAll();
    });

    $("#btnClose").click(function (e) {
        $.post("submit.aspx",
        {
            fName: $("#txtFirst").val(),
            lName: $("#txtLast").val(),
            Email: $("#txtEmail").val(),
            Phone: $("#txtPhone").val(),
            Company: $("#txtCompany").val(),
            CompanyZip: $("#txtCompanyZip").val(),
            Message: $("#txtMessage").val(),
            Location: $("#txtLocation").val()
        },
        function (msg) {
            //console.log("Sent");
        });
    });

    $(".textVal").blur(validateText);

    $(".emailVal").blur(validateEmail);

    $(".phoneVal").blur(validatePhone);

    //Validate that only numbers are used
    $('.numbersOnly').keypress(function (e) {
        var key = e.charCode || e.keyCode || 0;
        var keychar = String.fromCharCode(key);
        if (((key == 8 || key == 9 || key == 46 || key == 35 || key == 36 || (key >= 37 && key <= 40)) && e.charCode == 0) /* backspace, end, begin, top, bottom, right, left, del, tab */
				|| (key >= 48 && key <= 57)) { /* 0-9 */
            return;
        } else {
            e.preventDefault();
        }
    });
});

function validateEmail() {
    inputThis = $(this);

	if (!isValidEmailAddress($(this).val())) {
		showError(inputThis);
        return false;
    } else {
		hideError(inputThis);
        return true;
    }
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

function validatePhone(){
	inputThis = $(this);
	
	if(inputThis.val().length < 10){
		showError(inputThis);
	}else{
		hideError(inputThis);
	}
}

function validateText(){
	inputThis = $(this);
	
	if(inputThis.val().length < 2){
		showError(inputThis);
	}else{
		hideError(inputThis);
	}
}

function showError(inputThis){
	inputThis.removeClass('pass');
	inputThis.parent().find('.errorMsg').addClass('errorMsgShow');
}

function hideError(inputThis){
	inputThis.addClass("pass");
	inputThis.parent().find('.errorMsg').removeClass('errorMsgShow').addClass('pass');
}

function validateAll(){
    var allPass = true;

	$(".inputRequired").each(function(){
		if(!$(this).hasClass('pass')){
			allPass=false;
		}
    });

	if(allPass==true){
	    $("#btnSubmit, #requiredText, #inputWrap, #subTitle").hide();
	    $("#btnClose, #thankYouWrap").show();
	    
		//Add the thank you page tracking
		_gaq.push(['_trackPageview', 'contact/thankyou']);
		
	    $("#thankYouWrap").append(
		    '<div class="headers"><h2>Thank you for your interest!</h2><h4>A sales representative will contact you<br /> within the next business day.</h4></div>' +
		    '<div id="contact-boxes"><a href="/"><img src="images/contact_us_home.jpg" /><br />Back to Home Page</a><a href="http://www.coxmedia.com" target="_blank"><img src="images/contact_us_main.jpg" /><br />Visit CoxMedia.com</a><a href="http://www.coxmedia.com/catlisting.jsp?navigation=25" target="_blank"><img src="images/contact_us_success.jpg" /><br />View Success Stories</a></div>'
	    );
	}else{
		console.log("Failed");
	}
}