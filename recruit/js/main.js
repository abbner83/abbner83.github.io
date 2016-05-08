var ypos, ytot, per, setdark1, setdark2;
var s=1;

$(window).load(function(){
    darken();
});

function darken(){
    ytot = $(window).height();
    ypos = pageYOffset;
    per = Math.min(ypos/ytot,1);
    setdark1 = "rgba(60, 40, 40," + String(per*0.8) + ")";
    setdark2 = "rgba(60, 40, 40," + String(per*0.4+0.6) + ")";
        $("#index1").css('background-color', String(setdark1)) ;
        $("#index2").css('background-color', String(setdark2));
    
    setTimeout("darken()", 100);
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