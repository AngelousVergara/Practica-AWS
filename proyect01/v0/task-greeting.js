exports.greeting = async (event) => {
    console.log("Event: ", event);

    // When using an async handler, you should return the response directly.
    return {
        message: "Greeting from the serverless function",
    };
};