// чтобы конроллер не был слишком толстым всю логику мы вынесем отдельно в так называемые сервисы

//  понадобиться модель пользователя 
const UserModel = require('../models/user-model')

// хешируем пароль 
const bcrypt = require('bcrypt')
// ссылка по которой пользователь сможет подтвердить свой аккаунт
const uuid = require('uuid');

// теперь можем отправить пользователю письмо с ссылкой на почту пользователю для этого подключим маил сервис
const mailService = require('./mail-service');

//  генерируем тоекны сервиса
const tokenService = require('./token-service');

//  Импортируем DTO 
const UserDto = require('../dtos/user-dto');

class UserService{
    //  функция для регистрации пользователя
    async registration(email, password){
    //  в первую очередь убеждаемся что в базе данных нет таких записей
    const condidate = await UserModel.findOne({email})
    if (condidate){
        throw new Error(`Пользователь с почтовым адресом ${email} уже существует`)
    }

    // хешируем пароль 
    const hashPassword = await bcrypt.hash(password, 3);
    //  активацпия пользователя, пользователь будет потдверждать что почта принадлежит ему
    //  функция должна вернуть уникальную строку 
    const activationLink = uuid.v4();

    const user = await UserModel.create({email, password:hashPassword, activationLink});
    // отправка письма пользователю для подтверждения почты
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

    // на основании модели создадим объект для того что бы выкинуть не нужные поля
    const userDto = new UserDto(user);

    //  генерируем тоекны сервиса
    const tokens = tokenService.generateTokens({...userDto});

    //  рефреш токен сохроняем в базу данных
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    //  возрващаем данные
    return {...tokens, user: userDto}
}
    async activate(activationLink){
        const user = await UserModel.findOne({activationLink})
        if(!user){
            throw  new Error('Неккоректная ссылка активации')
        }
        user.isActivated = true;
        await user.save();
    }

}
module.exports = new UserService();
