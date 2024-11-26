$(function(){
	$(".panel ul:not("+$("ul.tab li a.selected").attr("href")+")").hide()


	$(".tab li a").on("click",function(){
		$(".tab li a").removeClass("selected")
		$(this).addClass("selected")
		$(".panel ul").hide()
		$($(this).attr("href")).show()
		return false;
	})
    
	
    //#tab6 Nukki 더보기 버튼
    $("#tab6 li").slice(0, 3).show(); 
    $("#tab_more_btn button").click(function(e){
        e.preventDefault();
        $("#tab6 li:hidden").slice(0, 3).css("display","inline-block"); 
        if($("#tab6 li:hidden").length == 0){ 
            $("#tab_more_btn button").hide();
        }
    });
});