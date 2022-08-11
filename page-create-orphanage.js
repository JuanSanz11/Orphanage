//create Map
const map = L.map('mapid').setView([-27.212934,-49.6343481], 15)
//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map)

//create Icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor:[29, 68]
})
let marker;
//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng').value = lng;
    
    //remover icon
    marker && map.removeLayer(marker)
    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})



//adicionar o campo de fotos
function addPhotoField(){
    //pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplicar .new.images
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar se o campo esta vazio, se sim, nao adicionar ao container de fotos de imagens
    const input = newFieldContainer.children[0]
    if(input.value==""){
        return
    }
    input.value=""
    //limpar o campo antes de adicionar ao container de imagens 
   // newFieldContainer.children[0].value = ""
    //adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}
function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value=""
        return
    }
    //deletar o campo
    span.parentNode.remove();
}

//select yes or nao

function toggleSelect(event){
    //retirar a class .active
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    //colocar a class .active
    const button = event.currentTarget
    button.classList.add('active')
    //atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    //verificar sim pou nao
    input.value = button.dataset.value
}
