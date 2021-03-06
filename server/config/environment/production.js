'use strict';

// Production specific configuration
// =================================
module.exports = {
  // Server IP
  ip:       process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,

  // Server port
  port:     process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

  // MongoDB connection options
  mongo: {
    uri:    process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL+process.env.OPENSHIFT_APP_NAME ||
            'mongodb://localhost/dig'
  },

  // Sequelize ORM options specific to production env
  sequelize: {
    username: 'digapp',
    password: process.env.DB_PASS || null,
    database: 'digapp_production',
    hostname: process.env.DB_HOST || null,
    options: {
      dialect: 'mysql'
    }
  },

  logfile: '/var/log/digapp.log',

  seedDB: false
};