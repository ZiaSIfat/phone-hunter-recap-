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
              <button onclick="handlePhoneDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
        
    }

    toggleSpinner(false);

}

const handlePhoneDetail = (id) =>{
    console.log('clicked',id);
    fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then(res => res.json())
    .then(data =>displayDetail(data) )

    
}

const displayDetail = (phones) =>{
    const phone = phones.data;
    console.log(phone);
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerText = phone.name;
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = `
    <img src="${phone.image}" alt="">
    <h4>GPS:<span> ${phone.others?.GPS ? phone.others.GPS : 'NO GPS'}</span></h4>
    <p>Memory: ${phone?.mainFeatures?.memory}</p>
    <p>Display: ${phone?.mainFeatures?.displaySize}</p>
    <p>Storage: ${phone?.mainFeatures?.storage}</p>
    `;
    show_detail.showModal();

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

