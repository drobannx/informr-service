var Hapi = require('hapi'),
    Good = require('good'),
    routes = require('./routes'),
    Basic = require('hapi-auth-basic'),
    config = require('./config/environment')(),
    server = new Hapi.Server();

server.connection({ host: 'localhost', port: 3000 });

server.register([
        {
            register: Good,
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    args: [{log: '*', response: '*'}]
                }]
            }
        }
    ], function(error) {

        server.start(function () {
            server.log('info', 'Server running at: ' + server.info.uri);
        });
});
