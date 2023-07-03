class Product {
    constructor(product, price, description, image_url, subtitle) {
        this.product = product
        this.price = price
        this.description = description
        this.image_url = image_url
        this.subtitle = subtitle
    }
}

class Item {
    constructor(product, price, qty ,description, image_url, sauce, toppings) {
        this.product = product
        this.price = price
        this.qty = qty
        this.description = description
        this.image_url = image_url
        this.subtitle = subtitle
        this.sauce = sauce
        this.toppings = toppings
    }
}
const meatloversection = document.querySelector('#meat-lovers')
const vegetarianssection = document.querySelector('#vegetarians')
const combosection = document.querySelector('#combos')
const seasoningssection = document.querySelector('#saucesandseasonings')
const beveragessection = document.querySelector('#beverages')

const Cart = []

const MeatProducts = [
    new Product('Chungchun Original', 64, 'A crispy and chewy original hotdog.', './images/Meat Hotdogs/CHUNGCUN (ORIGINAL).jpg'),
    new Product('Gamsung Potato', 84, 'A hotdog wrapped in crispy fried potatoes.', './images/Meat Hotdogs/GAMSUNG (POTATO).jpg'),
    new Product('Half Mozzarella', 84, 'A crispy hotdog with half mozzarella cheese and half sausage', './images/Meat Hotdogs/HALF MOZZARELLA.jpg'),
    new Product('Ramen Chip', 94, 'A unique crispy fried ramen hotdog.', './images/Meat Hotdogs/RAMEN CHIP.jpg'),
    new Product('Cheddar Cheese', 94, 'A hotdog with sausage wrapped in cheddar cheese.', './images/Meat Hotdogs/CHEDDAR CHEESE.jpg'),
    new Product('Sausage Rice Cake', 94, 'A hotdog with chewy Korean rice cake and sausage.', './images/Meat Hotdogs/SAUSAGE RICE CAKE.jpg'),
    new Product('Jumbo', 94, 'A hotdog with thick premium jumbo sausage.', './images/Meat Hotdogs/JUMBO.jpg'),
    new Product('Double Cheese', 114, 'A hotdog with mozzarella and cheddar cheese.', './images/Meat Hotdogs/DOUBLE CHEESE.jpg'),
    new Product('Squid Ink Cheese', 114, 'A hotdog made with squid ink batter with cheese and sausage inside.', './images/Meat Hotdogs/SQUID INK CHEESE.jpg'),
    new Product('Sweet Potato', 94, 'Rice hotdog wrapped in crispy fried Sweet Potatoes (Beef & Chicken Mixed).', './images/Meat Hotdogs/SWEET POTATO.jpg'),
    new Product('Volcano', 94, 'A hotdog made with spicy jalapeno sausage.', './images/Meat Hotdogs/VOLCANO.jpg'),
    new Product('Chicken Nugget Hotdog', 124, 'A hotdog coated with a crispy chicken nugget.', './images/Meat Hotdogs/CHICKEN NUGGET.jpg')
]

const VeggieProducts = [
    new Product('Whole Mozzarella', 74, 'A hotdog with whole mozzarella cheese without sausage.', './images/Vegan Hotdogs/WHOLE MOZZARELLA.jpg'),
    new Product('Marble Cheese', 84, 'Full Marble Cheddar Cheese with sticky rice batter.', './images/Vegan Hotdogs/MARBLE CHEESE.jpg'),
    new Product('Chocolate', 84, 'A hotdog filled with chocolate without sausage.', './images/Vegan Hotdogs/CHOCOLATE.jpg'),
    new Product('Veggie Hotdog', 94, 'A hotdog with grain meat sausage.', './images/Vegan Hotdogs/VEGGIE.jpg')
]

const comboProducts = [
    new Product('Chungchun Combo', 350, 'Gamsung Potato Hotdog, Ramen Chip Hotdog, Squid Ink Cheese Hotdog, Sweet Potato Hotdog (This combo contains Beef and Chicken)', './images/cheese-bomb-2-po9ypida0h3nuxxfly4s2ytkb7hx7s6w0lw9lsmk52.png', 'Chungchun fan\'s Favorite Pick!'),
    new Product('Cheese Bomb Combo', 320, 'Whole Mozzarella, Double Cheese Hotdog, Marble Cheese, Cheddar Cheese Hotdog (This combo contains Beef and Chicken)', './images/cheese-bomb-po9xy2gwhljawrseul3vse43z8r5hw8zws8y7zbbsm.png', 'Combo for Cheese Lovers!')
]

const Sauces = [
    new Product('Ketchup', null, null, './images/Sauces & Seasonings/KETCHUP.png'),
    new Product('Honey Mustard', null, null, './images/Sauces & Seasonings/HONEY MUSTARD.png'),
    new Product('Chipotle', null, null, './images/Sauces & Seasonings/CHIPOTLE.png'),
    new Product('BBQ', null, null, './images/Sauces & Seasonings/BBQ.png'),
    new Product('Teriyaki', null, null, './images/Sauces & Seasonings/TERIYAKI.png'),
    new Product('Sweet Mayo', null, null, './images/Sauces & Seasonings/SWEET MAYO.png'),
    new Product('Wasabi Mayo', null, null, './images/Sauces & Seasonings/WASABI MAYO.png'),
    new Product('Spicy Mayo', null, null, './images/Sauces & Seasonings/SPICY MAYO.png'),
    new Product('Sweet Chili', null, null, './images/Sauces & Seasonings/SWEET CHILI.png'),
    new Product('Hot Sauce', null, null, './images/Sauces & Seasonings/HOT SAUCE.png'),
    new Product('Sugar', null, null, './images/Sauces & Seasonings/SUGAR.png'),
    new Product('Icing Sugar', null, null, './images/Sauces & Seasonings/ICING SUGAR.png'),
    new Product('Cinnamon Sugar', null, null, './images/Sauces & Seasonings/CINNAMON SUGAR.png'),
    new Product('Butter Garlic', null, null, './images/Sauces & Seasonings/BUTTER GARLIC.png'),
    new Product('Honey Butter', null, null, './images/Sauces & Seasonings/HONEY BUTTER.png'),
    new Product('Cheddar Cheese', null, null, './images/Sauces & Seasonings/CHEDDAR CHEESE.png'),
    new Product('Parmesan', null, null, './images/Sauces & Seasonings/PARMESAN.png')
]

const beverages = [
    new Product('House Coffee', 60, 'House blend brewed ice coffee.', './images/Beverages/HOUSE COFFEE.png'),
    new Product('Pineapple Ade', 60, 'Freshly made pineapple juice.', './images/Beverages/PINEAPPLE ADE.png')
]

const addProduct = (product, price, description, image_url, parent, subtitle) => {
    const card = document.createElement('div')
    const card_img = document.createElement('img')
    const card_body = document.createElement('div')
    const card_title = document.createElement('h5')
    const card_text = document.createElement('p')
    const card_footer = document.createElement('div')
    const card_footer_text = document.createElement('p')
    const card_button = document.createElement('button')
    const card_subtitle = document.createElement('div')
    const card_heart = document.createElement('button')
    
    card_img.src = image_url
    card_title.innerText = product
    card_text.innerText = description
    card_footer_text.innerText = 'P ' + price
    card_button.innerText = 'Add'
    card_subtitle.innerText = subtitle
    
    card_subtitle.classList.add('card-subtitle', 'mt-1')
    card_button.classList.add('btn', 'btn-outline-success', 'add-btn', 'rounded-5', 'ms-2')
    card_footer_text.classList.add('card-text', 'm-0')
    card_footer.classList.add('card-footer', 'd-flex', 'justify-content-between', 'align-items-center')
    card_text.classList.add('card-text', 'mb-0')
    card_title.classList.add('card-title', 'm-0')
    card_img.classList.add('card-img-top')
    card_body.classList.add('card-body')
    card.classList.add('card', 'p-0', 'food-card')
    card_heart.classList.add('bi', 'bi-heart', 'text-danger', 'fav-btn')

    card.style.width = '18rem'
    card_button.setAttribute('data-bs-target', '#addtocardmodal')
    card_button.setAttribute('data-bs-toggle', 'modal')

    card_body.append(card_title ,card_text, card_heart)
    if (subtitle != undefined) {
        card_body.appendChild(card_subtitle)
    }
    card_footer.append(card_footer_text, card_heart ,card_button)
    card.append(card_img, card_body, card_footer)
    parent.appendChild(card)
    
}

const addSauce = (product, image_url, parent) => {
    const card = document.createElement('div')
    const card_body = document.createElement('div')
    const card_img = document.createElement('img')
    const card_title = document.createElement('h5')

    card.classList.add('card', 'p-0')
    card_body.classList.add('card-body', 'border-top')
    card_img.classList.add('card-img-top')
    card_title.classList.add('card-title', 'm-0')

    card_title.innerText = product
    card.style.width = '10rem'
    card_img.src = image_url

    card_body.appendChild(card_title)
    card.append(card_img, card_body)
    parent.append(card)
}

MeatProducts.forEach(meat => {
    addProduct(meat.product, meat.price, meat.description, meat.image_url, meatloversection)
})

VeggieProducts.forEach(veggie => {
    addProduct(veggie.product, veggie.price, veggie.description, veggie.image_url, vegetarianssection)
})

comboProducts.forEach(combo => {
    addProduct(combo.product, combo.price, combo.description, combo.image_url, combosection, combo.subtitle)
})

Sauces.forEach(sauce => {
    addSauce(sauce.product, sauce.image_url, seasoningssection)
})

beverages.forEach(drink => {
    addProduct(drink.product, drink.price, drink.description, drink.image_url, beveragessection)
})

const AddBtn = document.querySelectorAll('.add-btn')
const cartbtn = document.querySelector('#cartbtn')

cartbtn.addEventListener('mouseover', () => {
    cartbtn.classList.remove('bi-cart-check')
    cartbtn.classList.add('bi-cart-check-fill')
})

cartbtn.addEventListener('mouseout', () => {
    cartbtn.classList.remove('bi-cart-check-fill')
    cartbtn.classList.add('bi-cart-check')
})

AddBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const rootchildren = e.target.parentElement.parentElement.childNodes

        let product, price, description, img_url, subtitle
        
        rootchildren.forEach(child => {
            if (child.classList.contains('card-img-top')) {
                img_url = child.getAttribute('src').replace('jpg', 'png')
            } else if (child.classList.contains('card-body')) {
                child.childNodes.forEach(child => {
                    if (child.classList.contains('card-title')) {
                        product = child.innerText
                    } else if (child.classList.contains('card-text')) {
                        description = child.innerText
                    } else if (child.classList.contains('card-subtitle')) {
                        subtitle = child.innerText
                    }
                })
            } else if (child.classList.contains('card-footer')) {
                child.childNodes.forEach(child => {
                    if (child.classList.contains('card-text')) {
                        price = parseInt(child.innerText.replace('P', '').trim())
                    }
                })
            }
        })
        //Display product to modal
        displaytoModal(product, price, description, img_url, subtitle)
        
    })
})

const displaytoModal = (product, price, desc, img, subt) => {
    const modalheader = document.querySelector('.modal-header')
    const modaltitle = document.querySelector('.modal-title')
    const modaldescription = document.querySelector('.modal-description')
    const modalcontent = document.querySelector('.form')
    const topping = document.querySelector('.toppings')
    
    const product_img = document.createElement('img')
    const product_title = document.createElement('h5')
    const product_desc = document.createElement('p')
    const product_price = document.createElement('p')
    
    modaltitle.innerHTML = ''
    modalheader.innerHTML = ''
    modaldescription.innerHTML = ''
    modalheader.style.height = '15em'

    product_title.innerText = product
    product_desc.innerText = desc
    product_price.innerText = 'P ' + price

    product_img.style.objectFit = 'cover'
    product_price.style.fontWeight = '500'

    product_img.classList.add('rounded-3')
    product_title.classList.add('modal-title', 'mt-2', 'mb-3')
    product_desc.classList.add('modal-text', 'mb-2')
    product_price.classList.add('modal-text', 'mb-2', 'modal-price')
    modalheader.classList.add('d-flex', 'justify-content-center')

    modalheader.append(product_img)
    modaltitle.append(product_title)
    modaldescription.append(product_desc, product_price)

    if (product == 'Pineapple Ade' || product == 'House Coffee') {
        product_img.src = img
        modalcontent.style.display = 'none'
    } else if (product == 'Chungchun Combo' || product == 'Cheese Bomb Combo') {
        product_img.src = img
        modalcontent.style.display = 'block'
        topping.style.display = 'none'
    } else {
        product_img.src = img.replace('png', 'jpg')
        modalcontent.style.display = 'block'
        topping.style.display = 'block'
    }

    document.querySelectorAll('.topping').forEach(topping => {
        topping.checked = false
        topping.disabled = false
    })

    document.querySelectorAll('.sauce').forEach(sauce => {
        sauce.checked = false
        sauce.disabled = false
    })
}

const displayProduct = (product, parent) => {
    const card = document.createElement('div')
    const card_info = document.createElement('div')
    const card_body = document.createElement('div')
    const card_img = document.createElement('img')
    const product_title = document.createElement('h5')
    const description = document.createElement('p')
    const price = document.createElement('p')

    card.classList.add('card', 'p-0', 'mb-2', 'd-flex', 'flex-row')
    card_info.classList.add('card-info', 'd-flex', 'flex-column', 'w-100')
    card_body.classList.add('card-body')
    card_img.classList.add('me-1')
    product_title.classList.add('card-title')
    description.classList.add('class-text')
    price.classList.add('class-text', 'price')

    card_img.src = product.image_url.replace('jpg', 'png')
    card_img.style.maxHeight = '8em'
    card_img.style.minHeight = '6em'
    card_img.style.objectFit = 'cover'

    product_title.innerText = product.product
    description.innerText = product.description
    price.innerText = 'P ' + product.price

    card_body.append(product_title, description, price)
    card_info.appendChild(card_body)
    card.append(card_info, card_img)

    parent.appendChild(card)
}

document.querySelectorAll('.topping').forEach(topping => {
    topping.addEventListener('change', () => {
        document.querySelectorAll('.topping').forEach(currentTopping => {
            if (currentTopping !== topping) {
                currentTopping.disabled = topping.checked
            }
        })
    })
})

document.querySelector('#NoSauce').addEventListener('change', () => {
    document.querySelectorAll('.sauce').forEach(sauce => {
        if (sauce !== document.querySelector('#NoSauce')) {
            sauce.disabled = document.querySelector('#NoSauce').checked
        }
    })
})

cartbtn.addEventListener('click', e => {
    const rootParent = e.target.parentElement.parentElement

    const product = rootParent.querySelector('.modal-title').innerText
    const image = rootParent.querySelector('.modal-header img').getAttribute('src')
    const price = parseInt(rootParent.querySelector('.modal-price').innerText.replace('P', '').trim())
    const description = rootParent.querySelector('.modal-text').innerText
    const toppings = []
    const sauces = []

    rootParent.querySelectorAll('.topping').forEach(topping => {
        if (topping.checked) {
            toppings.push(topping.value)
        }
    })

    rootParent.querySelectorAll('.sauce').forEach(sauce => {
        if (sauce.checked) {
            sauces.push(sauce.value)
            console.log(sauces)
        }
    })

    displayProduct(new Product(product, price, description, image), document.querySelector('.offcanvas-items'))
    Cart.push(new Item(product, price, null, description, image, sauces, toppings))
})

const heart_btn = document.querySelectorAll('.fav-btn')
            
heart_btn.forEach(heart => {
    heart.addEventListener('click', e => {
        
        if (heart.classList.contains('bi-heart')) {
            heart.classList.remove('bi-heart')
            heart.classList.add('bi-heart-fill')
        } else {
            heart.classList.remove('bi-heart-fill')
            heart.classList.add('bi-heart')
        }
    })
})