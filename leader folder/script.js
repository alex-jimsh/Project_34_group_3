function checkCode() {
    const codeInput = document.getElementById('code-input').value;
    const popup = document.getElementById('popup');
    const pixelatedFill = document.querySelector('.pixelated-fill');
    const fullScreenMessage = document.getElementById('full-screen-message');

    // Reset loading bar
    // i dont think this worked and i dont have enough time
    pixelatedFill.style.width = '0';

    // Simulate loading with pixelated bar or not cause i am not a genuis
    // and i am doing this also at 7 am so please spare my life
    setTimeout(() => {
        pixelatedFill.style.width = '100%';

        setTimeout(() => {
            if (codeInput === '352128') {
                // Access granted weheeee
                fullScreenMessage.textContent = 'ACCESS GRANTED - Welcome to the system I see you figured the whole code out. i am impressed i can say. you have proved yourself to the higherclass.           WORTHY TO LIVE'; // You can change this text
                fullScreenMessage.classList.remove('access-denied');
                fullScreenMessage.classList.add('access-granted');
                fullScreenMessage.style.display = 'flex';
            } else {
                // Access denied
                fullScreenMessage.textContent = 'ACCESS DENIED - You shall not pass!'; // You can change this text
                fullScreenMessage.classList.remove('access-granted');
                fullScreenMessage.classList.add('access-denied');
                fullScreenMessage.style.display = 'flex';
            }
        }, 1000); // Show the result after the bar fills or not have no fucking idea

    }, 500); // Small delay before loading starts to make popie wopie for user
}
