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
    });