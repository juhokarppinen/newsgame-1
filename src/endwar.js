var endwar_state = {

    create: function() {
        var image            = 'conscriptbackground';
        var article          = 'articlepeace';
        var centerButtonLabel = "Jatka";

        drawUIsingleButtonArticle(image, article, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male" && PLAYER.noconscript !== true) {
            GAME.state.start('map1');
        } else {
            GAME.state.start('peacetime1');
        }
    }
}