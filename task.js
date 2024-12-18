let cases = document.querySelectorAll('span.rotator__case');
let currentCase = 0;

setInterval(() => {

        cases[currentCase].classList.remove('rotator__case_active');
        if(currentCase < cases.length -1){
        currentCase += 1;
        cases[currentCase].classList.add('rotator__case_active');
        }else{
            currentCase = 0;
            cases[currentCase].classList.add('rotator__case_active');
        }
    
}, 1000)