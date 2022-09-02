function saveTolocalStorage(event)
{
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.username.value;
    const phone = event.target.phone.value;
    const object = { 
        email, 
        username,
        phone
    }
    axios.post('https://crudcrud.com/api/c7e36e6da94a4e02bdad222e5d7b3bf2/AppData', object)
    .then((response) => {
        showNewUsers(response.data)
    })
    .catch((error) => {
        document.body.innerHTML = document.body.innerHTML + '<h4> Something went Wrong <?h4>'
        console.log(error)})
}
window.addEventListener("DOMContentLoaded", () => {
    axios.get('https://crudcrud.com/api/c7e36e6da94a4e02bdad222e5d7b3bf2/AppData')
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
    document.getElementById('email').value = '';
    document.getElementById('username').value = '';
    document.getElementById('phone').value = '';

    if(localStorage.getItem(user.email)!== null){
        removeUserFromScreen(user.email);
    }
    const parentNode = document.getElementById('listOfUsers');
    const childHtml = `<li id=${user._id}>${user.username} - ${user.email}
                            <button onclick=deleteUser('${user._id}')>Delete</button>
                            <button onclick=editUserDetails('${user.email}','${user.username}','${user.phone}','${user._id}')>Edit</button>
                        </li>`
    parentNode.innerHTML =  parentNode.innerHTML + childHtml;
}

function editUserDetails(email, username, phone, userId)
{
    axios.put(`https://crudcrud.com/api/c7e36e6da94a4e02bdad222e5d7b3bf2/AppData/${userId}`)
    .then((response) => {
        document.getElementById('email').value = email;
        document.getElementById('username').value = username;
        document.getElementById('phone').value = phone;
        deleteUser(userId)
    })
    .catch((error) => console.log(error))
}

function deleteUser(userId){
    axios.delete(`https://crudcrud.com/api/c7e36e6da94a4e02bdad222e5d7b3bf2/AppData/${userId}`)
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