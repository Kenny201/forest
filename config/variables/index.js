"use strict";

const { bs, reload } = require("../browserSync");

module.exports = {
    params : {
        out: "public",
        prod: "public/prod",
        web : "../site/web/statics",
        htmlSrc: [
            "pug/index.pug",
        ],
        levels: ["xs", "sm", "md", "lg", "xl", "xxl"],
        html: ["pug/*.pug", "blocks/**/*.pug"],
        blocksName : [
            "company",
            "advantages",
            "visit", 
            "vacancy",


        ],
        js: [],
        jsLibs: [
            // "node_modules/jquery-validation/dist/jquery.validate.min.js",
            "node_modules/swiper/swiper-bundle.min.js",
            // "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js",
            // "node_modules/jquery.maskedinput/src/jquery.maskedinput.js",
            // "node_modules/magnific-popup/dist/jquery.magnific-popup.min.js"
        ],
        json: "blocks/**/*.json",
        css: [],
        sass: [  
            
            "setting.block/bootstrap.scss",
            "setting.block/custom.scss",
            "node_modules/swiper/swiper-bundle.min.css",
            // "node_modules/magnific-popup/dist/magnific-popup.css"
        ],
        images: [],
        fonts : 'fonts/**/*',
        type: {
            css   : "blocks/**/**/*.css",
            sass  : "blocks/**/**/*.scss",
            js    : "blocks/**/**/*.js",
            images: "blocks/**/**/*.{gif,jpg,jpeg,png,ico,svg}"
        }
    },
    plugins: {
        gulp         : require("gulp"),
        concat       : require("gulp-concat"),
        rename       : require("gulp-rename"),
        path         : require("path"),
        url          : require("gulp-css-url-adjuster"),
        autoprefixer : require("autoprefixer"),
        postcss      : require("gulp-postcss"),
        pug          : require("gulp-pug"),
        babel        : require("gulp-babel"),
        jshint       : require("gulp-jshint"),
        jquery       : require("jquery"),
        plumber      : require("gulp-plumber"),
        uglify       : require("gulp-uglify"),
        sass         : require("gulp-sass"),
        fs           : require("fs"),
        clean        : require("gulp-clean"),
        replace      : require("gulp-replace"),
        merge        : require("gulp-merge-json"),
        htmlmin      : require("gulp-htmlmin"),
        csso         : require("postcss-csso"),
        bemValidator : require("gulp-html-bem-validator"),
        bs           : bs,
        reload       : reload,
        webpack       : require("webpack"),
        webpackConfig : require("../../webpack.config"),
        webpackGulp   : require("webpack-stream")
        
    }
};
