const healthController = (request,reply)=>{

    return reply.response({
        mock:true,
        data:'AAAA'
    }).code(200);

}

const liveController = (request,reply)=>{

    return reply.response({
        mock:true,
        data:'BBBB'
    }).code(200);

}

//Create route.
const plugin = {
    pkg: require('../package.json'),
    name: 'status-module', 
    version: '0.0.1',
    register: async function (server, options) {

        server.route([{
            method: 'GET',
            path: '/health',
            handler: healthController
        },{
            method: 'GET',
            path: '/live',
            handler: liveController
        }]);

    }
};

module.exports= {
    ...plugin
};