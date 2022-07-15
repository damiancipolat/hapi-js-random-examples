const Hapi = require('@hapi/hapi');
const auth = require('./modules/auth');
const status = require('./modules/health');

//Init server.
const init = async ()=>{
  
  try{

    //Create server.
    const server = Hapi.server({
      port:5000,
      host:'127.0.0.1'
    });    

    //Register plugins
    await server.register(auth, {routes: {prefix: '/auth'}});
    await server.register(status, {routes: {prefix: '/stats'}});

    //Listen.
    console.log('> Server running on ',server.info.uri);
    await server.start();    

  } catch(error){
    console.log('> Fail on server start',error);
  }

}

//Process events.
process.on('unhandledRejection', (err) => {
  console.log('> Server stop, severe fail detected',err);
  process.exit(1);
});

init();