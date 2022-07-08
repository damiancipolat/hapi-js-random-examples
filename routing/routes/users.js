//Bind routes.
const bind = (server)=>{

    const routes = [{
        method:'GET',
        path:'/user',
        handler:(request,h)=>{
            return 'Hello user :)';
        }
      },{
        method:'GET',
        path:'/user/{id}',
        handler:(request,h)=>{
  
          const {
            id
          } = request.params;
          console.log('> Params',id);
  
          return 'Hello world :) '+id;
        }
      },{
        method:'POST',
        path:'/user',
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
  