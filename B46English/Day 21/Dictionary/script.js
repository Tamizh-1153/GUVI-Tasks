const container=document.createElement('div')
container.classList='container'
document.body.appendChild(container)

const heading=document.createElement('h1')
heading.classList='text-center'
heading.textContent='Dictionary'
container.appendChild(heading)


const input=document.createElement('input')
input.setAttribute('type','text')

input.setAttribute('placeholder','Enter a word')
container.appendChild(input)

const button=document.createElement('button')
button.classList='search'
button.textContent='Search'
container.appendChild(button)

const row=document.createElement('div')
row.classList='row'
container.appendChild(row)


button.addEventListener('click',()=>{
row.textContent=''

const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
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
    
    const column=document.createElement('div')
    column.classList='col-sm-12 col-md-12 col-lg-12 col-xl-12'
    row.appendChild(column)

    const card=document.createElement('div')
    card.classList='card h-100 mt-5'
    column.appendChild(card)
    

    const cardHeader=document.createElement('div')
    cardHeader.classList='card-header text-center'
    card.appendChild(cardHeader)

    const cardBody=document.createElement('div')
    cardBody.classList='card-body text-center'
    card.appendChild(cardBody)

    const cardText=document.createElement('div')
    cardText.classList='card-text'
    cardText.style.whiteSpace='pre-wrap'
    cardBody.appendChild(cardText)

    const cardText1=document.createElement('div')
    cardText1.classList='card-text mt-3'
    cardText1.style.whiteSpace='pre-wrap'
    cardBody.appendChild(cardText1)
 
    const wordSelected=data[0]['word']
    cardHeader.textContent=wordSelected

    const phonetics=data[0]['phonetics'][0]['audio']
    if(phonetics){
    const audio=document.createElement('audio')
    audio.classList='audio'
    const source=document.createElement('source')
    source.setAttribute('src',`${phonetics}`)
    audio.appendChild(source)
    cardText.appendChild(audio)
    const audioButton=document.createElement('button')
    audioButton.textContent='Play audio'
    audioButton.classList='btn btn-secondary'
    cardText.appendChild(audioButton)
    audioButton.addEventListener('click',()=>{
      audio.play()
    })}

    const phoneticsText=data[0]['phonetics'][0]['text']
    if(phoneticsText){
    cardText1.textContent='Text: '+phoneticsText}

    const cardText2=document.createElement('div')
    cardText2.classList='card-text mt-3'
    cardText2.style.whiteSpace='pre-wrap'
    cardBody.appendChild(cardText2)
    
    const nounDetails1=data[0]['meanings'][0]['partOfSpeech']
    if(nounDetails1){
    cardText2.textContent='Parts of Speech: '+nounDetails1
    
    const nounDetails2=data[0]['meanings'][0]['definitions'][0]['definition']
    if(nounDetails2){cardText2.textContent+='\nDefinition: '+nounDetails2}
    const nounDetails3=data[0]['meanings'][0]['synonym']
    if(nounDetails3){cardText2.textContent+='\nSynonym: '+nounDetails3}
    const nounDetails4=data[0]['meanings'][0]['antonym']
    if(nounDetails4){cardText2.textContent+='\nAntonym: '+nounDetails4}}


    const cardText5=document.createElement('div')
    cardText5.classList='card-text mt-3'
    cardBody.appendChild(cardText5)
    const sourceUrl=data[0]['sourceUrls']
    if(sourceUrl){
      const externalLink=document.createElement('a')
      externalLink.setAttribute('href',`${sourceUrl}`)
      externalLink.textContent='Wikitionary Link'
      cardText5.appendChild(externalLink)
    }
   })
})
.catch(error => console.error(error))


