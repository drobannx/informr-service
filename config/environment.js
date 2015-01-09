/* jshint process:true */

module.exports = function () {
    var environment = process.env.NODE_ENV || 'local';

    var ENV = {
        environment: environment,
        PORT: 3000
    };

    return ENV;
};
