document.addEventListener('DOMContentLoaded', function () {
   
const loweroffer = document.getElementById('loweroffer');
    document.addEventListener('scroll', function () {
        let scrolled = window.scrollY;
            console.log(scrolled);
            if(scrolled<220){
              loweroffer.classList.add('d-none');
            }
            else{
                loweroffer.classList.remove('d-none');
            }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('click', () => {
            item.classList.toggle('active');
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            question.querySelector('.toggle-icon').innerText = item.classList.contains('active') ? '-' : '+';
        });
    });
    let remainingTime = 15 * 60; // in seconds

    // Function to update the timer every second
    function updateTimer() {
        const timerElement = document.querySelector('.set-time');
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        // Display the updated time
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        // Decrease the remaining time
        remainingTime--;

        // Stop the timer when it reaches 0
        if (remainingTime < 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Expired';
        }
    }

    // Call the updateTimer function every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Call the updateTimer function once on page load
    updateTimer();
});