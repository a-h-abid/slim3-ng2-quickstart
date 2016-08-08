/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app' : 'ng2/app',

    '@angular'                   : 'ng2/vendor/@angular',
    'angular2-in-memory-web-api' : 'ng2/vendor/angular2-in-memory-web-api',
    'rxjs'                       : 'ng2/vendor/rxjs',

    'ng2-i18next'                 : 'ng2/vendor/ng2-i18next',
    'i18next'                     : 'ng2/vendor/i18next/i18next.js',
    'i18nextXHRBackend'           : 'ng2/vendor/i18next-xhr-backend/i18nextXHRBackend.min.js',
    'i18nextSprintfPostProcessor' : 'ng2/vendor/i18next-sprintf-postprocessor/i18nextSprintfPostProcessor.min.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app'                         : { main: 'main.js',  defaultExtension: 'js' },
    'rxjs'                        : { defaultExtension: 'js' },
    'angular2-in-memory-web-api'  : { main: 'index.js', defaultExtension: 'js' },
    'ng2-i18next'                 : { format: 'cjs', defaultExtension: 'js' },
    'i18next'                     : { format: 'global' },
    'i18nextXHRBackend'           : { format: 'global' },
    'i18nextSprintfPostProcessor' : { format: 'global' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
