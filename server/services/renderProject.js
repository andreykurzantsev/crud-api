"use strict";

import fetch from 'node-fetch';

class Render {
    renderMainPage(req, res) {
        fetch(`http://localhost:${process.env.PORT}/api/users`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(userData => userData.json())
            .then(response => {
                res.render("index.ejs", { users: response });
            })
            .catch(error => {
                res.status(500).json(error.message);
            });

    }
    renderUserAddPage(req, res) {
        try {
            res.status(200).render("addUser.ejs");
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    renderUserUpdatePage(req, res) {
        try {
            res.status(200).render("updateUser.ejs");
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}


export default new Render();