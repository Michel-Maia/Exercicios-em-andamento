$(document).ready(function() {
    $("span").hide();

    $("input[type='text']").blur(function(){
        if ($(this).val().length == 0)
        {
            $(this).next().show();
        }
    });

    $("input[type='text']").focus(function() {
        $(this).next().hide();
    });
});