var AWS = require("aws-sdk");
/* Amplify Params - DO NOT EDIT
	API_WGCAPPAPI_GRAPHQLAPIIDOUTPUT
	API_WGCAPPAPI_USERTABLE_ARN
	API_WGCAPPAPI_USERTABLE_NAME
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    try {
        console.log('received event', event)
        // TODO implement
        AWS.config.update({
        region: "us-west-2",
        endpoint: "https://dynamodb.us-west-2.amazonaws.com"
        });
    
        var docClient = new AWS.DynamoDB.DocumentClient()
    
        var table = process.env.API_WGCAPPAPI_USERTABLE_NAME
        console.log(`trying to update table ${table}`)
        var params = {
            TableName: table,
            Item:{
                id: event.userName,
                email: event.request.userAttributes.email,
                screenName: '',
                bio: '',
                avatar: '',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        };
        console.log(params)
    
        const result = await docClient.put(params).promise()
        console.log("Added item:", JSON.stringify(result, null, 2));
        return {
            statusCode: 200,
            body: JSON.stringify('WGC Create User Finished'),
        };
    } catch (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        return {
            statusCode: 200,
            body: JSON.stringify('WGC Create User Finished'),
        }
    }  
};
