$(document).ready(function(){
     $("#booking-button, #booking-button2, #booking-button3, #booking-button4, #booking-button5, #booking-button6, #booking-button7, #booking-button8").click(function(e){
        switch (this.id) {
        case "booking-button3":
            break;
        case "booking-button2":
            break;
        case "booking-button":
            break;
		case "booking-button4":
            break;
		case "booking-button5":
            break;
		case "booking-button6":
            break;
		case "booking-button7":
            break;
		case "booking-button8":
            break;
    }
		$("#booking-popup").fadeIn(250);
         e.stopPropagation();
    });
    $(".ar-booking__popup").click(function(e){
         e.stopPropagation();
    });
    $("body").click(function(){
        $("#booking-popup").fadeOut(500);
    });
    $('form').on('submit', function(e){
	$("#booking-popup").fadeOut(500);
        console.log(e)
        e.preventDefault()
    });

    window.submitform = function(){
        var form_data = $('form').serializeArray();

        console.log("form_data", form_data);
        $.ajax({
            type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
            url         : 'process.php', // the url where we want to POST
            data        : form_data, // our data object
            dataType    : 'json', // what type of data do we expect back from the server
            encode      : true,
            success:function(data) {
			$("#booking-popup").fadeOut(500);
                $('form')[0].reset();
                alert("Thank you, you will be contacted by our team very soon")
                return data;
            },
            error: function(error){
			$("#booking-popup").fadeOut(500);
                console.log(error);
                alert("Sorry was unable to send you send your request at this time, please try again");
            }
        })

    }
});
