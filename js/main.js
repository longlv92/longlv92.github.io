var Menu =new function _Navigation(){
    this.showMenu = function(){
        $('.banner_top').addClass('showfixed');
        $('#overlay-common').css('display','block');
    };
    this.closeMenu = function(){
        $('.banner_top').removeClass('showfixed');
        $('#overlay-common').css('display','none');
    };
};