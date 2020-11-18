$(function(){
    $(window).scroll(function(){

        var now = $(window).scrollTop();
        if (now > 500){
            $(".warp-top-icon").fadeIn(700);
        }else{
            $(".warp-top-icon").fadeOut(700);
        }
        });
    
    $(".warp-top").click(function(){
        $("html,body").animate({scrollTop:0}, 500)
        return false;
    });
    //  =========page link=======
    // #から始まるURLがクリックされた時
    $('a[href^="#"]').click(function() {
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = $("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        let position = $(target).offset().top;
        // ターゲットの位置までspeedの速度で移動
        $("html, body").animate(
        {
            scrollTop: position
        },
        speed
        );
        return false;
    });
    // slick.js
    $(document).ready(function(){
        $('.slick').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    });
});