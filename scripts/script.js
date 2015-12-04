$(document).ready(function () {
	$(".img_category").val(0);
	$("#c1").click(function () {
		$("#m1").slideToggle("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideUp("fast");
	});
	$("#c2").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideToggle("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideUp("fast");
	});
	$("#c3").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideToggle("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideUp("fast");
	});
	$("#c4").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideToggle("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideUp("fast");
	});
	$("#c5").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideToggle("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideUp("fast");
	});
	$("#c6").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideToggle("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideUp("fast");
	});
	$("#c7").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideToggle("fast");
		$("#m8").slideUp("fast");
	});
	$("#c8").click(function () {
		$("#m1").slideUp("fast");
		$("#m2").slideUp("fast");
		$("#m3").slideUp("fast");
		$("#m4").slideUp("fast");
		$("#m5").slideUp("fast");
		$("#m6").slideUp("fast");
		$("#m7").slideUp("fast");
		$("#m8").slideToggle("fast");
	});
	$("#contact").click(function () {
		$("#contactopt").slideToggle("fast");
	});
	$("#main_cat1").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat1").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat1").slideDown("fast", function () {
				$("#subm1").slideDown("fast");
				$("#subm1").fadeIn();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
			$("#cat2").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat7").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat2").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat2").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat2").slideDown("fast", function () {
				$("#subm1").slideDown("fast");
				$("#subm1").fadeIn();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
			$("#cat1").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat7").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat3").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat3").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat3").slideDown("fast", function () {
				$("#subm1").slideDown("fast");
				$("#subm1").fadeIn();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
			$("#cat1").slideUp("fast");
			$("#cat2").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat7").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat4").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat4").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat4").slideDown("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideDown("fast");
				$("#subm2").fadeIn();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
			$("#cat1").slideUp("fast");
			$("#cat2").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat7").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat5").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat5").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat5").slideDown("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideDown("fast");
				$("#subm2").fadeIn();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
			$("#cat1").slideUp("fast");
			$("#cat2").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat7").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat6").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat6").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat6").slideDown("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideDown("fast");
				$("#subm2").fadeIn();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
			$("#cat1").slideUp("fast");
			$("#cat2").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat7").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat7").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat7").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat7").slideDown("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideDown("fast");
				$("#subm3").fadeIn();
			});
			$("#cat1").slideUp("fast");
			$("#cat2").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat8").slideUp("fast");
		}
	});
	$("#main_cat8").click(function () {
		if ($(this).val() === "1") {
			$(this).val(0);
			$("#cat8").slideUp("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideUp("fast");
				$("#subm3").fadeOut();
			});
		} else {
			$(".img_category").val(0);
			$(this).val(1);
			$("#cat8").slideDown("fast", function () {
				$("#subm1").slideUp("fast");
				$("#subm1").fadeOut();
				$("#subm2").slideUp("fast");
				$("#subm2").fadeOut();
				$("#subm3").slideDown("fast");
				$("#subm3").fadeIn();
			});
			$("#cat1").slideUp("fast");
			$("#cat2").slideUp("fast");
			$("#cat3").slideUp("fast");
			$("#cat4").slideUp("fast");
			$("#cat5").slideUp("fast");
			$("#cat6").slideUp("fast");
			$("#cat7").slideUp("fast");
		}
	});
});