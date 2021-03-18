let AWS = require('aws-sdk');
const textract = new AWS.Textract();

exports.handler = async (event,context,callback)  => {
        console.log(event.Records[0].s3.object);
        //Sample PO_.pdf
        var inputVal = event.Records[0].s3.object.key;
        inputVal = inputVal.replace('+',' ');
        console.log('in lambda 1');
        console.log(inputVal);
        var params = {
                //ClientRequestToken: '1',
                DocumentLocation: { /* required */
                    S3Object: {
                    Bucket: 'salesforceattachmentspdf',
                    Name: inputVal
                    //Version: 'STRING_VALUE'
                    }
                },
                FeatureTypes: ["TABLES","FORMS"],
                JobTag: 'SFDC',
                NotificationChannel: {
                    RoleArn: 'arn:aws:iam::682103828962:role/service-role/Lambda1-role-xg3gkk69', 
                    //SNSTopicArn: 'arn:aws:sns:us-east-1:682103828962:salesforcefiles' 
                }
        };
    console.log(params);
    textract.startDocumentAnalysis(params, function(err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
        }
        else{
            console.log('data successfully processed');
             console.dir(data);           // successful response
        }    
    });
    callback(null, {"message": "Successfully executed"});
    
}