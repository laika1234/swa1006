module.exports = async function (context, req) {
    context.log('this is pre-env');

    const Authorization__AzureAD__ClientId = process.env.Authorization__AzureAD__ClientId;
    const responseMessage = "Authorization__AzureAD__ClientId:"+Authorization__AzureAD__ClientId;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}