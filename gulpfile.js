"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass"); //препроцессор sass
var less = require('gulp-less'); //препроцессор less
var plumber = require("gulp-plumber"); //плагин чтоб не слетело во время ошибок
var postcss = require("gulp-postcss"); // плагин для автопрефикса, минифик
var autoprefixer = require("autoprefixer"); // автопрефикс для браузеров
var server = require("browser-sync").create(); //автоперазгрузки браузера
var mqpacker = require("css-mqpacker"); //обьединение медиавыражения, объединяем «одинаковые селекторы» в одно правило
var minify = require("gulp-csso"); //минификация css
var rename = require("gulp-rename"); // перемейноввывние имя css
var imagemin = require("gulp-imagemin"); // ужимаем изображение
var svgstore = require("gulp-svgstore"); // собиральщик cvg
var svgmin = require("gulp-svgmin"); // свг минификация
var run = require("run-sequence"); //запуск плагинов очередью
var del = require("del"); //удаление ненужных файлов

gulp.task("clean", function() {
  return del("build");
});

gulp.task("copy", function() {
  return gulp.src([
      "fonts/**",
      "img/**",
      "js/**",
      "*.html",
      "*.css"

    ], {
      base: "."
    })
    .pipe(gulp.dest("build"));
});

gulp.task("style", function() {
  gulp.src("sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]}),
      mqpacker ({
        sort: true
      })
    ]))
    .pipe(gulp.dest("."))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("."))
    .pipe(server.stream());
});

gulp.task("images", function() {
  return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("img"));
});

gulp.task("symbols", function() {
  return gulp.src("img/sprite/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("symbols.svg"))
    .pipe(gulp.dest("img"));
});

gulp.task("build", function(fn) {
  run(
    "clean",
    "copy",
    "style",
    "images",
    "symbols",
    fn
  );
});

gulp.task("serve", function() {
  server.init({
    server: "."
  });
  gulp.watch("sass/**/*.scss", ["style"]);
  gulp.watch("*.html").on("change", server.reload);
});