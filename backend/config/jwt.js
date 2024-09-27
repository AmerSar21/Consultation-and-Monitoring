import crypto from "crypto";

// Genereate a random secret key
export const secretKey = crypto.randomBytes(32).toString('hex');
