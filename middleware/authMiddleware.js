const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(401).json({ message: "Access Denied. No token provided." });
        }

        
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded || !decoded.id) {
            return res.status(401).json({ message: "Invalid Token." });
        }

        // Fetch user 
        const user = await User.findById(decoded.id).select("role");
        if (!user) {
            return res.status(401).json({ message: "User not found." });
        }

        req.user = { id: decoded.id, role: user.role }; 
        next();
    } catch (error) {
        console.error("Authentication Error:", error);
        return res.status(401).json({ message: "Invalid Token." });
    }
};

// Role-based access control middleware
const roleCheck = (roles) => {
    return (req, res, next) => {
        console.log("User Object:", req.user); 

        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Access Forbidden: Insufficient Permissions." });
        }
        next();
    };
};

module.exports = { authMiddleware, roleCheck };
