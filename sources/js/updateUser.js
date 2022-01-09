"use strict";

const AddForm = document.querySelector('#update_user');

const putData = async (url, data) => {
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

AddForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(AddForm);
    const objData = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(objData);
    putData(`http://localhost:5000/api/users/${objData.id}`, jsonData)
        .then(userData => console.log(userData))
        .then(() => {
            alert("Data Changed Succesfuly");
            location.assign('/');
        })
        .then(() => location.assign('/'))
        .catch(() => console.log("Error"));
});