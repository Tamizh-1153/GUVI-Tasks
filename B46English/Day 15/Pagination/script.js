const title=document.createElement('h1')
title.setAttribute('id','title')
title.textContent='Pagination'
document.body.appendChild(title)

const paragraph=document.createElement('p')
paragraph.setAttribute('id','description')
paragraph.textContent='Pagination with json data'
document.body.appendChild(paragraph)

const tableDiv=document.createElement('div')
tableDiv.classList='table-responsive'
document.body.appendChild(tableDiv)

const table=document.createElement('table')
table.classList='table table-bordered'
table.setAttribute('id','table')
tableDiv.appendChild(table)   

const tableHead=document.createElement('thead')
table.appendChild(tableHead)

const tableHeadRow=document.createElement('tr')
tableHead.appendChild(tableHeadRow)

const tableHeading1=document.createElement('th')
tableHeading1.setAttribute('scope','col')
tableHeading1.textContent='No.'
tableHeadRow.appendChild(tableHeading1)

const tableHeading2=document.createElement('th')
tableHeading2.setAttribute('scope','col')
tableHeading2.textContent='ID'
tableHeadRow.appendChild(tableHeading2)

const tableHeading3=document.createElement('th')
tableHeading3.setAttribute('scope','col')
tableHeading3.textContent='Name'
tableHeadRow.appendChild(tableHeading3)

const tableHeading4=document.createElement('th')
tableHeading4.setAttribute('scope','col')
tableHeading4.textContent='Email'
tableHeadRow.appendChild(tableHeading4)

const tableBody=document.createElement('tbody')
tableBody.classList='jsoutput'
table.appendChild(tableBody)

const pButtons=document.createElement('div')
pButtons.setAttribute('id','buttons')
pButtons.classList="d-flex justify-content-center"
document.body.appendChild(pButtons)

const pages=document.createElement('div')
pages.classList='pagenumbers'
pages.setAttribute('id','pagination')
pButtons.appendChild(pages)

//let url='pagination.json'
fetch('pagination.json')
.then(response=>response.json())
.then(data=>{
   const listElement = document.getElementById("list")
   const paginationElement=document.getElementById('pagination')
   let listItems=data
   let currentPage=1
   let rows=10
  
   function DisplayList(items,wrapper,rowsPerPage,page){
       page--;
       let start=rowsPerPage*page
       let end=start+rowsPerPage
       let paginatedItems=items.slice(start,end)

       let jsOutput=document.querySelector('.jsoutput')
       let jsOutputElement=''
       for(i=0;i<paginatedItems.length;i++){
         jsOutputElement+=`
                     <tr>
                        <td >${i+1}</th>
                        <td >${paginatedItems[i].id}</td>
                        <td >${paginatedItems[i].name}</td>
                        <td >${paginatedItems[i].email}</td>
                     </tr>
         `
         jsOutput.innerHTML=jsOutputElement
       }
   }
   
   function setupPagination(items,wrapper,rowsPerPage){
      wrapper.innerHTML=""
      let pageCount=Math.ceil(items.length/rowsPerPage)

         let firstButton=document.createElement('button')
         firstButton.innerText='First'
         wrapper.appendChild(firstButton)
         firstButton.addEventListener('click',()=>{
            currentPage=1
            DisplayList(listItems,listElement,rows,currentPage)
         })
      
         let previousButton=document.createElement('button')
         previousButton.innerText='Previous';
         wrapper.appendChild(previousButton)
         previousButton.addEventListener('click',()=>{       
         if(currentPage>1){
            console.log(currentPage) 
            currentPage--
            console.log(currentPage) }
         console.log(currentPage)   
         DisplayList(listItems,listElement,rows,currentPage)
         })
      
      for(let i=1;i<=pageCount;i++){
         let buttonElement=paginationButton(i,items)
         wrapper.appendChild(buttonElement)
      }

      let nextButton=document.createElement('button')
      nextButton.innerText='Next';
      wrapper.appendChild(nextButton)
      nextButton.addEventListener('click',()=>{ 
         console.log(currentPage)    
      if(currentPage<pageCount){     
         currentPage++
         
         console.log(currentPage) }
      DisplayList(listItems,listElement,rows,currentPage)
      })

      let lastButton=document.createElement('button')
      lastButton.innerText='Last'
      wrapper.appendChild(lastButton)
      lastButton.addEventListener('click',()=>{
         currentPage=pageCount
         DisplayList(listItems,listElement,rows,currentPage)
      })  
   }
      function paginationButton(page,items){
         let button=document.createElement('button')
         button.innerText=page

         if(currentPage==page){
            button.classList.add('active')
            }
         button.addEventListener('click',()=>{
         currentPage=page
         DisplayList(listItems,listElement,rows,currentPage) 
         let currentButton=document.querySelector('#pagination button.active')
         currentButton.classList.remove('active')
         button.classList.add('active')
         })
         return button
      }
   
   DisplayList(listItems,listElement,rows,currentPage)    
   setupPagination(listItems,paginationElement,rows)
})
