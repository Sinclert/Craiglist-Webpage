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
        $("#sort_buttons").slideToggle(500);
    });
    $("#triangle").click(function() {
        $("#sort_buttons").slideToggle(500);
    });   
    
    
    // FUNCTION 2
	$("#contact").click(function () {
		$("#contact-options").slideToggle("fast");
	});
    
    
    
    var categories = document.getElementsByClassName("img_category");
    var categories_dropdown = document.getElementsByClassName("cats");
    var subcategories = document.getElementsByClassName("subcategories");
    
    
    /* Generic function to toggle home categories */
    $(".img_category").click(function () {
        
        var i = 0;
        for(i = 0; i < categories.length ; i++){
            if(categories[i].innerHTML == this.innerHTML){
                break;
            }    
        }
        
		if ($(this).val() === "1") {
			$(this).val(0);
			$(categories_dropdown[i]).slideUp("fast", function () {
                for(var j = 0; j < subcategories.length ; j++){
                    $(subcategories[j]).slideUp("fast");
                    $(subcategories[j]).fadeOut();
                }    
            });
        }
        else {
			$(".img_category").val(0);
			$(this).val(1);
			$(categories_dropdown[i]).slideDown("fast", function () {
                var index = Math.floor(i/3);
				for(var j = 0; j < subcategories.length ; j++){
                    if (j == index){
                        $(subcategories[j]).slideDown("fast");
                        $(subcategories[j]).fadeIn();
                    }
                    else{
                        $(subcategories[j]).slideUp("fast");
                        $(subcategories[j]).fadeOut();
                    }
                }  
			});
			for(var j = 0; j < categories_dropdown.length ; j++){
                if (j == i){
                    continue;
                }
                $(categories_dropdown[j]).slideUp("fast");
            }
		}
	});
	
    $("#main_cat9").click(function () {
		location.href = "subcategory.html";
	});
    
    /* Footer toggle */
    var trigger = 25;

    $(window).scroll(function() {
        var height = $(document).height()-$(window).height();
    	if ($(this).scrollTop() > height - trigger) {
    		$('#footer').slideDown(300);
    	} else {
    		$('#footer').slideUp(300);
    	}
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