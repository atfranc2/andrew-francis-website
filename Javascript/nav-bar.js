
var expandedClass = "nav--expanded"; 
$(document).ready(function(){
    $(".nav__hamburger").click(function() {
        let navParent = $(this).parents(".nav"); 
        let isClicked = navParent.hasClass(expandedClass);
        if(isClicked)
            navParent.removeClass(expandedClass)
        else
            navParent.addClass(expandedClass)
    }); 

    $(".nav--expanded .nav__item").click(function() {
        let navParent = $(this).parents(".nav"); 
        navParent.removeClass(expandedClass)
    }); 
})