(function() {

    function JSONP(url, callbackName){

        var script = document.createElement("script"); //stwórz element script
        script.type = "text/javascript"; //nadaj mu typ text/javascript - dla starszych przeglądarek 
        script.async = true; // ma się odpalać asynchronicznie podczas wczytywania strony (ma jej nie blokować jak się wczyta to się wczyta) i wykonać
        script.src = url + "?callback=" + callbackName;

        document.head.appendChild(script); //wstawienie skryptu w sekcję head 

    }

    function showData(data) {

        var pre = document.createElement("pre");

        pre.textContent = JSON.stringify(data);
        document.body.appendChild(pre);

    }

    document.querySelector("#loadData").onclick = function(e) {

        // var data = {
        //     firstName: "Jan",
        //     lastName: "Kowalski",
        //     age: 32
        // };

        // showData(data);

        JSONP("get_data.php", "showData"); //po kliknięciu loadData wykonaj JSONP z parametrami (pobierz funkcję z tego źródła i wykonaj funkcję showData)
        //JSONP("http://eduweb.dev/get_data.php", "showData"); --> poprawnie ominiemy same origin policy

    };
    
    window.showData = showData;

})();