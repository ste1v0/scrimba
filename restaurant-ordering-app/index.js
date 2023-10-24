import { menuArray } from './data.js'

const container = document.getElementById('container')
const menu = document.getElementById('menu')
const order = document.getElementById('order')

let displayPaymentForm = false
let orderItemsArr = []
let paymentContainer = null

function showMenu(data) {
    let result = ``
     data.forEach(e => 
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

// Payment Container

function createPaymentContainer() {
    paymentContainer = document.createElement('div')
    paymentContainer.classList.add('payment-container')
    container.append(paymentContainer)
        
    const paymentItems = document.createElement('div')
    paymentItems.classList.add('payment-items')
    paymentContainer.append(paymentItems)
        
    const paymentTitle = document.createElement('div')
    paymentTitle.classList.add('payment-title')
    paymentTitle.textContent = 'Enter card details'
    paymentItems.append(paymentTitle)
    
    const paymentForm = document.createElement('form')
    paymentForm.classList.add('payment-form')
    paymentItems.append(paymentForm)
        
    const inputName = document.createElement('input')
    inputName.classList.add('input-name')
    inputName.placeholder = 'Enter your name'
    inputName.required = true
    paymentForm.append(inputName)
        
    const inputCard = document.createElement('input')
    inputCard.classList.add('input-card')
    inputCard.placeholder = 'Enter card number'
    inputCard.required = true
    paymentForm.append(inputCard)
        
    const inputCVV = document.createElement('input')
    inputCVV.classList.add('input-cvv')
    inputCVV.type = 'password'
    inputCVV.placeholder = 'Enter CVV'
    inputCVV.required = true
    paymentForm.append(inputCVV)
        
    const paymentBtn = document.createElement('button')
    paymentBtn.classList.add('payment-btn')
    paymentBtn.textContent = 'Pay'
    paymentForm.append(paymentBtn)
}

// Document clicks

document.addEventListener("click", function(event) {
    
    // Add item
    if (event.target.classList.contains('add-button')) {
        const id = event.target.getAttribute('data-id')
        const menuItem = menuArray.find(e => e.id === +id)
        orderItemsArr.push(menuItem)
        render(orderItemsArr)
        
    // Remove item
    } else if (event.target.classList.contains('remove-item')) {
        const index = event.target.getAttribute('data-index')
        if (index !== -1) {
            parseInt(orderItemsArr.splice(index, 1))
        }
        render(orderItemsArr)
        
    // Complete order 
    } else if (event.target.classList.contains('complete-order')) {
        displayPaymentForm = true
        if (paymentContainer) {
            paymentContainer.classList.remove('hidden')
        } else {
            createPaymentContainer()
        }
        render(orderItemsArr)
    }
})

// Submit button

document.addEventListener("submit", function(event) {
        const inputValue = document.querySelector('.input-name').value
        displayPaymentForm = false
        orderItemsArr = []
        paymentContainer.classList.add('hidden')
        render(orderItemsArr, inputValue)
        
    event.preventDefault()
})

// Render order details

function render(orderItemsArr, inputValue) {
    
    let result = ``
    
    if (orderItemsArr.length === 0) {
        result = `<div class="order-sent">Thanks, ${inputValue}! Your order is on its way</div>`
    } else {
    
    result = `<h2 class="order-title">Your order</h2>`
    
        orderItemsArr.forEach((e, index) => 
        result += `
            <div class="order-item">
                <div class="order-title">${e.name}</div> 
                <div class="remove-item" data-id="${e.id}" data-index="${index}">remove</div>
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
        
showMenu(menuArray)