const rateForm = document.querySelector('.component__form');
const pageContent = document.querySelector('.content');
const ratingButtons = document.querySelectorAll('.ratings__btn');
let rating = 0;

ratingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        rating = btn.value;
    })
})


rateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (rating == 0) {
        alert('Você precisa dar uma nota!')
    } else {
        pageContent.innerHTML = `
            <section class="component submit">
                <div class="submit__icon">
                    <img src="/images/illustration-thank-you.svg" alt="mobile icon">
                </div>

                <p class="submit__rate">You selected ${rating} out of 5</p>

                <h1 class="component__title">Thank you!</h1>
                <p class="component__text"> We appreciate you taking the time to give a rating. If you ever need more
                    support,
                    don't hesitate to get in touch!
                </p>
            </section>
        `;
    }
})
