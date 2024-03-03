if (window.location.pathname.includes('products')) {
    let pricesCurrency = document.querySelectorAll('.beae-product-single__price--sale');

    let currencyMapping = {
        'EUR': 'EUR',
        'CAD': 'CAD',
        'AUD': 'AUD',
        'DKK': 'DKK',
        'HKD': 'HKD',
        'ILS': 'ILS',
        'JPY': 'JPY',
        'USD': 'USD',
        'NZD': 'NZD',
        'PLN': 'PLN',
        'SGD': 'SGD',
        'KRW': 'KRW',
        'AED': 'AED',
        'GBP': 'GBP'
    };

    let selectedCurrencyInfo = document.querySelector('.disclosure__button span').textContent.trim();

    let matchedCurrency = Object.keys(currencyMapping).find(currency => selectedCurrencyInfo.includes(currency));
    let currencyCode = matchedCurrency ? currencyMapping[matchedCurrency] : "";

    pricesCurrency.forEach(function (price) {
        if (currencyCode) {
            let span = document.createElement('span');
            span.textContent = ' ' + currencyCode;
            span.style.color = '#e63232';
            span.style.fontSize = '20px';

            price.parentNode.insertBefore(span, price.nextSibling);
        }
    });

}
