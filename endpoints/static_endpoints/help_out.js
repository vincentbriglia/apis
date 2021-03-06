var helpOut = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.json(200, {
        message: 'Send us mail: apis@apis.is ,thanks for your interest!'
    });
    return next();
};

exports.setup = function (server) {
    server.post({
        path: '/help_out',
        version: '1.0.0'
    }, helpOut);
    server.get({
        path: '/help_out',
        version: '1.0.0'
    }, helpOut);
    server.post({
        path: '/help',
        version: '1.0.0'
    }, helpOut);
    server.get({
        path: '/help',
        version: '1.0.0'
    }, helpOut);
};
