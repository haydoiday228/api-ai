var express = require("express");
var app = express();
var bodyParser = require('body-parser');
 
app.use(express.static("public"));
 
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.listen(3000);
 
app.get("/homepage", function(request, response)  {
    
    response.render("homePage");
});
 
app.get("/test", function(request, response)  {
    
    response.render("testPage");
});

app.post('/',function(req, res){
    console.log(req.body.queryResult);
    
    var _text = req.body.result.parameters.text;
    var speech = "";
    switch (_text) {
		case 'hi':
			speech = "Hi, Nice to meet you";
			break;

		case 'bye':
			speech = "Bye, good night";
			break;

		case 'anything':
			speech = "Yes, you can type anything here.";
			break;
		
		default:
			speech = "Sorry, I didnt get that. Please ask me something else.";
			break;
	}
    
    
    
    res.send(speech);
    
});