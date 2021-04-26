// We pass in a function as parameter
// We will then execute the function passed in, catching any errors
module.exports = func => {
    return (req, res, next) => {
        func(req, res, next).catch(next);
    }
}