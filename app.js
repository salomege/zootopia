const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


{
	const productContainers = [...document.querySelectorAll('.product-container-div')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
}

{
    const rangein = document.querySelectorAll(".range-in input");

    const pricein = document.querySelectorAll(".price-in input");

    const progress = document.querySelector('.slider .pro');
    let priceGap = 1000;


    rangein.forEach(input =>{
        input.addEventListener("input", e =>{
            let minVal = parseInt(rangein[0].value),
            maxVal = parseInt(rangein[1].value);

           if(maxVal - minVal < priceGap){
               if(e.target.className === "range-min"){
                    rangein[0].value = maxVal - priceGap;
               }else{
                    rangein[1].value = minVal + priceGap;
               }
           } else{
                pricein[0].value = minVal;
                pricein[1].value = maxVal;
                progress.style.left = (minVal / rangein[0].max) * 100 + "%";
                progress.style.right = 100 - (maxVal / rangein[1].max) * 100 + "%";
           }
        });
    });
}




{
    function increaseCount(a, b) {
        var input = b.previousElementSibling;
        var value = parseInt(input.value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        input.value = value;
      }
      
      function decreaseCount(a, b) {
        var input = b.nextElementSibling;
        var value = parseInt(input.value, 10);
        if (value > 1) {
          value = isNaN(value) ? 0 : value;
          value--;
          input.value = value;
        }
      }
}

// {
    
//     // selecting required element
//     const element = document.querySelector(".pagination ul");
//     let totalPages = 142;
//     let page = 4;
    
//     //calling function with passing parameters and adding inside element which is ul tag
//     element.innerHTML = createPagination(totalPages, page);
//     function createPagination(totalPages, page){
//       let liTag = '';
//       let active;
//       let beforePage = page - 1;
//       let afterPage = page + 1;
//     //   if(page > 1){ //show the next button if the page value is greater than 1
//     //     liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1})"><span><i class="fas fa-angle-left"></i> Prev</span></li>`;
//     //   }
    
//       if(page > 2){ //if page value is less than 2 then add 1 after the previous button
//         liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//         // if(page > 3){ //if page value is greater than 3 then add this (...) after the first li or page
//         //   liTag += `<li class="dots"><span>...</span></li>`;
//         // }
//       }
    
//       // how many pages or li show before the current li
//       if (page == totalPages) {
//         beforePage = beforePage - 2;
//       } else if (page == totalPages - 1) {
//         beforePage = beforePage - 1;
//       }
//       // how many pages or li show after the current li
//       if (page == 1) {
//         afterPage = afterPage + 2;
//       } else if (page == 2) {
//         afterPage  = afterPage + 1;
//       }
    
//       for (var plength = beforePage; plength <= afterPage; plength++) {
//         if (plength > totalPages) { //if plength is greater than totalPage length then continue
//           continue;
//         }
//         if (plength == 0) { //if plength is 0 than add +1 in plength value
//           plength = plength + 1;
//         }
//         if(page == plength){ //if page is equal to plength than assign active string in the active variable
//           active = "active";
//         }else{ //else leave empty to the active variable
//           active = "";
//         }
//         liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
//       }
    
//       if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
//         if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
//           liTag += `<li class="dots"><span>...</span></li>`;
//         }
//         liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//       }
    
      
//       element.innerHTML = liTag; 
//       return liTag; 
//     }
