public class S3CalloutUtilityController {
    
    public static void sendAttachmentToS3(String fileName){
        Attachment att = new Attachment();
        
        att = [SELECT body from Attachment where Name=:fileName Limit 1];
        
        HttpRequest req = new HttpRequest();
        req.setMethod('PUT');
        req.setHeader('Content-Type','application/octet-stream');
        req.setEndpoint('callout:AWS/salesforceattachmentspdf/'+fileName);        
        req.setBodyAsBlob(att.body);
        
        Http h = new Http();
        HttpResponse res = h.send(req); 
        system.debug(res);
        system.debug(res.getBody());
    }
}