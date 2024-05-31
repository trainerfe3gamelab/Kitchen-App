const User = require("../models/user");

// Get user profile by username
const getUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).select("-password");
        if (!user) {
            return res.json({
                error: "User not found"
            });
        }
        res.json(user);
    } catch (error) {
        res.json({
            error: "Server error"
        });
    }
}

// Edit user profile by username
const editUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username }).select("-activity");

        // Update user profile
        user.image = req.body.image || user.image;
        user.username = req.body.username || user.username;
        user.fullName = req.body.fullName || user.fullName;
        user.email = req.body.email || user.email;
        user.website = req.body.website || user.website;
        user.bio = req.body.bio || user.bio;
        user.password = user.password;

        await user.save();

        res.json({
            message: "User profile updated successfully"
        });

    } catch (error) {
        res.json({
            error: "Server error"
        });
    }
}

module.exports = {
    getUser,
    editUser
};