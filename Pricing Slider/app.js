// store the variables
const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
const sliderFilled = document.querySelector(".slider-filled");
const selector = document.querySelector(".selector");
const pageViews = document.querySelector(".page-views");
const billingType = document.querySelector(".billing-type");


//fuction to covert into monthly or yearly billing

const getPrice=()=>{
    if(billingType.checked){
        const discountedPrice=slider.value * 0.75;
        sliderValue.innerHTML=discountedPrice.toLocaleString('en-us',{
            style: 'currency',
            currency: 'USD'
        });

        return;
    }

    const price=parseInt(slider.value);
    sliderValue.innerHTML=price.toLocaleString('en-us',{
        style: 'currency',
        currency: 'USD'
    });
}


//input change

slider.addEventListener('input', ()=>{
    getPrice();

    if(parseInt(slider.value)===0){
        const freeVersion = 10000;
        pageViews.innerHTML=freeVersion.toLocaleString();
    }else{
        const newValue=slider.value * 100000;
        pageViews.innerHTML=newValue.toLocaleString();
    }

    //get slider Max value
    const maxValue=slider.getAttribute('max');

    const percentage=(slider.value/maxValue) * 100;

    //fill de slider
    sliderFilled.style.width=`${percentage}%`;
    selector.style.left=`${percentage}%`;
    selector.style.transform=`translateX(-${percentage}%)`;
});

//listen for billing type input change
billingType.addEventListener('change', ()=>{
getPrice();
});
