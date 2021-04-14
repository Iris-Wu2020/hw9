const countries = {
    name: "Iris",
    countries: [
        {
            name: "UK",
            year: 2017
        },
        {
            name: "USA",
            year: 2019
        }
    ]
};

document.getElementById("countries").addEventListener("click", e => {
    fetch("/api/countries", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(countries)
    })
        .then(response => response.text())
        .then(result => {
            document.getElementById("result").textContent = result;
        })
        .catch(err => {
            console.error(err.message);
        });

});