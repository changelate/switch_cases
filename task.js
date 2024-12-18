let cases = document.querySelectorAll('span.rotator__case');

let currentCase = 0;

setInterval(() => {

    if(currentCase >= 0){
        cases[currentCase].classList.remove('rotator__case_active');
        if(currentCase == cases.length - 1){
            cases[6].classList.remove('rotator__case_active');
            currentCase = 0;
            cases[currentCase].classList.add('rotator__case_active');
        }else{
            currentCase += 1;
            cases[currentCase].classList.add('rotator__case_active');
            let current = currentCase - 1;
            cases[current].classList.remove('rotator__case_active')
        }
    }


}, 2000)