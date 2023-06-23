
const convertButton = document.querySelector(".convertButton")
const buttonConvert = document.querySelector(".button-Convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectPrimari = document.querySelector(".currency-select-primari")
const convertFrom = document.querySelector(".convert-from")

let isConvertValuesPrimario = true;


//---> converção primaria
function convertValuesPrimario() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const entryValue = document.querySelector(".entry-value")

    const realToday = 1
    const TodayDolar = 4.78
    const euroToday = 5.21
    const dfiToday = 1.71
    const bitcoinToday = 143694.55

    if (convertFrom.value == "dolar") {  //se o select estiver em dola entra aqui
        entryValue.innerHTML = new Intl.NumberFormat("en-US", {
            currency: "USD"
        }).format(inputCurrencyValue * TodayDolar)
    }

    if (convertFrom.value == "euro") {  //se o select estiver em EURO entra aqui
        entryValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday)
    }

    if (convertFrom.value == "dfi") {  //se o select estiver em DFI entra aqui
        entryValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "FDI"
        }).format(inputCurrencyValue * dfiToday)
    }

    if (convertFrom.value == "btc") {  //se o select estiver em DFI entra aqui
        entryValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("br-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrencyPrimari() {
    const currencyNamePrimari = document.getElementById("currency-name-primari")
    const imgPrimaria = document.querySelector(".primari-img")

    if (currencySelectPrimari.value == "dolar") {
        currencyNamePrimari.innerHTML = "Dólar americano"
        imgPrimaria.src = "./assets/dolar.png"
    }

    if (currencySelectPrimari.value == "euro") {
        currencyNamePrimari.innerHTML = "Euro"
        imgPrimaria.src = "./assets/euro.png"
    }

    if (currencySelectPrimari.value == "btc") {
        currencyNamePrimari.innerHTML = "Bitcoin"
        imgPrimaria.src = './assets/btc.png'
    }

    if (currencySelectPrimari.value == "dfi") {
        currencyNamePrimari.innerHTML = "DFI"
        imgPrimaria.src = './assets/dfi.png'
    }

    if (currencySelectPrimari.value == "real") {
        currencyNamePrimari.innerHTML = "Real Brasileiro"
        imgPrimaria.src = './assets/real.png'
    }


    convertValuesPrimario()

}


// ---> Converção secundaria

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValueConvert = document.querySelector(".currency-value") //outras moedas


    const realToday = 1
    const dolarToday = 4.78
    const euroToday = 5.21
    const dfiToday = 1.71
    const bitcoinToday = 143694.55

    if (currencySelect.value == "dolar") {  //se o select estiver em dola entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {  //se o select estiver em euro entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect.value == "btc") {  //se o select estiver em BTC entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "dfi") {  //se o select estiver em DFI entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "DFI"
        }).format(inputCurrencyValue / dfiToday)

    }

    if (currencySelect.value == "real") {  //se o select estiver em Real entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)

    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImagem = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImagem.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImagem.src = "./assets/euro.png"
    }

    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImagem.src = './assets/btc.png'
    }

    if (currencySelect.value == "dfi") {
        currencyName.innerHTML = "DFI"
        currencyImagem.src = './assets/dfi.png'
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImagem.src = './assets/real.png'
    }


    convertValues()

}

function handleConvertButtonClick() {
    if (isConvertValuesPrimario) {
      convertValuesPrimario();
    } else {
      convertValues();
    }
  }


convertButton.addEventListener("click", handleConvertButtonClick);

currencySelectPrimari.addEventListener("change", changeCurrencyPrimari)
currencySelect.addEventListener("change", changeCurrency)

buttonConvert.addEventListener("click", function() {
    isConvertValuesPrimario = true;
});

convertButton.addEventListener("click", function() {
    isConvertValuesPrimario = false;
});


// convertButton.addEventListener("click", convertValues) // chama o botação função...
// buttonConvert.addEventListener("click", convertValuesPrimario)

