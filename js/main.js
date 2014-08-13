$(document).ready(function(){
    listStatus = 0;
    $('.list-button').click(function(){
        listWidth = $('#wrap .play-list ul').width();
        if(!listStatus){
            $('#wrap .play-list ul').animate({marginRight: 0},200);
            $(this).animate({marginRight: listWidth - 5},500);
            listStatus = 1;
        } else {
            $('#wrap .play-list ul').animate({marginRight: -400},500);
            $(this).animate({marginRight: -5},300);
            listStatus = 0;
        }
    })

    var audio = document.getElementById('music');
    var isPlaying    = false;
    var currentMusic = localStorage.currentMusic || 0;
    var quality = 0;

    for (var i = 0; i < playlist.length; i++){
        $('.play-list ul').append('<li class="item' + i + '">' + playlist[i][0] + '</li>');
    }
    
    /**
    * Request notification permissions
    */
    function request_permission()
    {
        // 0 means we have permission to display notifications
        
    }
    var loadMusic = function(i){
        if(localStorage.currentMusic > -1)
        localStorage.setItem('prevplay', localStorage.currentMusic * 1);
        currentMusic = localStorage.currentMusic = i;
        var item = playlist[i];
        audio.setAttribute("src", item[3]);
        audio.addEventListener('play', playEvent, false);
        audio.addEventListener('pause', stopEvent, false);
        audio.addEventListener('timeupdate', updateProgress, false);
        audio.addEventListener('ended', autoChange, false);
        cover = item[4];
        $('#pic').attr({'src': cover, 'alt': item[2]});
        $('#wrap .title h1').html(item[0]);
        $('#wrap .title h2').html(item[1] + " - " + item[2]);
        $('.play-list ul li').removeClass('playing').eq(i).addClass('playing');
        audio.play();
    }
    
    
    var changeMusic = function(i){
        loadMusic(i);
        audio.play();
    }

    var autoChange = function(){
        audio.pause();
        var nextMusic = 0;
        if(currentMusic == playlist.length - 1){
            changeMusic(0);
        } else {
            changeMusic(currentMusic + 1);
        }
    }
    
    
    var updateProgress = function(){
        $('#wrap .progress .current').css({'width': audio.currentTime / audio.duration * 100 + '%'});
    }
    
    var playEvent = function(){
        $('.album').addClass('playing');
        $('#wrap .progress').animate({opacity:"1"});
        $('.start i').addClass('playing').removeClass('fa-play').addClass('fa-pause');
        isPlaying = true;
    }
    
    var stopEvent = function(){
        $('.album').removeClass('playing');
        $('.start i').removeClass('playing').removeClass('fa-pause').addClass('fa-play');
        isPlaying = false;
    }
    
    $('.center').click(function(){
        if ($('.start i').hasClass('playing')){
            audio.pause();
        } else {
            audio.play();
        }
    });

    $('.pre').click(function(){
        audio.pause();
        if(currentMusic == 0){
            changeMusic(playlist.length - 1);
        } else {
            changeMusic(currentMusic - 1);
        }
    })

    $('.next').click(function(){
        audio.pause();
        if(currentMusic == playlist.length - 1){
            changeMusic(0);
        } else {
            changeMusic(currentMusic * 1 + 1);
        }
    })

    $('.play-list ul li').click(function(){
        if(!$(this).hasClass('playing')){
            var className = $(this).attr('class');
            var num       = parseInt(className.substr(4));
            $('#wrap .list-button').animate({marginRight: -5},300);
            $('#wrap .play-list ul').animate({marginRight: -400},300);
            listStatus = 0;
            audio.pause();
            changeMusic(num);
        }
    })
    
    
    $('.player').click(function(){
        if(listStatus){
            $('#wrap .list-button').animate({marginRight: -5},300);
            $('#wrap .play-list ul').animate({marginRight: -400},300);
            listStatus = 0;
        }
    })
    
    
    $('.home').click(function(){
        window.open('http://test.com');
    })

    if(typeof(localStorage.prevplay) == undefined || isNaN(localStorage.prevplay))
        localStorage.prevplay = '-1';
    if(typeof(localStorage.prevplay) == currentMusic || isNaN(localStorage.currentMusic) || !playlist[localStorage.currentMusic])
        autoChange(); else changeMusic(localStorage.currentMusic * 1);
})
