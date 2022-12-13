import template from "./template.js"
export default class Card extends HTMLElement {
    connectedCallback() {
        this.data = {
            type: this.type,
            number: this.number,
            user: this.user,
            expire: this.expire
        }
        this.innerHTML = template.render(this.data);
        const nameTag = this.querySelector(".ag-card__user");
        nameTag.addEventListener("click", function(e){
            console.log(this)
            console.log(e.target);
            if (!this.firstElementChild) {
                let content = this.innerText;
                let inp = document.createElement("input");
                inp.type = "text";
                inp.value = content;
                this.innerHTML = "";
                this.append(inp)
                inp.focus();
                inp.addEventListener("blur", e => {
                    this.innerText = e.target.value;
                }, {once: true})
            }
            // this.innerHTML = `<input type="text" value="${content}">`
        })
    }
    get type() {
        let t = this.getAttribute('type')
        switch (t) {
            case "MasterCard": return "fa-cc-mastercard"
            case "Discover Card": return "fa-cc-discover"
            case "American Express": return "fa-cc-amex"
            default: return "fa-cc-visa"
        }
    }
    get number() {
        let num = this.getAttribute('number')
        let result = []
        let text = '';
        for (let i = 0; i < num.length; i++) {
            if (i % 4 === 0 && i != 0) {
                result.push(text);
                text = ""
            }
            text += num[i]
        }
        result.push(text)
        return result;
    }
    get expire() {
        return this.getAttribute('expire')
    }
    get user() {
        return this.getAttribute('user')
    }
}   