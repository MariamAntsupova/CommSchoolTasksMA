const gel = document.getElementById("gel")
const usd = document.getElementById("usd");
const exchangeButton = document.querySelector(".exchange-button")
const userInputElement = document.getElementById("user-input")
const exchangeRate = 0.37 ; 


document.querySelector(".alert-button").addEventListener("click", function() {
    const userInput = userInputElement.value; 
    if (userInput.trim() !== "") {
        alert(`Your message: ${userInput} successfully sent. Thanks!`)
        window.location.reload()
    } else {
        alert("Please enter a valid email address.")
    }
});



exchangeButton.addEventListener("click", function () {
    const gelValue = parseFloat(gel.value);

    if (!isNaN(gelValue) && gelValue > 0) {
        const usdValue = (gelValue * exchangeRate).toFixed(2);
        usd.innerHTML = `$${usdValue}`;
    } else {
        alert("Please enter valid number of GEL!");
    }
});