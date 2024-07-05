let card = document.querySelector(".card");



fetch("https://fake-json-api.mock.beeceptor.com/users")
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(items => {

        console.log(items);
        items.map(item => {
            let display = document.createElement("div");

            display.classList.add("display");

            display.innerHTML = `
            <img src=${item.photo}>
            <h4>${item.company}</h4>
             <p class="name">${item.name}</p>
            <p>${item.username}</p>
            <p>${item.email}</p>
            <p>${item.address}</p>
            <p>${item.zip}</p>
            <p>${item.state}</p>
            `


            card.appendChild(display)
        })
    })
    .catch(error => {
        console.log(error);
    })
