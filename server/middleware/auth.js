const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function authorization(req, res, next) {
    // console.log(req.session.token);
    const tokenCookie = req.cookies.token;
    const Bearer = req.headers['authorization'];
    if (!Bearer) {
        return res.status(401).json({
            code: 'ERROR_UNAUTHORIZED',
            message: 'Bearer Token is required',
            data: null
        });
    }
    const token = Bearer.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            code: 'ERROR_UNAUTHORIZED',
            message: 'Token is required',
            data: null
        });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                code: 'ERROR_UNAUTHORIZED',
                message: 'Token is invalid',
                err: err.message
            });
        }
        req.payload = { id: decoded.id };
        next();
    });
}

module.exports = authorization;