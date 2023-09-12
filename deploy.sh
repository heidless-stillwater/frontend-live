echo "Switching to branch master"
git checkout master

echo "Builing app..." 
npm run build

echo "Deploying files to server..."
scp -r ./.next/* heidless@34.89.84.67:/var/www/34.89.84.67/

echo "Done"