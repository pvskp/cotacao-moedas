
function applyCot(dolar, euro, bitcoin){
    var actualDolar = document.getElementById("usd");
    var actualEuro = document.getElementById("eur");
    var actualBitcoin = document.getElementById("btc");

    actualDolar.innerText = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'brl'}).format(dolar);
    actualEuro.innerText = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'brl'}).format(euro);
    actualBitcoin.innerText = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'brl'}).format(bitcoin);
}

function requestAPI(url) {
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

setInterval(main, 10000)
