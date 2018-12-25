var gulp = require('gulp'),
    connect = require('gulp-connect'), //服务器
    rename = require('gulp-rename'),
    autoprefixer = require('autoprefixer'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    px2rem = require('postcss-px2rem'),
    notify = require("gulp-notify"),
    uglify = require("gulp-uglify"),
    gutil = require('gulp-util'),
    babel = require('gulp-babel');


gulp.task('less', function () {
    var processors = [px2rem({
        remUnit: 53.333
    }), autoprefixer({
        brpwsers: ['last 2 version', 'android >= 4.0']
    })];
    return gulp.src('./css/*.less')
        .pipe(less())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(postcss(processors))
        .pipe(notify("Hello Gulp!"))
        .pipe(gulp.dest('./css'))
});

// 压缩js
gulp.task('script',function () {
    gulp.src(['./js/main.js','./js/metamask.js','./js/translate.js'])
        .pipe(uglify().on('error', function(err){
            gutil.log(err);
            this.emit('end');
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./js'))
})

//服务器
gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        port: 1234,
        host: '0.0.0.0'
    });
});

// 监控
gulp.task('watch', function () {
    gulp.watch('./css/*.less', ['less']);
    gulp.watch(['./js/main.js','./js/metamask.js','./js/translate.js'], ['script']);
});

// 预设任务
gulp.task('default', ['watch', 'webserver'], function () {});