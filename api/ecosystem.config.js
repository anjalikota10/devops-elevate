module.exports = {
  apps: [
    {
      name: 'registration',
      script: './start.sh',
      cwd: '/var/www/html/frontend/node/backend',
      error_file: '/var/log/registration.err.log',
      out_file: '/var/log/registration.out.log',
      merge_logs: true,
      autorestart: true,
      watch: false,
    },
  ],
};
