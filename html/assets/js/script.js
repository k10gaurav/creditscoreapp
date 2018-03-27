$(function() {
	$("#status").css("visibility:hidden");
	var confirmButton = $('#confirm-purchase');
    confirmButton.click(function(e) {

		$("#status").css("visibility:visible");
		$("#status").removeClass('status-ok');
		
        e.preventDefault();
		
		var dt=$("#date").val();
		var mth=$("#month").val();
		var yr=$("#year").val();
		var score=((dt+mth+Math.floor(yr/100))/2);
		$("#status").addClass("status-ok").html("CREDIT SCORE IS: "+(score));
      
    });
});
