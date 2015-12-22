import fs from 'fs';
import test from 'ava';
import execa from 'execa';
import pathExists from 'path-exists';

test(async t => {
	await execa('./cli.js', ['foo', '--filename=foo.gif']);
	t.true(await pathExists('foo.gif'));
	fs.unlinkSync('foo.gif');
});
