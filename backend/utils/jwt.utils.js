import jwt from 'jsonwebtoken';
import { secretKey } from '../config/jwt.js';

export function generateToken(user) {
    const payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload, secretKey, { expiresIn : '1h' });
}