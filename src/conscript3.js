var conscript3_state = {

    create: function() {
        PLAYER.age = 22;
        if(PLAYER.university === true) {
            var text = "Toinen lukuvuotesi yliopistossa on vasta päässyt hyvään vauhtiin, kun saat "
            +"kutsun ylimääräisiin kertausharjoituksiin. Kirje ei tullut täytenä yllätyksenä, "
            +"sillä olet seurannut opiskelutovereidesi kanssa uhkakuvia täynnä olevia uutisia "
            +"huolellisesti koko alkusyksyn. Sinun on lähdettävä suoraan kohti Viipuria.";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity === false) {
            var text = "Lokakuussa 1939 sinut kutsutaan ylimääräisiin kertausharjoituksiin. "
            +"Viime töiksesi ennen lähtöäsi kokoontumispaikalle valmistelet työnantajasi hevoset puolustusvoimien käyttöön. ";
        } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.movedtocity !== true) {
            var text = "Olet hädin tuskin ehtinyt sopeutua siviilielämään armeijan jäljiltä, kun saat kutsun ylimääräisiin "
            +"kertausharjoituksiin lokakuussa 1939. Sadonkorjuu ja syystyöt on onneksi "
            +"saatu hyvissä ajoin päätökseen, joten voit jättää tilan huoletta kotijoukkojen hoidettavaksi harjoitusten ajaksi.";
        } else {
            var text = "Olet hädin tuskin ehtinyt sopeutua siviilielämään armeijan jäljiltä, kun lokakuussa 1939 "
            +"saat jälleen valtiolta kirjeen: sinun on lähdettävä ylimääräisiin kertausharjoituksiin.";
        }

        //will have to make space for this later
        /*if ("undefined" !== typeof PLAYER.children) {
            text += (1939-PLAYER.children[0].year) + "-vuotias " + PLAYER.children[0].name + " vilkuttaa oven suussa lähtiessäsi.";
        }*/
        
        var image            = 'conscriptbackground';
        var centerButtonLabel = "Jatka";
        var infoText = "Ylimääräinen kertausharjoitus tarkoitti sitä, että palvelukseen kutsuttiin lähes kaikki " +
        "reserviin kuuluvat alle 60-vuotiaat upseerit ja alle 40-vuotiaat aliupseerit sekä miehistö. " +
        "Yli kuukauden kestäneissä harjoituksissa suomalaisten puolustuskyky -ja tahto lujittuivat " +
        "ennen kuin toinen maailmansota Suomessa alkoi.\n\nLähde: Ylimääräinen harjoitus kokoaa armeijan rajalle. Artikkeli. yle.fi";


        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        GAME.state.start('conscript4');
    }
};