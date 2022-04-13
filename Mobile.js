class Mobile {
    constructor(name, price, image) {
        this.id = 0;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    getHtml(){
        let html = `<div class="card">
                      <img src="${this.image}" alt="${this.image}" style="width:100%">
                      <h1>${this.name}</h1>
                      <p class="price">${this.price}</p>
                      <p><button onclick="removeProduct(${this.id})">Remove</button></p>
                      <p><button>Add to Cart</button></p>
                    </div>`;
        return html;
    }
}
