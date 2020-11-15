module.exports = {
  "development": {
    "username": "root",
    "password": "root",  //LAUTI sino te anda capaz sea por esto, en tu caso seria null
    "database": "trabajoprogra2",
    "host": "127.0.0.1",
    "port": '8889',    //vos tenes otror
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
};
