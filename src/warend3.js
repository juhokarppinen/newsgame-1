var warend3_state = {

    create: function() {
        if(PLAYER.gender === "male") {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor") {
                var image = 'constructionbackground';
                var text = "Palaat rintamalta kotiin ristiriitaisin tuntein. Vaimo ja lapset tuntuvat vierailta, etkä saa sodan kauhuja "
                +"pyyhittyä mielestäsi. Rengin töitä sinulle ei enää ole tarjolla, mutta löydät hommia läheiseltä rakennustyömaalta.";
            } else if (PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = 'youthworkcountrybackground';
                var text = "Vaikka oletkin perinyt tilan vanhemmiltasi, on pikkuveljesi ottanut ohjat tilanhoidossa. Hän vastaa peltotöistä "
                +"ja vaimosi hoitaa kotieläimiä. Sodanaikaiset liiketoimintasi ovat koulineet sinusta taitavan kauppiaan, ja nyt haluaisit "
                +"perustaa oikean sekatavarakaupan.";
            } else {
                var image = 'plywoodfactorybackground';
                var text = "Vaimosi odottaa esikoistanne, teille on järjestynyt asunto tehtaan työntekijöille rakennetusta talosta ja olet saanut ylennyksen. "
                +"Viimeisestä on kiittäminen opiskelua työväenopistossa ennen sodan alkamista. Näyttää siltä, että muutaman vuoden kuluttua pääset vaihtamaan "
                +"työhaalarit valkoisiin kauluksiin.";
            }
        } else {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                var image = "shopbackground";
                var text = "Miehesi on perustanut sekatavarakaupan, jossa riittää tekemistä sinullekin. Vaihdat navettaesiliinan astetta hienompaan ja alat palvella asiakkaita.";
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    var image = "youthworkcountrybackground";
                    var text = "Olet tuskin tuntea rintamalta kotiin palannutta miestäsi. Hän on laihtunut puoleen entisestä ja kasvot ovat kuin vanhan miehen. "
                    +"Ennen häneltä ei ollut saada suunvuoroa, mutta nykyisin hän tuskin päästää ääntäkään. Hän viettää illat milloin missäkin ja kotiin "
                    +"palatessaan olet haistavinasi alkoholin hänen hengityksestään.";
                } else {
                    var image = "youthworkcountrybackground";
                    var text = "Olet jo pitkään hankkinut elantosi erilaisilla talkootöillä millon missäkin, mutta nyt, kun rintamamiehet ovat palanneet koteihinsa, "
                    +"he syrjäyttävät sinut työnhaussa.";
                }
            } else if(PLAYER.lotta === true) {
                if(PLAYER.university === true) {
                    var image = "helsinkiunibackground";
                    var text = "Olet palannut jälleen Helsinkiin. Arki yliopistokampuksella on varsin erilaista kuin ennen, kun rintamalla palvelleet sotilaat ovat "
                    +"palanneet myös opintojensa pariin.";
                } else {
                    var image = "lottabackground";
                    var text = "Rauhanehtojen mukaan niin suojeluskunnat kuin lottajärjestökin tuli lakkauttaa. Teistä ylistetyistä lotista " +
                        "tuli hyljeksittyjä. Pahat kielet vihjailevat kaikenlaista lottien ja saksalaissotilaiden suhteista. Poltat lottapukusi " +
                        "ja lottajärjestöön liittyvät paperit. Viisi vuotta historiaasi palaa papereiden mukana.";
                }
            } else if(PLAYER.widowboss === true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    var image = "citybackground";
                    var text = "Olet ollut naimisissa yli kaksi vuotta, mutta vasta nyt pääset heräämään miehesi vierestä aamuisin. "
                    +"Olette saaneet asunnon vaneritehtaan työntekijöitä varten rakennetusta talosta ja odotat esikoistanne.";
                } else {
                    PLAYER.age = 33;
                    var image = "citybackground";
                    var text = "Menetät työpaikkasi toimistolla, kun kansanhuoltoministeriö lakkautetaan vuonna 1950. "
                    +"Yhtäkkiä uuden työn löytäminen onkin hankalaa, sillä maatalouden koneistumisen myötä työvoimantarve siellä on vähentynyt, ja entiset piiat ja rengit kilpailevat "
                    +"nyt kanssasi samoista työpaikoista.";
                }
            } else {
                var image = "candyfactorybackground";
                PLAYER.age = 32;
                var text = "Tehtaan tuotanto on saatu pyörimään jälleen täydellä teholla, ja olet saanut työpaikkasi takaisin. Makeiset maistuvat suomalaisille pulavuosien jälkeen. "
                +"Suklaakin on vapautettu säännöstelystä, ja sen kysyntä on niin kovaa, ettette pysty siihen vastaamaan, vaikka paiskittekin hommia kahdessa vuorossa.";
                var infoText = "SOK:n Makeistehdas Vaajakoskella pysyi käynnissä miltei koko sodan ajan, vaikka valikoimaa jouduttiin supistamaan sokeri- ja siirappipulan " +
                "vuoksi. Raaka-ainepula pysäytti tehtaan tuotannon kokonaan muutamiksi kuukausiksi vuosina 1943 ja 1944, mutta tuotanto käynnistyi uudelleen, kun raaka-aineita " +
                "oli jälleen saatavilla.\n\nLähde: Kolu, Antti, Vaajakosken yhdyskunta 1916-1944. Vaajakosken Kohinat ry. Jyväskylä 2011.";
            }
        }
                
        var centerButtonLabel = "Jatka";

        drawUIsingleButton(image, text, centerButtonLabel, this, infoText);
    },

    centerButtonHandler: function () {
        if(PLAYER.gender === "male") {
            GAME.state.start('newchoice1');
        } else {
            if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "middle") {
                GAME.state.start('newchoice1');
            } else if(PLAYER.location.name !== "Jyväskylä" && PLAYER.class === "poor" && PLAYER.movedtocity !== true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    GAME.state.start('newchoice1');
                } else {
                    PLAYER.age = 29;
                    PLAYER.causeofdeath = "influenssa";
                    GAME.state.start('death');
                }
            } else if(PLAYER.lotta === true) {
                if(PLAYER.university === true) {
                    GAME.state.start('newpath1');
                } else {
                    GAME.state.start('sixties');
                }
            } else if(PLAYER.widowboss === true) {
                if("undefined" !== typeof PLAYER.spouse) {
                    GAME.state.start('newpath1');
                } else {
                    GAME.state.start('newpath2');
                }
            } else {
                GAME.state.start('newpath2');
            }
        }
    }
};