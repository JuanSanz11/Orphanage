const options = {
    dragging: false,
    tocuhZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const map = L.map('mapid', options).setView([-27.212934,-49.6343481], 15)
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

//create and add marker
L.marker([-27.212934,-49.6343481], {icon: icon})
.addTo(map)

function selectImage(event){
    const button = event.currentTarget
    //removar todas las clase active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove("active")
    }
    //seleccionar a image cliclada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagen
    imageContainer.src = image.src
    //adicionar a classe .active para ete botao
    button.classList.add('active')
}
