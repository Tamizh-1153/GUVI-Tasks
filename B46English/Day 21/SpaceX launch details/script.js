const container=document.createElement('div')
container.classList='container'
document.body.appendChild(container)

const heading=document.createElement('h1')
heading.classList='text-center my-4'
heading.textContent='SpaceX Rocket Launch details'
container.appendChild(heading)


const row=document.createElement('div')
row.classList='row'
container.appendChild(row)

const url='https://api.spacexdata.com/v5/launches'

function getData() {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (response.ok) {
            resolve(response.json());
            } else {
            reject('Error fetching data');
            }
        })
        .catch(error => {
            reject(error);
        });
    });
    };
    
getData()
.then(data => {
    for(let i=0;i<Object.keys(data).length;i++){
        const column=document.createElement('div')
        column.classList='col-sm-6 col-md-6 col-lg-4 col-xl-4 my-4'
        row.appendChild(column)

        const card=document.createElement('div')
        card.classList='card h-100 '
        column.appendChild(card)

        const cardHeader=document.createElement('div')
        cardHeader.classList='card-header text-center fs-4'
        card.appendChild(cardHeader)

        const image=document.createElement('img')
        image.classList='card-img-top align-items-center'
        card.appendChild(image)

        const cardBody=document.createElement('div')
        cardBody.classList='card-body text-center'
        card.appendChild(cardBody)

        const cardText=document.createElement('div')
        cardText.classList='card-text fs-6 mb-1'
        cardText.style.whiteSpace='pre-wrap'
        cardBody.appendChild(cardText)

        const rocketName=data[i]['name']
        cardHeader.textContent=rocketName

        const rocketImage=data[i]['links']['patch']['small']
        image.src=rocketImage

        const flightNumber=data[i]['flight_number']
        cardText.textContent="Flight Number: "+flightNumber

        const successStatus=data[i]['success']
        cardText.textContent+='\nSuccess: '+successStatus

        if(successStatus==false)
        {
        const failure=data[i]['failures'][0]['reason']
        console.log(failure)
        cardText.textContent+='\nFailure due to: '+failure
        
        const failureDetails=data[i]['details']
        cardText.textContent+='\nFailure details: '+failureDetails
        }

        const webcast=document.createElement('a')
        webcast.setAttribute('href',`${data[i]['links']['webcast']}`)
        webcast.textContent+='\nLaunch Video'
        webcast.classList='text-center mt-2 mb-2'
        card.appendChild(webcast)

        const article=document.createElement('a')
        article.setAttribute('href',`${data[i]['links']['article']}`)
        article.textContent+='\nArticle'
        article.classList='text-center mt-2 mb-2'
        card.appendChild(article)

        const wikipedia=document.createElement('a')
        wikipedia.setAttribute('href',`${data[i]['links']['wikipedia']}`)
        wikipedia.textContent+='\nWikipedia'
        wikipedia.classList='text-center mt-2 mb-2'
        card.appendChild(wikipedia)

    }
    
    })
  .catch(error => console.error(error))
    