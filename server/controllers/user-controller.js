const userService = require("../service/user-service");

// есть адреса (маршруты) в папки router, тепрь нужно зделать функции которые будут вызываться по запросу адреса (мршрута)
class UserController {
    async registration(req, res, next){
        try{
            const {email, password} = req.body;
            const userDate = await userService.registration(email,password);
            res.cookie('refreshToken', userDate.refreshToken, {maxAge: 30 *24 * 60 * 60 * 1000, httpOnly: true});
            return res.json(userDate);
        }catch(e){
            console.log(e);
        }

    }

    async login(req, res, next){
        try{

        }catch(e){
            
        }

    }

    async logout(req, res, next){
        try{

        }catch(e){
            
        }

    }

    async activate(req, res, next){
        try{
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        }catch(e){
            console.log(e);
        }

    }

    async refresh(req, res, next){
        try{

        }catch(e){
            
        }

    }

    async getUsers(req, res, next){
        try{
            res.json(['123', '456']);
        }catch(e){
            
        }

    }
}

module.exports = new UserController();

