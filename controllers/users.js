const User = require('../models/user');

module.exports.loginForm = (req,res) => {
    res.render('users/login');
}

module.exports.registrationForm = (req, res) => {
    res.render('users/register');
}

module.exports.registerUser = async (req, res) => {
    try {
        const { email, username, firstName, lastName, password } = req.body;
        const user = new User({ email, username, firstName, lastName});
        const registeredUser = await User.register(user, password);
        res.render(registeredUser);
    
    }catch(e){
        console.log('error', e);
    }
}

// const sampleUser = new User({ username: 'sampleUser2', email: 'sample@email.com', firstName: 'sam', lastName: 'samplee'});
// sampleUser.save();