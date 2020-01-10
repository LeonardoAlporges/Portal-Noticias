var http = require('http');

var serve =  http.createServer(function(req,res){
    var categoria = req.url;
    if(categoria == '/tecnologia')
    {
        res.end("<html><body><h1>Portal Tecnologia</body></html>");
    }else if(categoria == '/beleza')
    {
        res.end("<html><body><h1>Portal Leo</body></html>");
    }else{
        res.end("<html><body><h1>Portal</body></html>");
    }
    

});

serve.listen(3000);