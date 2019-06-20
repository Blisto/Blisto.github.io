$(document).ready(function(){

var pic_num = 2;
setInterval(change_img, 3000);
function change_img(){
    if (pic_num == 1){
        $('#pc').fadeTo(800,0.05,function(){
            $('#pc').attr('src','/img/NTUT.jpg');
            $('#pc').fadeTo(500,1);
            });
    }else if (pic_num == 2){
        $('#pc').fadeTo(800,0.05,function(){
            $('#pc').attr('src','img/122.png');
            $('#pc').fadeTo(500,1);
            });
    }else if (pic_num == 3){
        $('#pc').fadeTo(800,0.05,function(){
            $('#pc').attr('src','img/133.png');
            $('#pc').fadeTo(500,1);
            });
    }
    pic_num = pic_num % 3 + 1;
};

});