var xtot, ytot, xpos, ypos, per, setdark1, setdark2, l_top, l_left;
var s=1;

$(window).load(function(){
    darken();
});

function darken(){
//    xtot = $(window).width();
    ytot = $(window).height();
//    xpos = (xtot*0.98 - $("#logo").width())/2;
//    ypos = (ytot*0.96 - $("#logo").width())/2;
    per = Math.min(pageYOffset/ytot,1);

    setdark1 = "rgba(60, 40, 40," + (Math.max(per-0.8,0)*4) + ")";
    setdark2 = "rgba(60, 40, 40," + Math.sqrt((per*0.96+0.04)) + ")";
//    if(per<0.8){
//        l_left = (xpos*(0.8-per) + pageXOffset*0.01) + "px";
//        l_top = (ypos*(0.8-per) + pageYOffset*0.02) + "px";
//    }
//    else{
//        l_left="1%";
//        l_top="2%";
//    }
    
    $("#index1").css('background-color', setdark1) ;
    $("#index2").css('background-color', setdark2);
//    $("#logo").css('top', l_top);
//    $("#logo").css('left', l_left);
    
    if(per>0.88){
        $("#logo").show();
    }
    else{
        $("#logo").hide();
    }
    
    setTimeout("darken()", 30);
}

function fx1(){
    if(s===2){
        $("#pic2").fadeOut(200,function(){
            $("#pic1").fadeIn("slow");
        });
    }
    if(s===3){
        $("#pic3").fadeOut(200,function(){
            $("#pic1").fadeIn("slow");
        });
    }
    s=1;
}
function fx2(){
    if(s===1){
        $("#pic1").fadeOut(200,function(){
            $("#pic2").fadeIn("slow");
        });
    }
    if(s===3){
        $("#pic3").fadeOut(200,function(){
            $("#pic2").fadeIn("slow");
        });
    }
    s=2;
}
function fx3(){
    if(s===1){
        $("#pic1").fadeOut(200,function(){
            $("#pic3").fadeIn("slow");
        });
    }
    if(s===2){
        $("#pic2").fadeOut(200,function(){
            $("#pic3").fadeIn("slow");
        });
    }
    s=3;
}