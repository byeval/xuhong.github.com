(function($) {
    // Open external links in new window
    var externalLinks = function() {
        var host = location.host;

        $('body').on('click', 'a', function(e) {
            var href = this.href,
                link = href.replace(/https?:\/\/([^\/]+)(.*)/, '$1');

            if (link != '' && link != host && !$(this).hasClass('fancybox')) {
                window.open(href);
                e.preventDefault();
            }
        });
    };

    // Append caption after pictures
    var appendCaption = function() {
        $('.entry-content').each(function(i) {
            var _i = i;
            $(this).find('img').each(function() {
                var alt = this.alt;

                if (alt != '') {
                    $(this).after('<span class="caption">' + alt + '</span>');
                }

                $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox" rel="gallery' + _i + '" />');
            });
        });
    };

    externalLinks(); // Delete or comment this line to disable opening external links in new window
    appendCaption(); // Delete or comment this line to disable caption

    var mobilenav = $('#mobile-nav');

    $('html').click(function() {
        mobilenav.find('.on').each(function() {
            $(this).removeClass('on').next().hide();
        });
    });

    mobilenav.on('click', '.menu .button', function() {
        if (!$(this).hasClass('on')) {
            var width = $(this).width() + 42;
            $(this).addClass('on').next().show().css({
                width: width
            });
        } else {
            $(this).removeClass('on').next().hide();
        }
    }).on('click', '.search .button', function() {
        if (!$(this).hasClass('on')) {
            var width = mobilenav.width() - 51;
            mobilenav.children('.menu').children().eq(0).removeClass('on').next().hide();
            $(this).addClass('on').next().show().css({
                width: width
            }).children().children().eq(0).focus();
        } else {
            $(this).removeClass('on').next().hide().children().children().eq(0).val('');
        }
    }).click(function(e) {
        e.stopPropagation();
    });

    function launchFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    };

    function isFullscreen() {
        if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement || document.msFullscreenElement) {
            return true;
        } else {
            return false;
        }
    };
    //fullscreen
    var fs = document.getElementsByTagName('i')[1],
        post = document.getElementById('content');
    fs.addEventListener('click', function() {
        if (isFullscreen()) {
            exitFullscreen();
            this.className = "icon-expand";
        } else {
            launchFullscreen(post);
            this.className = "icon-contract";
        }
    });

    var t = document.getElementsByTagName("h3"),
        iconList = document.getElementsByTagName('i')[0],
    	li = "",
        menu = document.getElementsByClassName('menu')[0],
       	list = document.createElement('ul');
    for (var i = 0; i < t.length; i++) {
        t[i].id = "t" + (i+1);
        li += "<li><a href='#t" + (i+1) + "'>" + t[i].innerText + "</a></li>";
    }
    list.innerHTML = li;
    menu.appendChild(list);
    iconList.addEventListener('click', function(){
    	menu.className = menu.className.match(/\bon\b/) ? "menu" : "menu on";
    })

})(jQuery);
