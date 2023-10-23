import { menuArray } from './data.js'

const container = document.getElementById('container')
const menu = document.getElementById('menu')
const order = document.getElementById('order')
const addButton = document.getElementById('add-button')
let displayOrderDetails = false
let orderItemsArr = []

function showMenu(data) {
    let result = ``
    data.map(e => 
        result += `<div class="menu-item">
            <p class="emoji">${e.emoji}</p>
            <div class="item-flex-block">
                <div class="item-title">${e.name}</div>
                <div class="item-ingredients">${e.ingredients.map(x => x).join(', ')}</div>
                <div class="item-price">$${e.price}</div>
            </div>
            <div class="add-button" data-id="${e.id}">+</div>
        </div>`
        )
    menu.innerHTML = result
}

document.addEventListener("click", function(event) {
    const id = event.target.getAttribute('data-id')
    if (event.target.classList.contains('add-button')) {
        displayOrderDetails = true
        const menuItem = menuArray.find(e => e.id === +id)
        orderItemsArr.push(menuItem)
        console.log(orderItemsArr)
        
        if (displayOrderDetails) {
            render(orderItemsArr)
        }
    }
})

function render(orderItemsArr) {
    
    let result = ``
    
    if (orderItemsArr.length === 0) {
        result = ``
    } else {
    
    result = `<h2 class="order-title">Your order</h2>`
    
        orderItemsArr.map((e, index) => 
        result += `
            <div class="order-item">
                <div class="order-title">${e.name}</div> 
                <div class="remove-item" data-id="${e.id}" data-index="${index}">remove</span></div>
                <div class="order-item-price">$${e.price}</div>
            </div>`
        )
    
    result += ` <hr class="separator-line"></hr>
            <div class="order-item">
                <div class="total-price">Total price:</div>
                <div class="order-item-price">$${orderItemsArr.reduce((total, current) => total + current.price, 0)}</div>
            </div>
    <button class="complete-order">Complete order</button>`
    }  
    
    order.innerHTML = result
    
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index')
        if (index !== -1) {
            orderItemsArr.splice(index, 1)
        }
        render(orderItemsArr)
    }
})

document.addEventListener("click", function(event) {
    if (event.target.classList.contains('complete-order')) {
        const paymentContainer = document.createElement('div')
        paymentContainer.classList.add('payment-container')
        container.append(paymentContainer)
        
        const paymentItems = document.createElement('div')
        paymentItems.classList.add('payment-items')
        paymentContainer.append(paymentItems)
        
        const paymentTitle = document.createElement('div')
        paymentTitle.classList.add('payment-title')
        paymentTitle.textContent = 'Enter card details'
        paymentItems.append(paymentTitle)
        
        const inputName = document.createElement('input')
        inputName.classList.add('input-name')
        inputName.placeholder = 'Enter your name'
        paymentItems.append(inputName)
        
        const inputCard = document.createElement('input')
        inputCard.classList.add('input-card')
        inputCard.placeholder = 'Enter card number'
        paymentItems.append(inputCard)
        
        const inputCVV = document.createElement('input')
        inputCVV.classList.add('input-cvv')
        inputCVV.type = 'password'
        inputCVV.placeholder = 'Enter CVV'
        paymentItems.append(inputCVV)
        
        const paymentBtn = document.createElement('button')
        paymentBtn.classList.add('payment-btn')
        paymentBtn.textContent = 'Pay'
        paymentItems.append(paymentBtn)
        
        
        
        
        // result = `<h3>Enter card details</h3>
        // <input type="text" placeholder="Enter your name"></input>
        // <input type="text" placeholder="Enter card number"></input>
        // <input type="password" placeholder="Enter CVV"></input>
        // `
        
    }
})
        
showMenu(menuArray)