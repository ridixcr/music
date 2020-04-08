$(function() {
    new CirclePlayer("#jquery_jplayer_1", {
        title: "Electronic Music",
        artist: "RidixCr",
        //mp3: "http://185.33.21.112:11029"
        //mp3: "http://stream.dancewave.online:8080/dance.mp3"
        //mp3: atob("aHR0cDovL3VrNC5pbnRlcm5ldC1yYWRpby5jb206ODQwMC9saXN0ZW4ucGxzJnQ9LnBscw==")//Online 100%
        //mp3: atob("aHR0cDovL2dpc3MudHY6ODAwMS9yaWRpeGNyLm1wMw==") //Online - Horario Personal
        mp3: "http://giss.tv:8000/ridixcr.mp3"
    }, {
        supplied: "mp3",
        cssSelectorAncestor: "#cp_container_1",
        swfPath: "lib",
        wmode: "window",
        keyEnabled: true,
        canplay: function() {
            $("#jquery_jplayer_1").jPlayer("play");
        }
    });
});