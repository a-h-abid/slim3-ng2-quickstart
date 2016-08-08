# A Quickstart Angular2 App on PHP Slim Framework 3 Skeleton Application

Use this skeleton application to quickly setup and start working on a new Angular 2 & Slim Framework 3 application.


## Requirements

- Composer
- NodeJS / NPM
  - Gulp Cli Installed globally


## Installation

```
git clone https://github.com/abdmaster/slim3-ng2-quickstart.git
cd slim3-ng2-quickstart
cd server
composer install
cd ../client
npm install
gulp vendor.copy
gulp app.build
```

After these, run the public/index.php in a browser.