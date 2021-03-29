require('dotenv').config();

module.exports = {
    jwtSecrets: process.env.JWT_SECRET || "keep it secret, keep it safe",
    rounds: process.env.HASH_ROUNDS || 14,
    PORT: process.env.PORT || 5000,
};