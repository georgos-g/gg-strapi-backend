module.exports = ({ env }) => ({
  auth: {
    // secret: env('ADMIN_JWT_SECRET'),
    secret: env("JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
