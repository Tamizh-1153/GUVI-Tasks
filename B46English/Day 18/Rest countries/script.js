const container=document.createElement('div')
container.classList='container'
document.body.appendChild(container)

const heading=document.createElement('h1')
heading.classList='text-center mb-3'
heading.setAttribute('id','title')
heading.textContent='Rest countries and OpenWeatherMap using fetch API'
container.appendChild(heading)

const row=document.createElement('div')
row.classList='row'
container.appendChild(row)

let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
    
    
    for(let i=0;i<Object.keys(data).length;i++){
        const column=document.createElement('div')
        column.classList='col-sm-6 col-md-4 col-lg-4 col-xl-4 my-3'
        row.appendChild(column)

        const card=document.createElement('div')
        card.classList='card h-100 '
        column.appendChild(card)

        const cardHeader=document.createElement('div')
        cardHeader.classList='card-header text-center fs-3'
        card.appendChild(cardHeader)

        const image=document.createElement('img')
        image.classList='card-img-top'
        card.appendChild(image)

        const cardBody=document.createElement('div')
        cardBody.classList='card-body text-center'
        card.appendChild(cardBody)

        const cardText=document.createElement('div')
        cardText.classList='card-text'
        cardText.style.whiteSpace='pre-wrap'
        cardBody.appendChild(cardText)
    
        const countryName=data[i]['name']['common']
        cardHeader.textContent=countryName

        const countriesFlags=data[i]['flags']['png']
        image.src=countriesFlags

        if(data[i]['capital']==undefined){
            cardText.textContent='Capital:'+"Not Added"
        }else{
        const countryCapital=data[i]['capital'][0]
        cardText.textContent+='Capital:'+countryCapital}

        const countryLatLon=data[i]['latlng']
        cardText.textContent+='\nLat & Long:' +countryLatLon

        const countryRegion=data[i]['region']
        cardText.textContent+='\nRegion:' +countryRegion

        const countryCode=data[i]['cca3']
        cardText.textContent+='\nCountry code:' +countryCode

        const button=document.createElement('button')
        button.classList='btn btn-primary mb-3 fs-4'
        button.textContent='Click for weather'
        card.appendChild(button)

        button.addEventListener('click',()=>{
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=1e7519d9b57a948f959ae7e5ddff3e45`)
            .then(response=>response.json())
            .then(data=>
                button.textContent=data['weather'][0]['description']
            )

        })
    }
})

