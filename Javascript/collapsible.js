var collapsibleClassName = "collapsible--expanded"
$(document).ready(function() {
    $(".collapsible__toggler").click(function() {
        let collapsibleParent = $(this).parents(".collapsible"); 
        let isClicked = collapsibleParent.hasClass(collapsibleClassName);
        
        if(isClicked)
            collapsibleParent.removeClass(collapsibleClassName)
        else
            collapsibleParent.addClass(collapsibleClassName)
    }); 
}); 