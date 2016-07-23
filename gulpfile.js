var gulp = require('gulp');                             //基础库
var rename = require('gulp-rename');                    //重命名
var sourcemaps = require('gulp-sourcemaps');            //生成 sourcemap 文件方便调试
var autoprefixer = require('gulp-autoprefixer');        //添加浏览器前缀
var less = require('gulp-less');                        //编译 Less 文件
/***********************构建source*******************************/
gulp.task('less', function () {
    gulp.src(['./less/**/*.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer({browsers: '> 0%'}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'));
});
gulp.task('default', ['less'], function () {
    gulp.watch(['./less/**/*.less'], ['less']);
});

















