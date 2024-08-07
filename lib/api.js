// [TODO]

const { EPlanets } = require("./EPlanets");
const { hello } = require("./greet");


module.exports.helloWorld = function() {
    return hello(EPlanets.EARTH);
}

module.exports.helloMars = function() {
    return hello(EPlanets.MARS);
}

module.exports.helloSaturn = function() {
    return hello(EPlanets.SATURN);
}