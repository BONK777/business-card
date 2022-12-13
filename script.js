import Card from "./Card/index.js";

if (!customElements.get('ag-cc')) {
    customElements.define('ag-cc', Card);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=3")
    .then(res => res.json())
    .then(data => {
        data.data.forEach(card => {
            let tag = document.createElement('ag-cc');
            tag.setAttribute("user", card.owner)
            tag.setAttribute("number", card.number)
            tag.setAttribute("expire", card.expiration)
            tag.setAttribute("type", card.type)
            document.body.append(tag);
        });
    })