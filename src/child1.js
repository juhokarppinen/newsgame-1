var child1_state = {

    create: function() {
        PLAYER.age = 20;
        if (Math.random() <= 0.50) {
            var name = pickName("male");
            while(name === PLAYER.name || name === PLAYER.spouse) {
                name = pickName("male");
            }
            PLAYER.children = [{name: name, gender: "male", year: 1937}];
            var baby = "poikavauvan";
        } else {
            var name = pickName("female");
            while(name === PLAYER.name || name === PLAYER.spouse) {
                name = pickName("female");
            }
            PLAYER.children = [{name: pickName("female"), gender: "female", year: 1937}];
            var baby = "tyttövauvan";
        }
        if ("undefined" === typeof PLAYER.spouse) {
            var text = "Häpeissäsi asut nyt perheesi luona ja vältät ulkona liikkumista. " + 
                       "Onneksi synnytät terveen "+baby+"! Lapsi saa nimekseen "+PLAYER.children[0].name
                       +" ja äitisi ihastuu lapsenlapseen ikihyviksi.";
            var image            = 'childbackground';
        } else {
            var text = "Saatte terveen "+baby+" ja lapsi saa nimekseen "+PLAYER.children[0].name+
                    ". Sukulaiset ihastelevat pienokaista ja elämä hymyilee.";
            var image            = 'familybackground';
        }
        
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('conscript');
        } else {
            if ("undefined" === typeof PLAYER.spouse) {
                GAME.state.start('beginwar');
        } else {
            GAME.state.start('conscriptwife');
        }
        }
    }
}