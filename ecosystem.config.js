module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key: '/Users/kosha/Documents/Important/aws/pem/diversoIN.pem',
      user : 'ubuntu',
      host : '3.108.194.72',
      ref  : 'origin/main',
      repo : 'git@github.com:Shanie1331/NextJS-Portfolio.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
