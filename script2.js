import PRCard from "./PRCard/index.js";

if (!customElements.get('ag-pr')) {
    customElements.define('ag-pr', PRCard);
}

const form = document.forms[0];
const bc = document.querySelector('ag-pr');

const formHandler = e => {
    let el = e.target;
    bc.setAttribute(el.name, el.value);
}

for (let i = 0; i < form.elements.length; i++) {
    const el = form.elements[i];
    el.value = bc.getAttribute(el.name);
    switch (el.localName) {
        case "input": el.addEventListener("input", formHandler); break;
        case "select": el.addEventListener("change", formHandler); break;
    }
}