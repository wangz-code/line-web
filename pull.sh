export http_proxy="http://127.0.0.1:10801"
export HTTP_PROXY="http://127.0.0.1:10801"
export https_proxy="http://127.0.0.1:10801"
export HTTPS_PROXY="http://127.0.0.1:10801"

git reset --hard
git pull
cd ~/program/lineshenofficial/line-web/.output/server
npm install
pm2 reload lineweb