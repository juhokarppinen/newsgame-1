var school1_state = {

    create: function() {
        PLAYER.age = 7;

        var text = "Vuonna 1921 Suomessa säädettiin laki yleisestä " + 
                   "oppivelvollisuudesta, joten aloitat koulutiesi sinä " + 
                   "syksynä, kun täytät seitsemän vuotta.";

        var image             = 'schoolbackground';
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function() {
        GAME.state.start('school2');
    }
}
