const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const myplugin = {  
  register: function (server, options, next) {
    next()
  }
}

myplugin.register.attributes = {  
  name: 'myplugin',
  version: '1.0.0'
}

//Bind routes.
const bindRoutes = (server)=>{

  const routes = [{
      method:'GET',
      path:'/car',
      handler:(request,h)=>{
          return 'Hello user :)';
      }
    }];

  server.route(routes);

}

//Init server.
const init = async ()=>{
  
  try{

    //Create server.
    const server = Hapi.server({
      port:5000,
      host:'127.0.0.1'
    });

    //Bind routes.
    bindRoutes(server);

    //Listen.
    await server.start();
    console.log('> Server running on ',server.info.uri);

  } catch(error){
    console.log('> Fail on server start',error);
  }
}

process.on('unhandledRejection', (err) => {
  console.log('> Server stop, severe fail detected',err);
  process.exit(1);
});

init();