var gulp           = require( 'gulp' );
var webserver      = require( 'gulp-webserver' );
var mainBowerFiles = require( 'main-bower-files' );
var inject         = require( 'gulp-inject' );
var del            = require( 'del' );

var paths = {
  temp      : 'www',
  tempVendor: 'www/vendor',
  tempIndex : 'www/index.html',
  tempFiles : 'www/*',

  index   : 'app/index.html',
  appSrc  : 'app/**/*',
  bowerSrc: 'bower_components/**/*'
};

gulp.task( 'default', ['watch'] );

gulp.task( 'watch', ['serve'], function() {
  gulp.watch( paths.appSrc, ['scripts'] );
  gulp.watch( paths.bowerSrc, ['vendors'] );
} );

gulp.task( 'serve', ['vendors'], function() {
  return gulp.src( paths.temp )
    .pipe( webserver( {
      open      : true,
      livereload: true
    } ) );
} );

gulp.task( 'vendors', ['copyVendor', 'scripts'], function() {

  var tempVendors = gulp.src( paths.tempVendor + '/**/*', {
    read: false
  } );

  return gulp.src( paths.tempIndex )
    .pipe( inject( tempVendors, {
      relative: true,
      name    : 'vendorInject'
    } ) )
    .pipe( gulp.dest( paths.temp ) );
} );

gulp.task( 'copyVendor', function() {
  return gulp.src( mainBowerFiles() ).pipe( gulp.dest( paths.tempVendor ) );
} );

gulp.task( 'scripts', ['copyApp'], function() {

  var appFiles = gulp.src( paths.tempFiles, {
    read: false
  } );

  return gulp.src( paths.tempIndex )
    .pipe( inject( appFiles, {
      relative: true
    } ) )
    .pipe( gulp.dest( paths.temp ) );
} );

gulp.task( 'copyApp', function() {
  return gulp.src( paths.appSrc ).pipe( gulp.dest( paths.temp ) );
} );

gulp.task( 'clean', function( cb ) {
  del( [paths.temp], cb );
} );