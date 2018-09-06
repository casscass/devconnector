//module.exports way of making object avalible outsid eof this file
//dbuser: cass dbpassword: casscass1
//URI (Uniform Resource Identifier)
module.exports = {
  mongoURI: "mongodb://cass:casscass1@ds037617.mlab.com:37617/devconnector"
};

// ES6
// module export=
// (property) export=: {
//     [x: string]: any;
//     mongoURI: string;
// }

//Different keyfiles for development enviroment & production besause use different db for dev and production.
