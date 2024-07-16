function loadPhones(searchText, isShowAll){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res=>res.json())
    .then(data => displayData(data, isShowAll))
}

const displayData = (phones,isShowAll) =>{

    const allPhones = phones.data;
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

    const load = document.getElementById("button-container");
    if(allPhones.length > 12 && !isShowAll){
        load.classList.remove('hidden');
    }
    else{
        load.classList.add('hidden');
    }

    console.log('is  showall',isShowAll);
  
    if(!isShowAll){
        phones = allPhones.slice(0,12);
    }
    else{
        phones = allPhones;
    }
    // console.log(phones);

    for(const phone of phones){
        console.log(phones);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 m-7  shadow-xl`;
        phoneCard.innerHTML = `
        <figure>
        <img
        src="${phone.image}"
        alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
              <button class="btn btn-primary">Show Details</button>
            </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
        
    }

    toggleSpinner(false);

}


const searchPhones = (isShowAll) => {
    toggleSpinner(true);
    const textArea = document.getElementById('textArea');
    const searchText = textArea.value;
    loadPhones(searchText,isShowAll);
}

const toggleSpinner =(isTrue) =>{
    const spinner = document.getElementById('spinner');
    if(isTrue){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}

const isShowAll = () =>{
    searchPhones(true);
}

