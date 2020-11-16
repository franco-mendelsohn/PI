module.exports = {
  "development": {
    "username": "root",
    // "password": null,  //LAUTI sino te anda capaz sea por esto, en tu caso seria null
    "password": 'root',
    "database": "trabajoprogra2",
    "host": "127.0.0.1",
    // "port": '3306',    //vos tenes otror
    "port": '8889',
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": 'root',
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": 'root',
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
};
