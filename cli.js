#!/usr/bin/env node
'use strict';
var meow = require('meow');
var textMeme = require('text-meme');

var cli = meow([
	'Usage',
	'  $ text-meme Dont\'t forget to be awesome',
	'',
	'Options',
	'  --delay       frame delay [Default: 500]',
	'  --background  image\'s background color in hex [Default: #000000]',
	'  --fontcolor   font\'s color in hex [Default: #ffffff]',
	'  --filename    expected name of the file (without file extension) [Default: quote]',
	'  --fontsize    font\'s size [Default: 30]',
	'',
	'Examples',
	'  $ text-meme "Dont\'t forget to be awesome"',
	'  generated text-meme > filename.gif',
	'  $ text-meme "Don\'t forget to be awesome --filename=quote --backgrund=#4f656d"',
	'  generated text-meme > quote.gif'
]);

if (cli.input.length === 0) {
	console.error('Please provide some text');
	process.exit(1);
}

textMeme(cli.input[0], cli.flags).then(function (filename) {
	console.log('generated text-meme > ' + filename);
}, function (err) {
	console.log(err);
});
