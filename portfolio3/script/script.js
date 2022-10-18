function slide(){
    $('.slide li:not(:eq(0))').hide()
    //첫번째 li룰 빼고 나머지는 안보이게 처리
    var pos=0
    function play(){
        const before = $('.slide li').eq(pos)
        const after  = $('.slide li').eq(pos = (pos+1)%3)
                                        // 0 +1 % 3 => 1
                                        // 1 +1 % 3 => 2
                                        // 2 +1 % 3 => 0 
        before.fadeOut(300)   // 다음슬라이드 안보이게                               
        after.fadeIn(300)     // 다음 슬라이드 보이게                           
    }
    setInterval(play, 2000)
}

function toggleMenu(){
    $('ul', this).stop().slideToggle()
}

function layerToggle(){
    $('.layer').toggle()
}

function tabMenu(){
    var index = $(this).parent().index()
    $('.tab a.active').removeClass('active')
    $(this).addClass('active')

    // var target
    // if (index === 0){
    //     target = $('.tab__notice')
    // } else{
    //     target = $('.tab__gallery')
    // }
    var target = index === 0 ? $('.tab__notice') : $('.tab__gallery')
    // 인덱스가 0이면, .tab__notice를 선택하고 0이 아니면 .tab_gallery 선택
    $('.notice article.active').removeClass('active')
target.addClass('active')
    // .notice article 중에서 active가 있는 부분을 지움
}



$(document)
.on('ready', slide)
.on('mouseenter mouseleave', '.gnb>ul>li', toggleMenu)
.on('click', '.tab__notice li:eq(0) a, .layer__close', layerToggle)
.on('click', '.tab a', tabMenu)