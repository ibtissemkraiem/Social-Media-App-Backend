const authService = require('../services/authService');
const { successResponse, errorResponse} = require('../utils/responseHandler');



module.exports.registerUser = async (req, res) => { 
    try {
        const userData = req.body;
        const { newUser, token } = await authService.Register(userData);
        const userResponse = {
            id: newUser._id,
            username: newUser.username,
          
            email: newUser.email,
        }
        return  successResponse(res, { user: userResponse, token}, 'User created successfully', 201);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}
module.exports.loginUser = async(req,res)=>{
    try{
        const userData = req.body;
        const { user, token } = await authService.signin(userData);
        const userResponse = {
            id: user._id,
            username: user.username,
            email: user.email,
        }

        return  successResponse(res, { user: userResponse, token}, 'User logged in successfully', 200);
    } catch(err) {
        return errorResponse(res, err.message);
    }
}