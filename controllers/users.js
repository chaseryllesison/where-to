module.exports.loginForm = (req,res) => {
    res.render('users/login');
}

module.exports.registrationForm = (req, res) => {
    res.render('users/register');
}