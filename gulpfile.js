var gulp = require('gulp');                             //基础库
var rename = require('gulp-rename');                    //重命名
var sourcemaps = require('gulp-sourcemaps');            //生成 sourcemap 文件方便调试
var autoprefixer = require('gulp-autoprefixer');        //添加浏览器前缀
var less = require('gulp-less');                        //编译 Less 文件
var px2rem = require('gulp-px2rem');                    //px2rem
/***********************构建source*******************************/
var px2remOptions = {
    rootValue: 64,   //640px设计稿
    unitPrecision: 5,  //保留5位小数
    propertyBlackList: [],
    propertyWhiteList: [],
    replace: true,    //是否用rem替换px
    mediaQuery: false,
    minPx: 1
};
var postCssOptions = {
    map: true
};
gulp.task('less', function () {
    gulp.src(['./less/**/*.less'])
        .pipe(px2rem(px2remOptions, postCssOptions))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({browsers: '> 0%'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));
});
gulp.task('default', ['less'], function () {
    gulp.watch(['./less/**/*.less'], ['less']);
});

















