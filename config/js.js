"use strict";

const { params,  plugins : $ } = require("./variables");

let js = params.js.slice();
js.push(params.type.js);

module.exports = () =>
    $.gulp.src(js)
        .pipe($.plumber())
        .pipe($.jshint({
            esversion: 6
        }))
        .pipe($.jshint.reporter("jshint-stylish"))
        .pipe($.webpackGulp($.webpackConfig, $.webpack))
        .pipe($.gulp.dest(params.out))
        .pipe($.gulp.dest(params.prod))
        .pipe($.gulp.dest(params.web))
        .pipe($.reload({ stream: true }));
