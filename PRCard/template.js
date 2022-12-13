export default {
    render(data) {
        return `
        ${this.css()}
        ${this.html(data)}
        `
    },
    html(data) {
        return `<div class="pr-card">
                    <div class="pr-card__logo"><i class="fa-brands fa-${data.logo}"></i></div>
                    <div class="fz pr-card__user">${data.user}</div>
                    <div class="fz pr-card__job">${data.job}</div>
                    <div class="fz phone">${data.number}</div>
                    <div class="fz email">${data.email}</div>
                </div>`
    },
    css() {
        return `
        <style>
            .pr-card {
                width: 85.6mm;
                height: 53.98mm;
                border-radius: 3.18mm;
                box-sizing: border-box;
                padding: 5mm;
                display: grid;
                grid-template-columns: repeat(1, auto);
                gap: 3mm;
                font-family: sans-serif;
                background: linear-gradient(75deg, royalblue, rosybrown);
                color: ghostwhite;
            }
            .pr-card__logo {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 25pt;
            }
            .fz {
                font-size: 20px;
            }
            .pr-card__job, .email {
                display: flex;
                justify-content: flex-end;
                color: beige;
            }
        </style>
        `
    }
}