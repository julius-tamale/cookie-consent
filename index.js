const modalSelector = document.getElementById('modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const consentForm = document.getElementById('consent-form');
const modalText = document.getElementById('modal-text')
// const acceptBtn = document.getElementById('accept-btn')

modalCloseBtn.addEventListener('dblclick', () => {
    modalSelector.style.display = 'none';
})

setTimeout( () => {
    modalSelector.style.display = 'block';
}, 2000)

consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

// acceptBtn.addEventListener('click', () => {
    
})