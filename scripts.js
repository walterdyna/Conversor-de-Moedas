
const convertButton = document.querySelector(".convertButton")
const buttonConvert = document.querySelector(".button-Convert")
const currencySelect = document.querySelector(".currency-select")
const currencySelectPrimari = document.querySelector(".currency-select-primari")
const convertFrom = document.querySelector(".convert-from")

//const isConvertValuesPrimario = true;


// //---> converção primaria
// function convertValuesPrimario() {
//     const inputCurrencyValue = document.querySelector(".input-currency").value
//     const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
//     const entryValue = document.querySelector("entry-value")

//     console.log(currencySelectPrimari)

//     const realToday = 1
//     const todayDolar = 4.78
//     const todayEuro = 5.21
//     const todayDfi = 1.71
//     const todayBitcoin = 143694.55

//     if (convertFrom.value == "real") {  //se o select estiver em Real entra aqui
//         entryValue.innerHTML = new Intl.NumberFormat("br-BR", {
//             currency: "BRL"
//         }).format(inputCurrencyValue * realToday)
//     }

//     if (convertFrom.value == "dolar") {  //se o select estiver em dola entra aqui
//         entryValue.innerHTML = new Intl.NumberFormat("en-US", {
//             currency: "USD"
//         }).format(inputCurrencyValue * todayDolar)
//     }

//     if (convertFrom.value == "euro") {  //se o select estiver em EURO entra aqui
//         entryValue.innerHTML = new Intl.NumberFormat("de-DE", {
//             style: "currency",
//             currency: "EUR"
//         }).format(inputCurrencyValue * todayEuro)
//     }

//     if (convertFrom.value == "dfi") {  //se o select estiver em DFI entra aqui
//         entryValue.innerHTML = new Intl.NumberFormat("en-US", {
//             style: "currency",
//             currency: "FDI"
//         }).format(inputCurrencyValue * todayDfi)
//     }

//     if (convertFrom.value == "btc") {  //se o select estiver em DFI entra aqui
//         entryValue.innerHTML = new Intl.NumberFormat("en-US", {
//             style: "currency",
//             currency: "BTC"
//         }).format(inputCurrencyValue * todayBitcoin)
//     }

//     currencyValueToConvert.innerHTML = new Intl.NumberFormat("br-BR", {
//         style: "currency",
//         currency: "BRL"
//     }).format(inputCurrencyValue)

// }

// function changeCurrencyPrimari() {
//     const currencyNamePrimari = document.getElementById("currency-name-primari")
//     const imgPrimaria = document.querySelector(".primari-img")

//     if (currencySelectPrimari.value == "dolar") {
//         currencyNamePrimari.innerHTML = "Dólar americano"
//         imgPrimaria.src = "./assets/dolar.png"
//     }

//     if (currencySelectPrimari.value == "euro") {
//         currencyNamePrimari.innerHTML = "Euro"
//         imgPrimaria.src = "./assets/euro.png"
//     }

//     if (currencySelectPrimari.value == "btc") {
//         currencyNamePrimari.innerHTML = "Bitcoin"
//         imgPrimaria.src = './assets/btc.png'
//     }

//     if (currencySelectPrimari.value == "dfi") {
//         currencyNamePrimari.innerHTML = "DFI"
//         imgPrimaria.src = './assets/dfi.png'
//     }

//     if (currencySelectPrimari.value == "real") {
//         currencyNamePrimari.innerHTML = "Real Brasileiro"
//         imgPrimaria.src = './assets/real.png'
//     }


//     convertValuesPrimario()

// }


//---> Converção secundaria

async function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real
    const currencyValueConvert = document.querySelector(".currency-value") //outras moedas


    const usdbrlBid = await getUsdBrlBid();
    const dolarToday = usdbrlBid;
  
    const eurbrlBid = await getEurBrlBid();
    const euroToday = eurbrlBid;
  
    const gbpbrlBid = await getGbpBrlBid();
    const libraToday = gbpbrlBid;
  
    const btcbrlBid = await getBtcBrlBid();
    const bitcoinToday = btcbrlBid;

    const ethbrlBid = await getEthBrlBid();
    const ethToday = ethbrlBid;

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

    if (currencySelect.value == "libra") {
        currencyValueConvert.innerHTML = new Intl.NumberFormat("en-GB", {
          style: "currency",
          currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
      }

    if (currencySelect.value == "btc") {  //se o select estiver em BTC entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "eth") {  //se o select estiver em ETH entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "ETH"
        }).format(inputCurrencyValue / ethToday)

    }

    if (currencySelect.value == "real") {  //se o select estiver em Real entra aqui
        currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

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
        currencyName.innerHTML = "€ Euro"
        currencyImagem.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "£ Libra";
        currencyImagem.src = "./assets/libra.png";
      }

    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImagem.src = './assets/btc.png'
    }

    if (currencySelect.value == "eth") {
        currencyName.innerHTML = "⧫ Ethereum"
        currencyImagem.src = './assets/eth.png'
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImagem.src = './assets/real.png'
    }


    convertValues()

}

// function handleConvertButtonClick() {
//     if (isConvertValuesPrimario) {
//       convertValuesPrimario();
//     } else {
//       convertValues();
//     }
//   }


//convertButton.addEventListener("click", handleConvertButtonClick);

//currencySelectPrimari.addEventListener("change", changeCurrencyPrimari)
currencySelect.addEventListener("change", changeCurrency)

// buttonConvert.addEventListener("click", function() {
//     isConvertValuesPrimario = true;
// });

// convertButton.addEventListener("click", function() {
//     isConvertValuesPrimario = false;
// });


convertButton.addEventListener("click", convertValues) // chama o botação função...
//buttonConvert.addEventListener("click", convertValuesPrimario)

//api de busca de valores

async function getUsdBrlBid() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
    const data = await response.json();
    return data['USDBRL']['bid'];
  }
  
  async function getEurBrlBid() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/EUR-BRL');
    const data = await response.json();
    return data['EURBRL']['bid'];
  }
  
  async function getGbpBrlBid() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/GBP-BRL');
    const data = await response.json();
    return data['GBPBRL']['bid'];
  }
  
  async function getBtcBrlBid() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/BTC-BRL');
    const data = await response.json();
    return data['BTCBRL']['bid'];
  }

  async function getEthBrlBid() {
    const response = await fetch('https://economia.awesomeapi.com.br/last/ETH-BRL');
    const data = await response.json();
    return data['ETHBRL']['bid'];
  }

