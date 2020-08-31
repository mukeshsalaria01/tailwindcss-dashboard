$(document).ready(function() {

    // == > 01 header dropdown
    $('.nav-dropdown-menu').hide();
    $('.nav-dropdown').on('click', function() {
        $(this).find(".nav-dropdown-menu").slideToggle(250);
    });

    //hide dropdown when click outside the dropdown menu
    $(document).click(function() {
        $(".nav-dropdown-menu").hide();
    });

    $(".nav-dropdown").click(function(e) {
        e.stopPropagation();
    });

    //end header dropdown

    //== > 02 header search-bar xs screen
    $(".xs-search-icon").click(function() {
        $(".xs-search-bar").toggle();
    });
    //end header search-bar xs screen

    //== > 03 collapse aside bar section
    //I-pad and greater than I-pad screen(768px)
    if ($(window).width() > 767.98) {
        $("#btnAsideCollapse").click(function() {
            $("#asideNav").hide();
            $("#mainSection").css("margin-left", "0px");
            $("#footer").css("margin-left", "0px");
        });
        $("#btnShowAsideCollapse").click(function() {
            $("#asideNav").show();
            $("#mainSection").css("margin-left", "250px");
            $("#footer").css("margin-left", "250px");
        });
    }
    //less than I-pad screen small screen resolution upto (768px)
    if ($(window).width() < 767.98) {
        $("#asideNav").hide(); //by default hide aside nav on mobile screens
        $("#btnAsideCollapse").click(function() {
            $("#asideNav").hide();
            $("#mainSection").css("margin-left", "0px");
            $("#footer").css("margin-left", "0px");
        });
        $("#btnShowAsideCollapse").click(function() {
            $("#asideNav").show();
            $("#mainSection").css("margin-left", "0px");
            $("#footer").css("margin-left", "0px");
        });
    }

    // aside menu add active class on current select item
    $("#asideNav .aside-nav-items").click(function() {
        $("#asideNav .aside-nav-items").removeClass("active");
        $(".aside-submenu-firstlevel .aside-submenu-firstlevel-items .aside-submenu-items").removeClass("active");
        $(this).addClass("active");
    });

    //aside submenu first level items active on current section items
    $(".aside-submenu-firstlevel .aside-submenu-firstlevel-items .aside-submenu-items").click(function() {
        $(".aside-submenu-firstlevel .aside-submenu-firstlevel-items .aside-submenu-items").removeClass("active");
        $(this).addClass("active");
    });

    //aside submenu first level 
    $(".aside-submenu-firstlevel .aside-submenu-firstlevel-items").hide();
    $(".aside-submenu-firstlevel").click(function() {
        $(this).find(".aside-submenu-firstlevel-items").toggle();
    });

    //prevent form click inside dorpdown menu and it's close.
    $('.aside-submenu-firstlevel .aside-submenu-firstlevel-items').on('click', function(e) {
        e.stopPropagation();
    });

    // aside submenu first level dropdown icon rotation up and down
    $(".aside-submenu-firstlevel .aside-nav-items").click(function() {
        if ($(this).parent().find(".aside-submenu-firstlevel-items").css('display') == "none") {
            $(this).find(".aside-items-caret").css("transform", "scale(1.2) rotate(90deg)");
        }
        if ($(this).parent().find(".aside-submenu-firstlevel-items").css('display') == "block") {
            $(this).find(".aside-items-caret").css("transform", "scale(1.2) rotate(0deg)");
        }

    });
    //end collapse aside bar section 


});