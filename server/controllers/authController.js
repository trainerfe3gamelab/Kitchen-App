const User = require("../models/user");
const { hashPassword, comparePassword } = require("../utils/hashPass");
const jwt = require("jsonwebtoken");
const validateRequest = require("../utils/validateRequest");

// Register endpoint
const registerUser = async (req, res) => {

    try {
        const { username, fullName, email, password } = req.body;

        // Check if fullName was entered
        if (!fullName) {
            return res.json({
                error: "Name is required"
            });
        }

        // Check if password is good
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required and should be at least 6 characters long"
            });
        }

        // Check if username was exists
        const unameExist = await User.findOne({ username });

        if (unameExist) {
            return res.json({
                error: "username already exists"
            })
        }

        // Check if email was exists
        const exist = await User.findOne({ email });

        if (exist) {
            return res.json({
                error: "Email already exists"
            })
        }

        const hashedPassword = await hashPassword(password);
        // Create new user
        const user = new User({
            image: "",
            username,
            fullName,
            email,
            website: "",
            bio: "",
            password: hashedPassword,
            activity: {
                likes: [],
                saves: [],
            }
        });
        await user.save();

        res.json(
            {
                message: "User created successfully!",
                fullName,
                email
            }
        );

    } catch (error) {
        res.json({
            error: `Server error: ${error}`
        })
    }
}

// Login endpoint
const loginUser = async (req, res) => {
    try {
        let data

        const { isValid, filteredReq } = validateRequest(req.body, ["email", "password"])
        if (isValid) {
            data = filteredReq
        } else {
            return res.json({
                code: "BAD_REQUEST_LOGIN",
                error: "Invalid request body"
            })
        }

        // Check if email exists
        const user = await User.findOne({ email: data.email });
        if (!user) {
            return res.json({
                code: "EMAIL_NOT_FOUND",
                error: "Email does not exist"
            });
        }

        // // Check if password is correct
        const match = await comparePassword(data.password, user.password);

        if (match) {
            jwt.sign({ username: user.username, email: user.email, id: user._id, fullName: user.fullName }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res.cookie("token", token);
                res.json({
                    id: user._id,
                    username: user.username,
                    token
                })
            })
        } else {
            return res.json({
                code: "PWD_NOT_MATCH",
                error: "Password is incorrect"
            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            code: "INTERNAL_SERVER_ERROR",
            error: `Server error: ${error}`
        })
    }
};

module.exports = {
    registerUser,
    loginUser
}
