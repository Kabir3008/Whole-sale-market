const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getUserProfile, updateProfile, updatePassword, resetPassword, logout, allUsers, forgotPassword } = require('../controllers/authController');

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')


router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/password/forgot').post(forgotPassword);
router.route('/password/reset/:token').put(resetPassword);
router.route('/logout').get(logout);
router.route('/me').get(isAuthenticatedUser, getUserProfile); //its a protected route.cz user need to login first to see his profile. 
router.route('/password/update').put(isAuthenticatedUser, updatePassword); //user password update korte chaile
router.route('/me/update').put(isAuthenticatedUser, updateProfile);//user profile update korte chaile


router.route('/admin/users').get(isAuthenticatedUser, authorizeRoles('admin'), allUsers); //only for admin to access users

module.exports = router;

