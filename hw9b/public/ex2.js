document.getElementById("countries").addEventListener("click", e => {
    fetch("/api/", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(travelInformation)
    })
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.error(err.message);
        });

})