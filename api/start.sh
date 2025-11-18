#!/bin/bash

fuser -k 5000/tcp

export NVM_DIR="/root/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 20.19.5

echo "[START] $(date '+%Y-%m-%d %H:%M:%S') - Starting node..."

cd /var/www/html/frontend/node/backend
npm start
