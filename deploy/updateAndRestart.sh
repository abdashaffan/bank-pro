#!/bin/bash

# any future command that fails will exit the script
set -e

# Delete the old repo
rm -rf /home/ubuntu/bank-pro/

# clone the repo again
git clone https://gitlab.informatika.org/if3110-2019-02-k03-04/bank-pro.git

if [ $1 == "dev" ]
then
    # using dev branch
    git checkout dev
fi



#source the nvm file. In an non
#If you are not using nvm, add the actual path like
# PATH=/home/ubuntu/node/bin:$PATH
source /home/ubuntu/.nvm/nvm.sh

# stop the previous pm2
pm2 kill
npm remove pm2 -g
npm remove serve -g

#pm2 needs to be installed globally as we would be deleting the repo folder.
# this needs to be done only once as a setup script.
npm install pm2 -g
npm install serve -g
# starting pm2 daemon
pm2 status

cd /home/ubuntu/bank-pro
#install npm packages
echo "Running npm install"
npm install

if [ $1 == "master" ]
then
   npm run build
   serve -s build 
else
   npm start
fi


#Restart the node server
npm start