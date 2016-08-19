/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {

  var usePathType = 'cdn'; // cdn, local

  var vendorPaths = {
    cdn : {
      '@angular'        : 'https://npmcdn.com/@angular',
      '@angular/router' : 'https://npmcdn.com/@angular/router@3.0.0-rc.1',
      '@angular/forms'  : 'https://npmcdn.com/@angular/forms@0.3.0',
      'rxjs'            : 'https://npmcdn.com/rxjs@5.0.0-beta.6'
    },
    local : {
      '@angular'        : 'ng2/vendor/@angular',
      '@angular/router' : 'ng2/vendor/@angular/router',
      '@angular/forms'  : 'ng2/vendor/@angular/forms',
      'rxjs'            : 'ng2/vendor/rxjs'
    }
  };

  // map tells the System loader where to look for things
  var map = {
    'app' : 'ng2/app',

    '@angular'                   : vendorPaths[usePathType]['@angular'],
    '@angular/forms'             : vendorPaths[usePathType]['@angular/forms'],
    '@angular/router'            : vendorPaths[usePathType]['@angular/router'],
    'rxjs'                       : vendorPaths[usePathType]['rxjs']
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app'                         : { main: 'main.js',  defaultExtension: 'js' },
    '@angular/forms'              : { main: 'index.js', defaultExtension: 'js' },
    '@angular/router'             : { main: 'index.js', defaultExtension: 'js' },
    'rxjs'                        : { defaultExtension: 'js' }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic'
  ];

  // Add map entries for each angular package
  // only because we're pinning the version with `ngVer`.
  if (usePathType == 'cdn') {
      ngPackageNames.forEach(function(pkgName) {
        map['@angular/'+pkgName] = vendorPaths[usePathType]['@angular'] + '/' + pkgName + '@2.0.0-rc.5';
      });
  }

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
