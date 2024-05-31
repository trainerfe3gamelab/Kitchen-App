const User = require ('../models/user');

// GET api/profile/:id
const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.json({ error: error.message });
    }
};

// GET api/profile/resep?user_id=string 
const getProfileResep = async (req, res) => {
    try {
        const user = await User.findById(req.query.user_id).populate('resep');
        res.json(user.resep);
    }
    catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = { 
    getProfile, 
    getProfileResep 
};
