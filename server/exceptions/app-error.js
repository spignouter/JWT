module.exports = class ApiError extends Error{
    status;
    errors;

    constructor(status, message, errors){
        super(massage);
        this.status = status;
        this.errors = errors;

    }
    static UnauthorizeError(){
        return new ApiError(401, 'Пользователь не авторизован')
    }

    static BadRequest(message, errors = []){
        return new ApiError(400, message, errors);
    }
}