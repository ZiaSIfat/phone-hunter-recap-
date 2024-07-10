function loadPhones(searchText){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then(res=>res.json())
    .then(data => displayData(data))
}

function displayData(phones){
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = '';

  
    phones = phones.data.slice(0,12);

    for(const phone of phones){
        // console.log(phone);
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
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
        
    }
}

const searchPhones = () => {
    const textArea = document.getElementById('textArea');
    const searchText = textArea.value;
    loadPhones(searchText);
}

