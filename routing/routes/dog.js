const Joi = require('joi');
const beagleRoutes = require('./beagle');

//Bind routes.
const bind = (server)=>{

  //Routes with schema validation
  const routes = [{
      method:'GET',
      path:'/dog',
      handler: (request, h)=>{        
        const dog = {
          color: 'black/marron/white',
          name: 'Rocko',
          type: 'Beagle',
          id: 123
        };

        return user;
      }
    },{
      method: 'GET',
      path: '/dog/{name}',
      options: {
        validate: {
          params:  Joi.object({
            name: Joi.string().min(1).max(15)
          })
        }
      },
      handler: (request, reply)=>{
        return 'Hello dog '+name;
      }
    },{
      method: 'POST',
      path: '/dog',
      options: {
        validate: {
          payload:  Joi.object({
            name: Joi.string().min(1).max(15),
            surname:Joi.string().min(1).max(15)
          })
        }
      },
      handler: (request, reply)=>{
        return 'Hello new dog';
      }
    }    
  ];
  
  //Bind routes.
  server.route(routes);

  //Bind nested routes -> hapi dont provide a builtin nested routes support.
  beagleRoutes.bind(server);

};

module.exports = {
    bind
};
  