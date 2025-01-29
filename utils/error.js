export const errorHandler = (statusCode,message)=>{//custom errorHandler function
    const error = new Error(); //created an obj of Error class of js
    error.statusCode = statusCode;
    error.message = message;
    return error;   //returning the error obj
}