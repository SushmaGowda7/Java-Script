const form = document.getElementById('form');
const amount = document.getElementById('amount');
const description = document.getElementById('description');
const category = document.getElementById('category');
const listItems = document.getElementById('list-items');

window.addEventListener('DOMContentLoaded', () => {
  axios.get('https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData')
  .then((res) => {
    res.data.forEach(element => {
      showData(element);
    });
  })
  .catch((err) => console.log(err));
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(amount.value !== '' && description.value !== ''){
    const object ={
      amount: amount.value,
      description: description.value,
      category: category.value
    }
    const id = object.amount + object.description + object.category;
    
    // checking for duplicates
    axios.get('https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData')
    .then((res) => {
      res.data.forEach(element => {
        const idCeck = element.amount + element.description + element.category;
        if(id === idCeck){
          deleteExpenseFromScreen(id);
          axios.delete(`https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData/${element._id}`)
          .then((res) => {
            console.log(`deleted id: ${element._id}`)
          })
          .catch((err) => console.log(err))
        }
      });

      showData(object);
        axios.post('https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData', object)
        .then((res) => console.log('successfull'))
        .catch((err) => console.log(err))
    })
  }
})

listItems.addEventListener('çlick', (e) => {
  if(e.target.className === 'delete'){
    const id = e.target.parentElement.id;
    deleteExpenseFromScreen(id);
    deleteExpenseFromServer(id);
  }
  if(e.target.className === 'edit'){
    const id = e.target.parentElement.id;
    axios.get('https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData')
    .then((res) => {
      res.data.forEach(element => {
      const idCeck = element.amount + element.description + element.category;
      if(id === idCeck){
        amount.value = element.amount;
        description.value = element.description;
        category.value = element.category;
      }
      })
    })
    .catch((err) => console.log(err));
    deleteExpenseFromScreen(id);
    deleteExpenseFromServer(id)
  }
})

// const childHtml = `<li id=${user._id}> ${user.username} - ${user.email}
// <button onclick=deleteUser('${user._id}')>Delete</button>
// <button onclick=editUserDetails('${user.email}','${user.username}','${user.phone}','${user._id}')>Edit</button>
// </li>`
//  parentNode.innerHTML =  parentNode.innerHTML + childHtml;
//show Expense based on object value
function showData(object){
  const li=document.createElement('li');
  li.id=`${object.amount}${object.description}${object.category}`;
  const textNode = document.createTextNode(`${object.amount} rupees for ${object.category} ${object.description}  `);
  li.appendChild(textNode);

  const edit=document.createElement('button');
  edit.className='edit';
  edit.innerText='Edit Expense';
  edit.setAttribute('type','button');
  li.appendChild(edit);


  const del=document.createElement('button');
  del.className='delete';
  del.innerText='Delete';
  del.setAttribute('type','button');
  li.appendChild(del);

  
  listItems.append(li);

}
//deletes from screen
function deleteExpenseFromScreen(id){
  const del=document.getElementById(id);
  listItems.removeChild(del);
  //del.remove();
}

//deletes from server
function deleteExpenseFromServer(idCeck){
  axios.get('https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData')
  .then((res)=>{
      res.data.forEach(element => {
          const idCeck = element.amount + element.description + element.category;
          if(id === idCeck){
              axios.delete(`https://crudcrud.com/api/54e59f8c14d042918a51d6e55542577b/expenseData/${element._id}`)
              .then((res)=>console.log(`Deleted id:${element._id}`))
              .catch(error=>console.log(error))
            }
       });
   })
  .catch(error=>console.log(error))
}
