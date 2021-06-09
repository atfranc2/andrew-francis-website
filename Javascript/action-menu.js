
$(document).ready(function(){
    $(".action--menu").click(function(){
        let isActive = $(this).hasClass("action--menu--active"); 
        let actionList = $(this).parent().children(".action--list"); 
        if(!isActive){
            $(this).addClass("action--menu--active"); 
            actionList.show(200); 
            console.log($(this).prop("z-index"))
        }
        else{
            $(this).removeClass("action--menu--active"); 
            actionList.hide(200); 
        }
    }); 

    $(".action--list").click(function(){
        $(this).parent().children(".action--menu").click(); 
    }); 

}); 