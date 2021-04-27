window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code


  for(let i = 0; i < json.length ; i++){
    
    let rideDetail = json[i]

    let rideList = document.querySelector(`.rides`)

    let levelOfService 

    if(rideDetail.purpleRequested == true) {
      levelOfService = `Noober Purple`
    } else if(rideDetail.numberOfPassengers > 3) {
      levelOfService = `Noober XL`
    } else {
      levelOfService = `Noober X`
    }

    let textColor 

    if(levelOfService == `Noober Purple`) {
      textColor = `purple-500`
    } else {
      textColor = `blue-500`
    }

    let passengerGrammar
    if(rideDetail.numberOfPassengers == 1) {
      passengerGrammar = `passenger`
    } else {
      passengerGrammar = `passengers`
    }

    rideList.insertAdjacentHTML(`beforeend`,`
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-${textColor} to-${textColor}">
      <i class="fas fa-car-side"></i>
      <span>${levelOfService}</span>
    </h1>

    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${rideDetail.passengerDetails.first} ${rideDetail.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${rideDetail.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${rideDetail.numberOfPassengers} ${passengerGrammar}
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${rideDetail.pickupLocation.address}</p>
          <p>${rideDetail.pickupLocation.city}, ${rideDetail.pickupLocation.state} ${rideDetail.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${rideDetail.dropoffLocation.address}</p>
          <p>${rideDetail.dropoffLocation.city}, ${rideDetail.dropoffLocation.state} ${rideDetail.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>`
    )

  }

})