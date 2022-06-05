// чтобы конроллер не был слишком толстым всю логику мы вынесем отдельно в так называемые сервисы
const jwt = require('jsonwebtoken');

//  модель для сохранения рефреш токена в базе данных для конкретного пользователя
const tokenModel = require('../models/token-model')

// генерирует два токина токен доступа и токен рефреша
class TokenService{
    // функция генерирует два токена 
    generateTokens(payload){
        const accessToken = jwt.sign(payload,process.env.JWT_ACCESS_SECRET, {expiresIn:'30m'});
        const refreshToken = jwt.sign(payload,process.env.JWT_REFRESH_SECRET, {expiresIn:'30d'});
        return {
            accessToken,
            refreshToken,
        }

    }
    // функция для сохранения токена для пользователя
    async saveToken(userId, refreshToken){
        // сначала проверяем есть ли в базе данных данный пользователь
        const tokenData = await tokenModel.findOne({user:userId});
        // если что то нашли перезаписываем токен
        if(tokenData){
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        //  если ни чего не нашли то создаем запись в базе данных о пользователе и его токене
        const token = await tokenModel.create({user: userId})
        // возврещаем токен
        return token;
    }
}

module.exports = new TokenService();
