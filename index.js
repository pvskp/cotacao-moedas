var actualDolar = document.getElementById("usd");
var actualEuro = document.getElementById("eur");
var actualBitcoin = document.getElementById("btc");

function applyCot(dolar, euro, bitcoin){
    actualDolar.innerHTML = dolar;
    actualEuro.innerHTML = euro;
    actualBitcoin.innerHTML = bitcoin;
}

function requestAPI(url) {
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return JSON.parse(request.responseText);
}

function main() {
    const coinData = requestAPI(
        "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"
    );

    var dolar = coinData["USDBRL"]["bid"],
        euro = coinData["EURBRL"]["bid"],
        bitcoin = coinData["BTCBRL"]["bid"];

    applyCot(dolar, euro, bitcoin);
}

main();

setInterval(main, 1000)
