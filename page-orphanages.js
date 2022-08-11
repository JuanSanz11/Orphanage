//tipo de dados
//String  "" 
//Number 01 
//Object {} 
//Boolean true or false
//array[]
//create map
const map = L.map('mapid').setView([-27.212934,-49.6343481], 15)
//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)
//create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68],
    popupAnchor:[170,2]
})
//create popup overlay
const popup  = L.popup({
    closeButoon:false,
    className: 'map-popup',
    minWidth: 250,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1"class="choose-orphanage"> <img src="./public/images/arrow-white.svg" ></a>')

//create and add marker
L.marker([-27.212934,-49.6343481], {icon: icon})
.addTo(map)
    .bindPopup(popup)