$(function(){

    const ticker = function(){
        setTimeout(function(){
            $('#ticker li:first').animate({marginTop:'-30px'},400, function(){
                $(this).detach().appendTo("#ticker").removeAttr('style');
            })
            ticker();
        }, 3000)
    }

    ticker();

})