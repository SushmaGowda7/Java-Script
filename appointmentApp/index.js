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
    axios.post('https://crudcrud.com/api/32d24bfcdbbb44acbe85b757cc643c5c/AppData', object)
    .then((response) => {
        showNewUsers(response.data)
    })
    .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + '<h4> Something went Wrong <?h4>'
        console.log(error)})
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/32d24bfcdbbb44acbe85b757cc643c5c/AppData')
    .then((response) => {
        console.log(response)

        for(var i = 0; i < response.data.length; i++){
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
    const childHtml = `<li id=${user._id}> ${user.name} - ${user.email}
                            <button onclick = deleteUser('${user._id}')> Delete </button>
                            <button onclick = editUserDetails('${user._id}','${user.username}', '${user.email}')> Edit </button>
                        </li>`;
    parentNode.innerHTML =  parentNode.innerHTML + childHtml;
}

function editUserDetails(username, email, phone)
{
    document.getElementById('username').value = username;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    deleteUser(email)
}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/32d24bfcdbbb44acbe85b757cc643c5c/AppData/${userId}`)
    .then((response) => {
        removeUserFromScreen(userId)
    })
    .catch((error) => console.log(error))
} 

function removeUserFromScreen(userId)
{
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(userId);
    if(childNodeToBeDeleted)
    {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}