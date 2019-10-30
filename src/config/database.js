//require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: 'localhost', //process.env.DB_HOST,
  username: 'postgres', //process.env.DB_USER,
  password: 'docker', //process.env.DB_PASS,
  database: 'gympoint', //process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
