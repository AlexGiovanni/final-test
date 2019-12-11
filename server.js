// import the models
//const { Applied_Job, Posted_Job, Employee, Employer } = require('./models');

const express = require('express');
const path = require('path');
var hbs = require( 'express-handlebars');
const session = require('express-session');
const bcrypt = require('bcrypt');
const loop = require('handlebars');
//var favicon = require('serve-favicon');

app = express();
app.set('port', 3002);

// setup handlebars and the view engine for res.render calls
// (more standard to use an extension like 'hbs' rather than
//  'html', but the Universiry server doesn't like other extensions)
app.set('view engine', 'html');
app.engine( 'html', hbs( {
  extname: 'html',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

// setup body parsing for form data
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up session (in-memory storage by default)
app.use(session({secret: "This is a big long secret lama string."}));

// setup static file service
app.use(express.static(path.join(__dirname, 'static')));
//setup favicon
//app.use(favicon(path.join(__dirname,'static','favicon.ico')));

//////////////////////////////////////////////////////////////////
// main entry point (index)
app.get('/home', (req,res) => 
{
	console.log(req.session.type);

	if(req.session.user)
	{
		if(req.session.type == "Employee")
		{
			res.render('home', {active: { home: true },page: "Home", user: req.session.user, type: req.session.type});
		}
		else if(req.session.type = "Employer")
		{
			res.render('employer_page', {active: { upload: true }, page: "Upload", user: req.session.user, type: req.session.type});
		}
	}
	else
	{
		res.render('home', {active: { home: true },page: "Home"});
	}
});



loop.registerHelper('if_eq', function(arg1, arg2, options) 
{
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

var server = app.listen(app.get('port'), function()
{
	console.log("Server started...")
});


