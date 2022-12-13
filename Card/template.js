export default {
    render(data) {
        return `
        ${this.css()}
        ${this.html(data)}
        `
    },
    html(data) {
        return `<div class="ag-card">
        <div class="ag-card__logo"><i class="fa-brands fa-ebay"></i></i></div>
        <div class="ag-card__number">
            ${data.number.map(n => `<span>${n}</span>`).join("")}
        </div>
        <div class="ag-card__user">${data.user}</div>
        <div class="ag-card__expire">${data.expire}</div>
        <div class="ag-card__type">
            <i class="fa-brands ${data.type}"></i>
        </div>
    </div>`
    },
    css() {
        return `
        <style>
            .ag-card {
            width: 85.6mm;
            height: 53.98mm;
            border-radius: 3.18mm;
            box-sizing: border-box;
            padding: 8mm;
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: 5mm;
            align-content: space-between;
            font-size: 16pt;
            font-family: sans-serif;
        }
        
        .ag-card__logo, .ag-card__number {
            grid-column-end: span 3;
        }
        
        .ag-card__logo {
            font-size: 30pt;
        }
        
        .ag-card__number {
            display: flex;
            justify-content: space-between;
        }
        
        .ag-card__expire {
            justify-self: center;
            align-self: flex-end;
        }
        
        .ag-card__type {
            justify-self: flex-end;
            font-size: 35px;
            align-self: flex-end;
        }
        
        .ag-card__user {
            align-self: flex-end;
            font-size: 1rem;
            font-weight: bold;
        }
        </style>
        `
    }
}