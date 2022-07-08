const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async ()=>{
  
  try{

    //Create server.
    const server = Hapi.server({
      port:5000,
      host:'127.0.0.1'
    });

    //Bind routes.
    routes.bind(server);

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