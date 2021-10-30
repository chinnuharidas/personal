$("#contactForm").submit((e)=>{
    e.preventDefault();
    if($("#contactForm").valid()){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycby1JqC0-00CL81154U04K7-WY-Pm3ufOiJy0_DZxftVXBhz8-T2HZq44Bq6Oh8Mt00leA/exec",
            data:$("#contactForm").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                $("#contactForm")[0].reset();
                // window.location.reload();
            },
            error:function (err){
                alert("Something Error");
            }
        })
    }
})

function validateContactForm(){
    var valid = $("#contactForm").validate({
        rules:{
            name:{
                required: true,
                minlength: 5,
                maxlength: 30,
                lettersonly: true,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            email:{
                required: true,
                email: true,
                minlength: 5,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            subject:{
                required: true,
                minlength: 5,
                maxlength: 30,
                normalizer: function(value) {
                    return $.trim(value);
                }
            },
            message:{
                required: true,
                minlength: 8,
                maxlength: 30,
                normalizer: function(value) {
                    return $.trim(value);
                }
            }
        }
    })
    return valid;
}


jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-z," "]+$/i.test(value);
}, "Only letters and spaces are allowed");


$(document).ready(function(){
    validateContactForm();
})