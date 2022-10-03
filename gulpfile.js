const { src, dest, watch, series } = require('gulp')
const sass 						   = require('gulp-sass')(require('sass'))
const del 						   = require('delete')
const prefix 					   = require('gulp-autoprefixer')
const rename 					   = require('gulp-rename')

function css(){
	return src('source/**/*.sass')
		.pipe(sass())
		.pipe(rename('style.css'))
		.pipe(prefix({overrideBrowserslist: ['last 10 versions'], grid: true}))
		.pipe(dest('css'))
}

function delfile(cb) {
	del(['css'], cb)
	
}

exports.css 	= css
exports.delfile = delfile

exports.default = function(){
	watch(['source/**/*.sass'], series(delfile, css))
}