var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var handleRender = require('./build/app.server.js');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
	res.contentType = "text/html; charset=utf8";

	
	var data = [{id: 'asd244', product: 'Apple Watch', price: 20, image: 'http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/s/38/s38yg/sbaw/s38yg-sbaw-sel-201509_GEO_US?wid=424&hei=424&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453545517937'}];
  var html = handleRender(data);
  res.end(html);
});
app.listen('3001', function () {
  console.log('Example app listening on port 3001!')
});