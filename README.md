# Web Socket Upload

Upload a huge file in chunks over a web socket connection.
I'm using the [https://socket.io/](socket.io) web socket framework (thanks, very cool!) for server and client web socket logic. 
Front JS is based on a gist from Alessandro Diaferia. (Thank you!)
https://gist.github.com/alediaferia/cfb3a7503039f9278381

DISCLAIMER: I'm not sure if this is a good idea, but it actually works.
This is currently an experiment in progress. I'm very open for comments.

Usage:

```
git clone https://github.com/nkoster/websocket-upload
cd websocket-upload
npm install
./node_modules/nodemon/bin/nodemon.js server.js
````

Open http://localhost:9999 and drag-and-drop a file in the page.

Before uploading, an MD5 sum is calculated. This is for the future.
I'm using [https://github.com/satazor/js-spark-md5](js-spark-md5) from André Cruz
for the in-fly MD5 calculation. Obrigado!
