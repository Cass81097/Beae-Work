
if (window.location.pathname.includes('products')) {
    setTimeout(function () {
        let pricesCurrency = document.querySelectorAll('.beae-product-single__price--sale');

        pricesCurrency.forEach(function (price) {
            let span = document.createElement('span');
            span.textContent = 'currency';
            price.parentNode.insertBefore(span, price.nextSibling);
        });

        let currencyMapping = {
            'EUR': 'EUR',
            'CAD': 'CAD',
            'AUD': 'AUD',
            'CZK': 'CZK',
            'DKK': 'DKK',
            'HKD': 'HKD',
            'ILS': 'ILS',
            'JPY': 'JPY',
            'MYR': 'MYR',
            'USD': 'USD',
            'NZD': 'NZD',
            'PLN': 'PLN',
            'SGD': 'SGD',
            'KRW': 'KRW',
            'SEK': 'SEK',
            'CHF': 'CHF',
            'AED': 'AED',
            'GBP': 'GBP'
        };

        let selectedCurrencyInfo = document.querySelector('.disclosure__button span').textContent.trim();

        let prices = document.querySelectorAll('.beae-product-single__price--sale');

        prices.forEach(function (price) {
            Object.keys(currencyMapping).forEach(function (currency) {
                if (selectedCurrencyInfo.includes(currency)) {
                    price.textContent = price.textContent + ' ' + currencyMapping[currency];
                }
            });
        });
    }, 1000);
}



if (window.location.pathname.includes('cs/pages/rampu-latern-by-petr-hak')) {
    let elements = document.querySelectorAll('.beae-typo-p1');
    if (elements.length >= 8) {
        elements[0].innerHTML = 'Spolupráce: PETR HÁK &amp; PRUSA RESEARCH';
        elements[2].innerHTML = 'Materiál: RECYKLOVANÝ PETG KARMÍNOVÝ RECYKLÁT';
        elements[4].innerHTML = 'Fotograf: DITA HAVRÁNKOVÁ &amp; MARTIN ŽAMPACH';
        elements[6].innerHTML = 'Lokace: KOLEKTOR CAFE';
        elements[8].innerHTML = 'Tagy: #LSAM #FGF #UDRŽITELNOST #RECYKLACE';
        for (let i = 1; i < elements.length; i += 2) {
            elements[i].innerHTML = '<br>';
        }
    }
}

if (window.location.pathname.includes('cs/pages/rampu-latern-by-petr-hak')) {
    let translations = {
        'RECYCLED PETG CARMINE RED TRANSPARENT': 'Spolupráce:',
    };


    let elements = document.querySelectorAll('.beae-typo-p1');
    elements.forEach(function (element) {
        for (var key in translations) {
            if (element.innerHTML.includes(key)) {
                element.innerHTML = element.innerHTML.replace(key, translations[key]);
            }
        }
    });
}

if (window.location.pathname === '/cs/pages/rampu-latern-by-petr-hak') {
    let translations = {
        'RECYCLED PETG CARMINE RED TRANSPARENT': 'RECYKLOVANÝ PETG KARMÍNOVĚ ČERVENÝ PRŮHLEDNÝ:',
    };

    let elements = document.querySelectorAll('.beae-typo-p1');
    elements.forEach(function (element) {
        for (var key in translations) {
            if (element.innerHTML.trim() === key) { 
                element.innerHTML = translations[key];
            }
        }
    });
}





