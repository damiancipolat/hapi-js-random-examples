const bind = (server)=>{

    server.route({
        method:'GET',
        path:'/test',
        handler:(request,h)=>{
            return 'Hello world :)';
        }
    });

};

module.exports={
    bind
};