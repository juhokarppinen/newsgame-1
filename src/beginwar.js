var beginwar_state = {

    create: function() {
        PLAYER.age = 22;
        var text = "Keski-Suomalainen: SOTA ALKAA!";
        PLAYER.causeofdeath = "sota";
        
        var image            = 'conscriptbackground';
        var article          = 'articlewinterwar';
        var centerButtonLabel = "Jatka";

        drawUIsingleButtonArticle(image, article, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        GAME.state.start('war1');
    }
}