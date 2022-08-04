'use strict';
let routes = [] , swagger = [] , swaggerSchemas = [];

if(process.env.ADMIN_ROUTES == 'true'){

    routes = [...routes, ...require('./admin/').routes]

}

if(process.env.USER_ROUTES == 'true'){

    routes = [...routes, ...require('./user/').routes]

}

module.exports = {
    routes,
    swagger,
    swaggerSchemas
}