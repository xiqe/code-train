const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('convertJS', function(){
    return gulp.src('./src/**.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function(){
    gulp.watch('./src/*.js', ['convertJS']);
})

gulp.task('default', ['convertJS','watch']);
