'use strict';

const deleteData = async url => {
    const res = await fetch(url, {
        method: 'DELETE',
    });
    return await res.json();
};

const deleteBut = document.querySelectorAll('.delete-btn');
const deleteUser = () => {
    if (window.location.pathname === '/') {
        deleteBut.forEach(button => {
            button.addEventListener('click', event => {
                const id = event.target.dataset.id;
                console.log(id);
                deleteData(`http://localhost:5000/api/users/${id}`)
                    .then(() => {
                        location.reload();
                    })
                    .then(() => {
                        alert('Data Deleted succesfully');
                    })
                    .catch(() => console.log('Error'));
            });
        });

    }
};

deleteUser();
