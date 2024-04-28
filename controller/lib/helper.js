function errorHandler(error, name, from) {
    let loggerFunction = console.log;

    loggerFunction("----------START ERROR----------");
    loggerFunction(`Error name: ${name}`);

    if (from === "axios") {
        if (error.response) {
            loggerFunction("Error response:");
            loggerFunction(error.response.data);
            loggerFunction(error.response.status);
            loggerFunction(error.response.headers);
        }
        else if (error.request) {
            loggerFunction("Error request:", error.request);
        }
        else {
            loggerFunction("Error message:", error.message);
        }
        loggerFunction(error.toJSON());
    } else {
        loggerFunction(error);
    }

    loggerFunction("----------END ERROR----------");
}

module.exports = {
    errorHandler,
}