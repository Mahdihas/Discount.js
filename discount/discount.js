document.getElementById('submit').addEventListener('click' , function(){
   
    

    // get the value from input
    const priceInput    = document.getElementById('price-input');
    const priceInputStr = priceInput.value;
    const priceInputTaka= parseFloat(priceInputStr);

    // set the value in another text

    const yourPrice     = document.getElementById('your-price');
    const yourPriceStr  = yourPrice.innerText;
    const yourPriceTaka = parseFloat(yourPriceStr);
    const totalYourTaka = yourPrice.innerText=priceInputTaka;


   const  discountPrice    = document.getElementById('discount-price');
   
   const  discountPriceStr = discountPrice.innerText;
   const  newDiscountPrice = parseFloat(discountPriceStr);
   const Amount            =priceInputTaka*(30/100);
   const allamount         = priceInputTaka - Amount;
//    teShartPriceNumber * (30/100)
  

    

   const discountInput     = document.getElementById('discount-input');
   const discountIValue    = discountInput.value;
   if(discountIValue === "Dom"){

    const newTotalDiscount  = discountPrice.innerText=allamount;


   }
   discountInput.value = ' ';



   
    priceInput.value = ' ';






})

// document.getElementById('sub-btn').addEventListener('click',function(){
//     // step 1 get the price field value
//     const priceField = document.getElementById('price');
//     const priceString = priceField.value;
//     const price = parseFloat(priceString);
//     priceField.value = '';
//     // step 2 get the discount field value
//     const discountField = document.getElementById('discount');
//     const discountString = discountField.value;
//     const discount = parseFloat(discountString);
//     discountField.value = '';
//     // step 3 get the coupon code field
//     const couponCode = document.getElementById('coupon-code');
//     const couponCodeText = couponCode.value;
//     couponCode.value = '';
//     if(couponCodeText !== 'dom'){
//         return;
//     }
//     const lastPriceField = document.getElementById('last-price');
//     const totalDiscountPrice =price - ((price  / 100 ) * discount);
//     lastPriceField.innerText = totalDiscountPrice;

// })
