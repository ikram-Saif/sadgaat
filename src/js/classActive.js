$(document).ready(function() { 
    $('li').click(function() { 
        $('nav-link').removeClass("active"); 
        $(this).addClass("active"); 
    }); 
}); 