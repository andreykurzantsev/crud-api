import fetch from 'node-fetch';

class Render {
    static async getUserData(url) {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    }
    renderMainPage(req, res) {
        const URLtoALLUsers = `http://localhost:${process.env.PORT}/api/users`;
        Render.getUserData(URLtoALLUsers)
            .then(response => {
                res.status(200).render('index.ejs', { users: response });
            })
            .catch(error => {
                res.status(500).json(error.message);
            });

    }
    renderUserAddPage(req, res) {
        try {
            res.status(200).render('addUser.ejs');
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    renderUserUpdatePage(req, res) {
        const URLtoUserbyId = `http://localhost:${process.env.PORT}/api/users/${req.query.id}`;
        Render.getUserData(URLtoUserbyId)
            .then(response => {
                console.log(response);
                res.status(200).render('updateUser.ejs', { user: response });
            })
            .catch(error => {
                res.status(500).json(error.message);
            });
    }
}

export default new Render();
