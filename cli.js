#!/usr/bin/env node
'use strict';
var meow = require('meow');
var textMeme = require('text-meme');

var cli = meow([
	'Usage',
	'  $ text-meme "Don\'t forget to be awesome"',
	'',
	'Options',
	'  --delay       Frame delay [Default: 500]',
	'  --background  Background color in hex [Default: #000000]',
	'  --fontcolor   Text color in hex [Default: #ffffff]',
	'  --filename    Filename without extension [Default: meme-123]',
	'  --fontsize    Text size [Default: 30]',
	'',
	'Examples',
	'  $ text-meme "Don\'t forget to be awesome"',
	'  generated text-meme → meme-326.gif',
	'  $ text-meme "Don\'t forget to be awesome --filename=quote --backgrund=#4f656d"',
	'  generated text-meme → quote.gif'
]);

if (cli.input.length === 0) {
	console.error('Please provide some text');
	process.exit(1);
}

textMeme(cli.input[0], cli.flags).then(function (filename) {
	console.log('generated text-meme → ' + filename);
});
