console.log('client side javascript is loaded')

// fetch('http://puzzle.mead.io/puzzle').then((response) =>{
//     response.json().then((data) => {
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')



weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()


    const location = search.value
    console.log(location)
    messageOne.textContent = 'Loading.....'
    messageTwo.textContent = ''
    fetch('/weather?address='+location).then((response) =>{
    response.json().then((data)=>{
        if (data.error) {
            messageOne.textContent = data.error
            console.log(data.error)
        } else{
            messageOne.textContent = data.location
            console.log(data.location)
            messageTwo.textContent = data.forecast
            console.log(data.forecast)
        }
    })
})
})