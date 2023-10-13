const { src, dest, series, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create();
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

function buildSass() {
    return src('src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ includePaths: ['./node_modules'] }).on('error', sass.logError))
        .pipe(
            postcss([
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ['last 2 versions']
                }),
                cssnano()
            ])
        )
        .pipe(sourcemaps.write())
        .pipe(dest('src/css'))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream());
}

function buildHtml() {
    return src('src/**/*.html').pipe(dest('dist')).pipe(browserSync.stream());
}

function copy() {
    return src(['src/images/**/*.*']).pipe(dest('dist/images'));
}

function cleanDist() {
    return src('dist', { allowEmpty: true }).pipe(clean());
}

function serve() {
    watch('src/scss/**/*.scss', buildSass);
    watch('src/**/*.html', buildHtml);
}

function createDevServer() {
    browserSync.init({
        server: 'src',
        notify: false
    })
}

exports.sass = buildSass;
exports.html = buildHtml;
exports.images = copy;
exports.clean = cleanDist;
exports.build = series(cleanDist, buildSass, buildHtml, copy);
exports.default = series(buildSass, parallel(createDevServer, serve));