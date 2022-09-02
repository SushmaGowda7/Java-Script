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
    const localStorageObj = localStorage;
    const localStorageKeys = Object.keys(localStorageObj)

    for (let index = 0; index < localStorageKeys.length; index++) {
        const key = localStorageKeys[index];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUsers(userDetailsObj)
        
    }
});
function showNewUsers(user)
{
    if(localStorage.getItem(user.email)){
        removeUserFromScreen(user.email);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHtml = `<li> ${user.name} - ${user.email}</li>`;
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