function saveTolocalStorage(event)
{
    event.preventDefault();
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const object = {
        name, 
        email, 
        phone
    }
    axios.post('https://crudcrud.com/api/199974147aa147eeb775a2bfd0a5faa2/AppData', object)
    .then((response) => {
        showNewUsers(response.data)
       // console.log(response)
    })
    .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + '<h4> Something went Wrong <?h4>'
        console.log(error)})
        
    // localStorage.setItem('object.email',JSON.stringify(object));
    // showNewUsers(object);
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/199974147aa147eeb775a2bfd0a5faa2/AppData')
    .then((response) => {
        console.log(response)

        for(var i = 0 ; i < response.data.length ; i++){
            showNewUsers(response.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
});

function showNewUsers(user)
{
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';

    if(localStorage.getItem(user.email)!== null){
        removeUserFromScreen(user.email);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHtml = `<li id=${user.email}> ${user.name} - ${user.email} - ${user.phone}</li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHtml;
}

function deleteUser(email){
    console.log(email);
    localStorage.removeItem(email);
    removeUserFromScreen(email);
} 

function removeUserFromScreen(email)
{
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById('listOfUsers');
    if(childNodeToBeDeleted)
    {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}