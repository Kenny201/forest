"use strict";
const { params,  plugins : $ } = require("./variables");


module.exports = () =>
    $.gulp.src(params.jsLibs    )
        .pipe($.concat({
            path: 'libs.js'
        }))
        
        .pipe($.gulp.dest(params.out))
        .pipe($.replace(/("use\sstrict";\s+)?\$\(function\s\(\)\s\{\}\);/g, ""))
        .pipe($.babel({
            presets: ['es2015']
        }))
        .pipe($.uglify())
        .pipe($.gulp.dest(params.prod))
        .pipe($.gulp.dest(params.web));
