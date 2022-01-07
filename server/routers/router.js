'use strict';

import Router from 'express';
import renderProject from '../services/renderProject.js';

const router = new Router();

router.get('/', renderProject.renderMainPage);
router.get('/addUser', renderProject.renderUserAddPage);
router.get('/updateUser', renderProject.renderUserUpdatePage);

export default router;