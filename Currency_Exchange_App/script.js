const amount = document.querySelector("#amount");
const dropdowns = document.querySelectorAll(".dropdown select");
const flag_img = document.querySelectorAll(".select-container img");
const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");
let from_currency='usd';
let to_currency='inr';

const updateFlag = (select) => {
    select.addEventListener("change", () => {
        let countryCode = countryList[select.value];
        const flag_url = `https://flagsapi.com/${countryCode}/flat/64.png`;
        if(select.name==="from")
            flag_img[0].src = flag_url;
        else
            flag_img[1].src = flag_url;
    });
}

const exchangeRate = async (from_currency, to_currency) => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from_currency}.json`
    const response = await fetch(url);
    let data = await response.json();
    rate = data[from_currency][to_currency];
    let finalAmt = (amount.value*rate).toFixed(2);
    msg.innerText = `${amount.value} ${from_currency.toUpperCase()} = ${finalAmt} ${to_currency.toUpperCase() }`
}

const userChoice = async (select) => {
    await select.addEventListener("change", () => {
        if(select.name==='from')
            from_currency = select.value.toLowerCase();
        else
            to_currency = select.value.toLowerCase();
    });
   
}

for (let select of dropdowns) {
    for (let currCode of Object.keys(countryList)) {
        newOption = document.createElement("option");
        newOption.value = currCode;
        newOption.innerText = currCode;
        select.append(newOption);
    }

    updateFlag(select); 
    userChoice(select);

}
dropdowns[0].value = 'USD';
dropdowns[1].value = 'INR';

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    exchangeRate(from_currency, to_currency);
})

