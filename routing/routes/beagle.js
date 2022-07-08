//Bind routes.
const bind = (server)=>{

    const routes = [{
        method:'GET',
        path:'/dog/beagle/',
        handler:(request,h)=>{
            return 'Hello beagle :)';
        }
      },{
        method:'GET',
        path:'/dog/beagle/{id}',
        handler:(request,h)=>{
  
          const {
            id
          } = request.params;
          console.log('> Params',id);
  
          return 'Hello beagle N° :) '+id;
        }
      },{
        method:'POST',
        path:'/dog/beagle',
        handler:(request,h)=>{
  
          const {
            name
          } = request.payload;
          console.log('> '+name);
  
          return name;
        }
    }];
  
    server.route(routes);
  
}

module.exports = {
    bind
};
  