import template from "./template.js"
export default class PRCard extends HTMLElement {
    static get observedAttributes() {
        return ["logo", "email", "number", "user", "job"]
    }
    attributeChangedCallback(name, prev, val) {
        if (prev !== val) {
            console.log(name, val);
            this.innerHTML = template.render({
                number: this.number,
                user: this.user,
                email: this.email,
                job: this.job,
                logo: this.logo
            });
        }
    }
    connectedCallback() {
        this.data = {
          number: this.number,
          user: this.user,
          email: this.email,
          job: this.job,
          logo: this.logo
        }
        this.innerHTML = template.render(this.data);
    }
    get number() {
        return this.getAttribute('number')
    }
    get user() {
        return this.getAttribute('user')
    }
    get email() {
        return this.getAttribute('email')
    }
    get job() {
        return this.getAttribute('job')
    }
    get logo() {
        return this.getAttribute('logo')
    }
}