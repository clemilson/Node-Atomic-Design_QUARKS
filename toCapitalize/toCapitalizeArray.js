
module.exports = (arr) => arr.map(item => item.split('').reverse().pop().toUpperCase()+item.slice(1).toLowerCase())
