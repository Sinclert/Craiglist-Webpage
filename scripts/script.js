$(document).ready(function () {
    
	$(".img_category").val(0);
    var submenus = document.getElementsByClassName("submenu");
    var clickers = document.getElementsByClassName("clicker");
    
    // FUNCTION 1
	$(".clicker").click(function () {
        for(i=0 ; i<submenus.length; i++){
            
            if ($(this)[0].id === $(clickers[i])[0].id){
                $(submenus[i]).slideToggle("fast");
                continue;
            }
            
            $(submenus[i]).slideUp("fast");
        }
	});
    
    
    // Functions to toggle the visibility of the sort by menu
    $("#button_text").click(function() {
        $("#sort_buttons").toggle(500);
    });
    $("#triangle").click(function() {
        $("#sort_buttons").toggle(500);
    });   
    
    
    // FUNCTION 2
	$("#contact").click(function () {
		$("#contact-options").slideToggle("fast");
	});
    
    // FUNCTION 3
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
	$("#main_cat9").click(function () {
		location.href = "subcategory.html";
	});
});


/* FUNCTION TO SORT BY NAME */
function sort_name() {
    list = document.getElementById("list");
    
    // Get the list items and setup an array for sorting
    var ads = list.getElementsByClassName("ad");
    var names = [];

    // Populate the array
    for (var i = 0, l = ads.length; i < l; i++){
        names.push(ads[i].innerHTML);
    }
    
    // Sort it
    names.sort();
    
    // Change the list on the page
    for (var i = 0, l = ads.length; i < l; i++){
        ads[i].innerHTML = names[i];
    }
}

/* FUNCTION TO SORT BY DATE */
function sort_date() {
        
    list = document.getElementById("list");
    var ads = list.getElementsByClassName("ad");
    var dates = [];
        
    for (var i = 0 ; i < ads.length ; i++){
        dates.push(ads[i].innerHTML);
    }
        
    // HERE THE ARRAY IS SORTED, DO NOT TOUCH A SINGLE COMMA!!
    dates.sort(function (d1, d2) {
            
        function parseDate(str) {
            var parts = str.match(/(\d+)/g);
            return new Date(parts[2], parts[1], parts[0]);
        }
            
        var index1 = String(d1).search("date");
        var string1 = String(d1).substring(index1+6, index1+16);
        var index2 = String(d2).search("date");
        var string2 = String(d2).substring(index2+6, index2+16);
        return parseDate(string1) - parseDate(string2);
    });
        
    // Change the list on the page
    for (var i = 0 ; i < ads.length ; i++){
        ads[i].innerHTML = dates[i];
    }
}