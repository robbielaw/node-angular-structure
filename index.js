var cfg = require('_/config'),
    app = require('_/app');

app.listen(cfg.port);

console.log('**');
console.log('** Application Started');
console.log('** Port: ' + cfg.port);
console.log('**');
