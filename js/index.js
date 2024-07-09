function loadPhones(){
    fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res=>res.json())
    .then(data => displayData(data))
}

function displayData(phones){
    const phoneContainer = document.getElementById('phone-container');
    for(const phone of phones.data){
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 m-7  shadow-xl`;
        phoneCard.innerHTML = `
        <figure>
        <img
        src="${phone.image}"
        alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
        `;
        phoneContainer.appendChild(phoneCard);
        
    }
}

loadPhones();