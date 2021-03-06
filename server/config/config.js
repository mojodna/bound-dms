const path = require('path')
const uploadDir = path.resolve(__dirname, '../../', 'static/uploads')
const publishDir = path.resolve(__dirname, '../../', 'static/publishes')

module.exports = {
  production: {
    systemHostname: process.env.HOST,
    enableHttps: process.env.HTTPS || true,
    jwtSecretKey: process.env.JWT_SECRET || 'secret_key',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
    dialect: 'mysql',
    publish: {
      directory: publishDir
    },
    uploads: {
      directory: uploadDir,
      thumbnails: {
        sizes: [
          64,
          500,
          1000
        ]
      }
    },
    mail: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
      fromName: process.env.SMTP_FROMNAME || 'Bound DMS',
      fromAddress: process.env.SMTP_FROM_ADDRESS || 'system@bounddms.com'
    }
  },
  development: {
    systemHostname: process.env.HOST || 'localhost',
    enableHttps: process.env.HTTPS || false,
    jwtSecretKey: 'secret_key',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    publish: {
      directory: publishDir
    },
    uploads: {
      directory: uploadDir,
      thumbnails: {
        sizes: [
          64,
          500,
          1000
        ]
      }
    },
    mail: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
      fromName: process.env.SMTP_FROMNAME || 'Bound DMS',
      fromAddress: process.env.SMTP_FROM_ADDRESS || 'system@bounddms.com'
    }
  },
  testing: {
    systemHostname: process.env.HOST || 'localhost',
    enableHttps: process.env.HTTPS || false,
    jwtSecretKey: 'secret_key',
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    publish: {
      directory: publishDir
    },
    uploads: {
      directory: uploadDir,
      thumbnails: {
        sizes: [
          100,
          500,
          1000
        ]
      }
    },
    mail: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: process.env.SMTP_USER,
      password: process.env.SMTP_PASSWORD,
      fromName: process.env.SMTP_FROMNAME || 'Bound DMS',
      fromAddress: process.env.SMTP_FROM_ADDRESS || 'system@bounddms.com'
    }
  }
}
