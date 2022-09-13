const form = document.getElementById('form');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');
const listItems = document.getElementById('listitems');

window.addEventListener('DOMContentLoaded', () => {
  axios.get('https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData')
  .then((res) => {
    res.data.forEach(element => {
      showData(element);
    })
  })
  .catch((err) => console.log(err));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(amount.value !=='' && description.value !==''){
    const object ={
      amount: amount.value,
      description: description.value,
      category: category.value
    }
    const id =object.amount+object.description+object.category;
    
    // checking for duplicates
    axios.get('https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData')
    .then((res) => {
      res.data.forEach(element => {
        const idCeck =element.amount+element.description+element.category;
        if(id === idCeck){
          deleteDataFromScreen(id);
          axios.delete(`https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData/${element._id}`)
          .then((res) => {
            console.log(`deleted id: ${element._id}`)
          })
          .catch((err) => console.log(err))
        }
      });
      
      showData(object)
      axios.post('https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData',object)
        .then((res) => {
          console.log('successfull')
        })
        .catch((err) => console.log(err))
    })
    .catch(err=>{console.log(err)})
  }
});

listItems.addEventListener('click', (e) => {
  if(e.target.className === 'delete'){
    const id = e.target.parentElement.id;
    deleteDataFromScreen(id);
    deleteDataFromServer(id);
  }
  if(e.target.className === 'edit'){
    const id = e.target.parentElement.id;
    axios.get('https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData')
    .then((res) => {
      res.data.forEach(element => {
          const idCeck =element.amount+element.description+element.category;
      if(id === idCeck){
        amount.value = element.amount;
        description.value = element.description;
        category.value = element.category;
      }
      })
    })
    .catch((err) => console.log(err))
    deleteDataFromScreen(id);
    deleteDataFromServer(id);
  }
});

//show Expense based on object value
function showData(object){
  const li=document.createElement('li');
  li.id=`${object.amount}${object.description}${object.category}`;
  const textNode=document.createTextNode(`Spent ${object.amount} rupees for ${object.category} (${object.description})  `);
  li.appendChild(textNode);

  const edit=document.createElement('button');
  edit.className='edit';
  edit.innerText='Edit';
  edit.setAttribute('type','button');
  edit.style.backgroundColor = 'green';
  edit.style.color = 'white';
  edit.style.border='none';
  li.appendChild(edit);

  const del=document.createElement('button');
  del.className='delete';
  del.innerText='Delete';
  del.setAttribute('type','button');
  del.style.backgroundColor = 'red';
  del.style.color = 'white';
  del.style.border='none';
  li.appendChild(del);
  
  listItems.append(li);
}

//deletes from screen
function deleteDataFromScreen(id){
  const del=document.getElementById(id);
  del.remove();
}

//deletes from server
function deleteDataFromServer(id){
  axios.get('https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData')
  .then((res)=>{
      res.data.forEach(element => {
          const idCeck =element.amount+element.description+element.category;
          if(id === idCeck){
              axios.delete(`https://crudcrud.com/api/34ccb3554f2f4322b17e75edb9c05f96/expenseData/${element._id}`)
              .then((res)=>console.log(`Deleted id:${element._id}`))
              .catch(err=>console.log(err))
            }
       })
   })
  .catch(err=>console.log(err))
}
