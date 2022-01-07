'use strict';

import Router from 'express';
import renderProject from '../services/renderProject.js';

const renderRouter = new Router();

renderRouter.get('/', renderProject.renderMainPage);
renderRouter.get('/addUser', renderProject.renderUserAddPage);
renderRouter.get('/updateUser', renderProject.renderUserUpdatePage);

export default renderRouter;