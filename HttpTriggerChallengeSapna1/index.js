module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const method = req.method;
    console.log(req)
    if (method === 'GET') {
        const productId = req.query.productId;
        const responseMessage = productId
            ? "The product name for your product id " + productId + " is Starfruit Explosion"
            : "This HTTP triggered function executed successfully. Pass a productId in the query string";
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: responseMessage
            };
    
    } else if (method === 'POST') {
        const productId = req.body && req.body.productId;
        const responseMessage = productId
            ? "The product name for your product id " + productId + " is Starfruit Explosion"
            : "This HTTP triggered function executed successfully. Pass a productId in the request body for a personalized response.";
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: responseMessage
            };   
    } else {
        context.res = {
            status: 404,
            body: "The request your are looking is not available"
        };
    }

    
}