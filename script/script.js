$(function(){
    // innerfade plugin
    $(".innerFade").innerfade({
      // .innerfade를 넣어줘서 돌아가는것
        animationtype: 'fade',  // 애니메이션 스타일 (나타났다 사라짐)
        timeout:2000,  // 전체 초 2초
        speed:500,  // 이미지 사이의 초 0.5
    })
});