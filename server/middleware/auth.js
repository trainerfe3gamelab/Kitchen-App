const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

/**
 * Middleware function to authenticate user token.
 * 
 * This middleware function checks if a token is provided in the request cookies.
 * If no token is provided, it returns a 401 status code with an error message.
 * If a token is provided, it verifies the token and decodes the payload.
 * The decoded payload is then attached to the request object as req.user.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const authenticate = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            error: "Access denied. No token provided."
        });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({
            error: "Invalid token"
        });
    }

}

/**
 * Middleware to authorize user access.
 * 
 * This middleware function checks if the username in the request parameters
 * matches the username in the decoded token (req.user).
 * If the usernames match, it calls the next middleware function.
 * If the usernames do not match, it returns a 403 status code with an error message.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {Function} next - The next middleware function.
 */
const authorize = (req, res, next) => {
    if (req.user.username === req.params.username) {
        next();
    } else {
        res.status(403).json({
            error: "You are not authorized to perform this action"
        });
    }
}

module.exports = {
    authenticate,
    authorize
};