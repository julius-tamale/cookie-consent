const modalSelector = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner');
const modalChoiceBtns = document.getElementById('modal-choice-btns')
const declineBtn = document.getElementById('decline-btn')
// const acceptBtn = document.getElementById('accept-btn')

setTimeout( () => {
    modalSelector.style.display = 'inline';
}, 2000)

modalCloseBtn.addEventListener('dblclick', () => {
    modalSelector.style.display = 'none'
})

declineBtn.addEventListener('mouseenter', function(){
     modalChoiceBtns.classList.toggle('reverse')
})


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm);
    const name = consentFormData.get('fullName')


    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="uploadText">
                Uploading your data to the dark web...
            </p>
        </div>`


    setTimeout(() => {
        document.getElementById('uploadText').innerText = 'Making the sale...'
    }, 1500)

    setTimeout(() => {
        modalInner.innerHTML = `
            <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/pirate.gif">
            </div>`
        modalCloseBtn.disabled = false;
    }, 3000)
    
})