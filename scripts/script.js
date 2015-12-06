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
        
        $(".sort_elements").toggle(500);
    });
    
    $("#triangle").click(function() {
        
        $(".sort_elements").toggle(500);
    });
    
    
    // Sort by Date process
    
    var $divs = $("div.ad")
    
    $('#date_sort_button').on('click', function(){
    var numericallyOrderedDivs = $divs.sort(function(a,b){
        return $(a).find(".date").text() > $(b).find(".date").text();
    });
    $("#list").html(numericallyOrderedDivs);
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

    function sort_name() {
        ul = document.getElementById("list");
    
        // Get the list items and setup an array for sorting
        var lis = ul.getElementsByTagName("div");
        var vals = [];

    
        // Populate the array
        for (var i = 0, l = lis.length; i < l; i++){
            var value = lis[i].getElementsByClassName("ad-tittle");
            vals.push(value[0].parentElement.innerHTML);
        }
    
        // Sort it
        vals.sort();
    
        // Change the list on the page
        for (var i = 0, l = lis.length; i < l; i++){
            lis[i].innerHTML = vals[i];
        }
    }

    function sort_date() {
        ul = document.getElementById("list");
        
        var lis = ul.getElementsByClassName("ad");
        var values = [];
        
        for (var i = 0, l = lis.length; i < l; i++){
            var val = lis[i].getElementsByTagName("p");
            values.push(val[0].parentElement.innerHTML);
        }
        
        values.sort();
        
        for (var i = 0, l=lis.length; i < l; i++){
            lis[i].innerHTML = vals[i];
        }
    }

    function sortDescending(a, b) {
        var date1  = $(a).find(".date").text();
            date1 = date1.split('/');
            date1 = new Date(date1[2], date1[1] -1, date1[0]);
        var date2  = $(b).find(".date").text();
            date2= date2.split('/');
            date2= new Date(date2[2], date2[1] -1, date2[0]);

     return date1 < date2 ? 1 : -1;
    };