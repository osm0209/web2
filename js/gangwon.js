(function($){

//객체(Object) 형식의 이벤트
$('.main-btn').on({
    mouseenter: function(){ //마우스접근성
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');  
    },
    focusin: function(){ //탭키 접근성
        $('.sub').stop().fadeOut(0);
        $(this).next().stop().fadeIn(300);
    
        $('.main-btn').removeClass('on');
        $(this).addClass('on');  
    }
});



//접근성:포커스
$('#nav').on({
    mouseleave:function(){
      $('.sub').stop().fadeOut(300);
      $('.main-btn').removeClass('on');
    }
  });



//메인슬라이드
let cnt=0;

//1.메인슬라이드 함수
function mainSlide(){
    console.log('보이는 슬라이드', cnt);
    console.log('사라지는 슬라이드', cnt===0?2:cnt-1);
    $('.slide').css({zIndex:1}).animate({opacity:1},0);
    $('.slide').eq(cnt).css({zIndex:2});
    $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},600);
}


//2.다음카운트 함수
function nextCount(){
    cnt++;
    cnt>2?cnt=0:cnt;
    mainSlide();
}

//3.자동타이머 함수
function autoTimer(){
    setInterval(nextCount, 3000);
}
autoTimer();


//공지사항 & 갤러리 탭메뉴 클릭이벤트
//갤러리
$('.gallery-btn').on({
    click:function(){ //마우스 클릭 그리고 키보드는
        $('.notice-btn').addClass('on');
        $('.gallery-btn').addClass('on');
        $('.notice-box').addClass('on');
        $('.gallery-box').addClass('on');        
    }
});
//공지사항
$('.notice-btn').on({
    click:function(){
        $('.notice-btn').removeClass('on');
        $('.gallery-btn').removeClass('on');
        $('.notice-box').removeClass('on');
        $('.gallery-box').removeClass('on');       
    }    
});


//레이어팝업창열기
$('.link-btn').on({
    click:function(){
    $('#modal').stop().fadeIn(300);       
    }
});



//닫기
$('.close-btn').on({
    click:function(){
    $('#modal').stop().fadeOut(300);        
    }
});



})(jQuery);