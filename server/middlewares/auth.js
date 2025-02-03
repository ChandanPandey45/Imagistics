const userAuth = async (req, res, next) => {
    try {
        console.log('Headers:', req.headers); // Log headers for debugging

        const authHeader = req.headers['authorization'];
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized. Login Again.",
            });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (decoded && decoded.id) {
            req.body.userId = decoded.id; // Attach userId to the request body
            return next(); // Proceed to the next middleware/route
        } else {
            return res.status(401).json({
                success: false,
                message: "Not Authorized. Invalid Token.",
            });
        }
    } catch (error) {
        console.error('Error in token verification:', error);
        return res.status(401).json({
            success: false,
            message: error.name === 'TokenExpiredError' ? "Token expired. Please log in again." : "Not Authorized. Login Again.",
        });
    }
};
export default userAuth;