module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '92380a897452514d9e13c37b50fcb8e1'),
  },
});
