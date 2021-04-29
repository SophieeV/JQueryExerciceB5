$(document).ready(function() {
    $('#nom, #prenom').focusin(function(){
        $(this).css({'border' : '1px solid green'});
    });
    $('#nom, #prenom').focusout(function(){
        $(this).css({'border' : '1px solid red'});
    });
});

/*
$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("border","1px solid green")
    });
    $("input").blur(function(){
        $(this).css("border","1px solid red")
    });
})*/
