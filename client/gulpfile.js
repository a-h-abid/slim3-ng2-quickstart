var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var embedTemplates = require('gulp-angular-embed-templates');

gulp.task('app.build', function () {
    var tsResult = gulp.src('ng2/**/*.ts', {base: './ng2'})
        .pipe(embedTemplates({sourceType: 'ts', minimize: {quotes: true }})) // inline templates
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(gulp.dest('../public/ng2/app'));
});



gulp.task('default', ['app.build']);