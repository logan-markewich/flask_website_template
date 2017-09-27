$(function() {
    $('#btnSignUp').click(function() {
 
        $.ajax({
            url: '/signUp',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                $(this).closest('form').find("input[type=text], textarea").val("");
                console.log(response);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
