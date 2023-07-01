class product {
    constructor(product, price, description, image_url, subtitle) {
        this.product = product
        this.price = price
        this.description = description
        this.image_url = image_url
        this.subtitle = subtitle
    }
}

const meatloversection = document.querySelector('#meat-lovers')
const vegetarianssection = document.querySelector('#vegetarians')
const combosection = document.querySelector('#combos')
const seasoningssection = document.querySelector('#saucesandseasonings')
const beveragessection = document.querySelector('#beverages')

const MeatProducts = [
    new product('Chungchun Original', 64, 'A crispy and chewy original hotdog.', './images/Meat Hotdogs/CHUNGCUN (ORIGINAL).jpg'),
    new product('Gamsung Potato', 84, 'A hotdog wrapped in crispy fried potatoes.', './images/Meat Hotdogs/GAMSUNG (POTATO).jpg'),
    new product('Half Mozzarella', 84, 'A crispy hotdog with half mozzarella cheese and half sausage', './images/Meat Hotdogs/HALF MOZZARELLA.jpg'),
    new product('Ramen Chip', 94, 'A unique crispy fried ramen hotdog.', './images/Meat Hotdogs/RAMEN CHIP.jpg'),
    new product('Cheddar Cheese', 94, 'A hotdog with sausage wrapped in cheddar cheese.', './images/Meat Hotdogs/CHEDDAR CHEESE.jpg'),
    new product('Sausage Rice Cake', 94, 'A hotdog with chewy Korean rice cake and sausage.', './images/Meat Hotdogs/SAUSAGE RICE CAKE.jpg'),
    new product('Jumbo', 94, 'A hotdog with thick premium jumbo sausage.', './images/Meat Hotdogs/JUMBO.jpg'),
    new product('Double Cheese', 114, 'A hotdog with mozzarella and cheddar cheese.', './images/Meat Hotdogs/DOUBLE CHEESE.jpg'),
    new product('Squid Ink Cheese', 114, 'A hotdog made with squid ink batter with cheese and sausage inside.', './images/Meat Hotdogs/SQUID INK CHEESE.jpg'),
    new product('Sweet Potato', 94, 'Rice hotdog wrapped in crispy fried Sweet Potatoes (Beef & Chicken Mixed).', './images/Meat Hotdogs/SWEET POTATO.jpg'),
    new product('Volcano', 94, 'A hotdog made with spicy jalapeno sausage.', './images/Meat Hotdogs/VOLCANO.jpg'),
    new product('Chicken Nugget Hotdog', 124, 'A hotdog coated with a crispy chicken nugget.', './images/Meat Hotdogs/CHICKEN NUGGET.jpg')
]

const VeggieProducts = [
    new product('Whole Mozzarella', 74, 'A hotdog with whole mozzarella cheese without sausage.', './images/Vegan Hotdogs/WHOLE MOZZARELLA.jpg'),
    new product('Marble Cheese', 84, 'Full Marble Cheddar Cheese with sticky rice batter.', './images/Vegan Hotdogs/MARBLE CHEESE.jpg'),
    new product('Chocolate', 84, 'A hotdog filled with chocolate without sausage.', './images/Vegan Hotdogs/CHOCOLATE.jpg'),
    new product('Veggie Hotdog', 94, 'A hotdog with grain meat sausage', './images/Vegan Hotdogs/VEGGIE.jpg')
]

const comboProducts = [
    new product('Chungchun Combo', 350, 'Gamsung Potato Hotdog, Ramen Chip Hotdog, Squid Ink Cheese Hotdog, Sweet Potato Hotdog (This combo contains Beef and Chicken)', './images/cheese-bomb-2-po9ypida0h3nuxxfly4s2ytkb7hx7s6w0lw9lsmk52.png', 'Chungchun fan\'s Favorite Pick!'),
    new product('Cheese Bomb Combo', 320, 'Whole Mozzarella, Double Cheese Hotdog, Marble Cheese, Cheddar Cheese Hotdog (This combo contains Beef and Chicken)', './images/cheese-bomb-po9xy2gwhljawrseul3vse43z8r5hw8zws8y7zbbsm.png', 'Combo for Cheese Lovers!')
]

const Sauces = [
    new product('Ketchup', null, null, './images/Sauces & Seasonings/KETCHUP.PNG'),
    new product('Honey Mustard', null, null, './images/Sauces & Seasonings/HONEY MUSTARD.PNG'),
    new product('Chipotle', null, null, './images/Sauces & Seasonings/CHIPOTLE.PNG'),
    new product('BBQ', null, null, './images/Sauces & Seasonings/BBQ.PNG'),
    new product('Teriyaki', null, null, './images/Sauces & Seasonings/TERIYAKI.PNG'),
    new product('Sweet Mayo', null, null, './images/Sauces & Seasonings/SWEET MAYO.PNG'),
    new product('Wasabi Mayo', null, null, './images/Sauces & Seasonings/WASABI MAYO.PNG'),
    new product('Spicy Mayo', null, null, './images/Sauces & Seasonings/SPICY MAYO.PNG'),
    new product('Sweet Chili', null, null, './images/Sauces & Seasonings/SWEET CHILI.PNG'),
    new product('Hot Sauce', null, null, './images/Sauces & Seasonings/HOT SAUCE.PNG'),
    new product('Sugar', null, null, './images/Sauces & Seasonings/SUGAR.PNG'),
    new product('Icing Sugar', null, null, './images/Sauces & Seasonings/ICING SUGAR.PNG'),
    new product('Cinnamon Sugar', null, null, './images/Sauces & Seasonings/CINNAMON SUGAR.PNG'),
    new product('Butter Garlic', null, null, './images/Sauces & Seasonings/BUTTER GARLIC.PNG'),
    new product('Honey Butter', null, null, './images/Sauces & Seasonings/HONEY BUTTER.PNG'),
    new product('Cheddar Cheese', null, null, './images/Sauces & Seasonings/CHEDDAR CHEESE.PNG'),
    new product('Parmesan', null, null, './images/Sauces & Seasonings/PARMESAN.PNG')
]

const beverages = [
    new product('House Coffee', 60, 'House blend brewed ice coffee.', './images/Beverages/HOUSE COFFEE.png'),
    new product('Pineapple Ade', 60, 'Freshly made pineapple juice.', './images/Beverages/PINEAPPLE ADE.png')
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
    
    card_img.src = image_url
    card_title.innerText = product
    card_text.innerText = description
    card_footer_text.innerText = 'P ' + price
    card_button.innerText = 'Add'
    card_subtitle.innerText = subtitle

    card_subtitle.classList.add('card-subtitle', 'mt-1')
    card_button.classList.add('btn', 'btn-outline-dark', 'add-btn', 'rounded-5')
    card_footer_text.classList.add('card-text', 'm-0')
    card_footer.classList.add('card-footer', 'd-flex', 'justify-content-between', 'align-items-center')
    card_text.classList.add('card-text')
    card_title.classList.add('card-title', 'm-0')
    card_img.classList.add('card-img-top')
    card_body.classList.add('card-body')
    card.classList.add('card', 'p-0')

    card.style.width = '18rem'

    card_body.append(card_title, card_text)
    if (subtitle != undefined) {
        card_body.appendChild(card_subtitle)
    }
    card_footer.append(card_footer_text, card_button)
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

AddBtn.forEach(btn => {
    btn.addEventListener('click', e => {
        const root = e.target.parentElement.parentElement
        //addtoCart()

        console.log(root)
    })
})
