async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    const url = `https://open.er-api.com/v6/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result !== "success") {
            throw new Error("API error");
        }

        const rate = data.rates[toCurrency];
        const result = amount * rate;
        document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').innerText = 'Error fetching conversion rate';
        console.error(error);
    }
}

