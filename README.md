# OCR - Salesforce and AWS Textract

![components](https://user-images.githubusercontent.com/17177312/111612022-1562ad80-8803-11eb-9b2d-6fefe746497c.jpg)

S3CalloutUtilityController.cls - Class to submit attachment to AWS S3

Lambda1_index.js - NodeJS file to listen to file entry in AWS S3 and pass it to textract to start processing for OCR

Lambda2.zip - AWS deployment package for lamda which would listen to textract process complete and extract text from the document
