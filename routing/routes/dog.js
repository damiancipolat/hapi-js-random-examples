const Joi = require('joi');
const nested = require('./nested');

//Bind routes.
const bind = (server)=>{

  //Routes with schema validation
  const routes = [{
      method:'GET',
      path:'/dog',
      handler: (request, h)=>{        
        const user = {
          firstName: 'John',
          lastName: 'Doe',
          userName: 'JohnDoe',
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
        return 'Hello Future Studio';
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
  
  server.route(routes);

  nested.bind(server)
  
};

module.exports = {
    bind
};
  