//アコーディオンをクリックした時の動作
$('.fllow-section').on('click', function() {//タイトル要素をクリックしたら
    var findElm = $(this).next(".fllow-summary");//直後のアコーディオンを行うエリアを取得し
    $(findElm).slideToggle();//アコーディオンの上下動作
    var findIcon = $(this).find(".fllow-title")
      
    if($(this).hasClass('open')){//タイトル要素にクラス名closeがあれば
      $(this).removeClass('open');//クラス名を除去
      $(findIcon).removeClass('open')
    }else{//それ以外は
      $(this).addClass('open');//クラス名closeを付与
      $(findIcon).addClass('open')
    }
});

$(function(){
    $('.slider').slick({
        autoplay: true,//自動的に動き出すか。初期値はfalse。
        infinite: true,//スライドをループさせるかどうか。初期値はtrue。
        speed: 500,//スライドのスピード。初期値は300。
        slidesToShow: 3,//スライドを画面に3枚見せる
        slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
        prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
        nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
        centerMode: true,//要素を中央ぞろえにする
        variableWidth: true,//幅の違う画像の高さを揃えて表示
        dots: true,//下部ドットナビゲーションの表示
    });
})

