class product {
    constructor(product, price, description, image_url) {
        this.product = product
        this.price = price
        this.description = description
        this.image_url = image_url
    }
}

const meatloversection = document.querySelector('#meat-lovers')

const MeatProducts = [
    new product('Chungchun Original', 64, 'A crispy and chewy origina hotdog.', './images/Meat Hotdogs/CHUNGCUN (ORIGINAL).jpg'),
    new product('Gamsung Potato', 64, 'A hotdog wrapped in crispy fried potatoes.', './images/Meat Hotdogs/GAMSUNG (POTATO).jpg'),
    new product('Half Mozzarella', 64, 'A crispy hotdog with half mozzarella cheese and half sausage', './images/Meat Hotdogs/HALF MOZZARELLA.jpg'),

]

const addProductMeatLover = (product, price, description, image_url, parent) => {
    const card = document.createElement('div')
    const card_img = document.createElement('img')
    const card_body = document.createElement('div')
    const card_title = document.createElement('h5')
    const card_text = document.createElement('p')
    const card_footer = document.createElement('div')
    const card_footer_text = document.createElement('p')
    const card_button = document.createElement('button')
    
    card_img.src = image_url
    
    card_title.innerText = product
    card_text.innerText = description
    card_footer_text.innerText = 'P ' + price
    card_button.innerText = 'Add'

    card_button.classList.add('btn', 'btn-outline-dark', 'add-btn')
    card_footer_text.classList.add('card-text', 'm-0')
    card_footer.classList.add('card-footer', 'd-flex', 'justify-content-between', 'align-items-center')
    card_text.classList.add('card-text')
    card_title.classList.add('card-title', 'm-0')
    card_img.classList.add('card-img-top')
    card_body.classList.add('card-body')
    card.classList.add('card', 'p-0')

    card.style.width = '18rem'

    card_body.append(card_title, card_text)
    card_footer.append(card_footer_text, card_button)
    card.append(card_img, card_body, card_footer)
    parent.appendChild(card)
    
}

MeatProducts.forEach((meatProduct) => {
    addProductMeatLover(meatProduct.product, meatProduct.price, meatProduct.description, meatProduct.image_url, meatloversection)
})

const AddBtn = document.querySelectorAll('.add-btn')

AddBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const root = e.target.parentElement.parentElement
        //addtoCart()

        console.log(root)
    })
})