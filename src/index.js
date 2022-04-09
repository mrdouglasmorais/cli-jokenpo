const options = require('./data/index');
const User = require('./controller/user');

let jogar = new User({ opt: options }).game();

jogar