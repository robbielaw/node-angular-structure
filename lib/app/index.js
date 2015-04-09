var // npm modules
    express   = require('express'),
    cookie    = require('cookie-parser'),
    body      = require('body-parser'),
    helmet    = require('helmet'),
    session   = require('express-session'),
    // app modules
    cfg       = require('_/config'),
    logger    = require('_/log');


var app = express();

// middleware
app.use(express.static(cfg.pubDir));
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.use(cookie());
//app.use(require('_/middleware/sessions')(cfg.redis_url, cfg.cookie_secret));
app.use(session({ secret:'cat' }));
app.use(require('./routes.js'));

app.disable('x-powered-by'); // hide the fact we are using Express
app.use(helmet.xssFilter()); // protect against XSS attacks
app.use(helmet.frameguard('deny')); // x-frame: deny
app.use(helmet.noSniff()); // stops the MIME type being displayed
app.use(helmet.ieNoOpen()); // stop users from executing downloads in our sites context
app.use(helmet.noCache()); // stops caching

// custom error middleware
app.use(require('_/middleware/notFound'));
app.use(require('_/middleware/handleError'));


module.exports = app;
