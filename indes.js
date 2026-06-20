const buttonStart = document.querySelector('#tmblgrtis');
    const tagInfo = document.querySelector
    
    let counter = 0;

    buttonStart.addEventListener('click', () => {
    counter++;

    if (counter === 1) {
        console.log('clicked');
            
    } else if (counter === 2) {
        console.log('off');
    } 
});