$(document).ready(function(){
    $("#todos").click(function(){
        if ($("#todos").is(':checked'))
        {
            $("input[name='interesses']").trigger("click");
        }
        else
        {
            $("input[name='interesses']").prop('checked',false)
        }
    });

    $("input[name='interesses']").click(function(){
        console.log($(this).val());
    });
});