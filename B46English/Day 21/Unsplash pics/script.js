const container=document.createElement('div')
container.classList='container'
document.body.appendChild(container)

const heading=document.createElement('h1')
heading.classList='text-center mt-4 mb-5 hTitle'
heading.textContent='Pics from Unsplash'
container.appendChild(heading)


const row=document.createElement('div')
row.classList='row'
container.appendChild(row)

const url='https://api.unsplash.com/photos/?client_id=1o2Srn6Zb7Mzsv5FQIhwkJ6P5RNyJ-CJNvSb_QY91ak'

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
        column.classList='col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-3'
        row.appendChild(column)

        const card=document.createElement('div')
        card.classList='card h-100 '
        column.appendChild(card)

        const cardHeader=document.createElement('div')
        cardHeader.classList='card-header text-center fs-4'
        card.appendChild(cardHeader)

        const image=document.createElement('img')
        image.classList='card-img-top align-items-center img-fluid'
        card.appendChild(image)

        const cardBody=document.createElement('div')
        cardBody.classList='card-body text-center'
        card.appendChild(cardBody)

        const cardText=document.createElement('div')
        cardText.classList='card-text fs-5'
        cardText.style.whiteSpace='pre-wrap'
        cardBody.appendChild(cardText)

        const photographer=data[i]['user']['name']
        cardHeader.textContent=photographer

        const imageByPhotographer=data[i]['urls']['thumb']
        image.src=imageByPhotographer

        const description=data[i]['alt_description']
        cardText.textContent=description

        const download=document.createElement('a')
        download.setAttribute('href',`${data[i]['links']['download']}`)
        download.textContent="Download"
        download.classList='text-center fs-4 mb-4'
        card.appendChild(download)

    }
    
    })
  .catch(error => console.error(error));
    