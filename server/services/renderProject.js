"use strict";


class Render {
    renderMainPage(req, res) {
        try {
            res.status(200).render("index.ejs");
        } catch (error) {
            res.status(500).json(error.message);
        }
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