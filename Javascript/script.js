let day = new Date
let dayName = day.toLocaleString('en-us', {weekday: 'short'})
currentDay.innerHTML = dayName

let data =new Date().toLocaleDateString()
currentDate.innerHTML = data

let time = new Date().toLocaleTimeString()
currentTime.innerHTML = time
