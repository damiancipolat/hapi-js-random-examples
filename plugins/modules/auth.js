const loginController = (request,reply)=>{

    return reply.response({
        mock:true,
        data:'AAAA'
    }).code(200);

}

const registerController = (request,reply)=>{

    return reply.response({
        mock:true,
        data:'BBBB'
    }).code(200);

}

//Create route.
const plugin = {
    pkg: require('../package.json'),
    name: 'auth-module', 
    version: '0.0.1',
    register: async function (server, options) {

        server.route([{
            method: 'GET',
            path: '/login',
            handler: loginController
        },{
            method: 'GET',
            path: '/register',
            handler: registerController
        }]);

    }
};

module.exports= {
    ...plugin
};