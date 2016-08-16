<?php
if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

define('BASE_SERVER_PATH', realpath(__DIR__.'/../server'));
define('BASE_CLIENT_PATH', realpath(__DIR__.'/../client'));
define('BASE_URI_PATH', rtrim(str_replace('index.php', '', $_SERVER['SCRIPT_NAME']),'/'));

require BASE_SERVER_PATH . '/vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require BASE_SERVER_PATH . '/src/settings.php';
$app = new \Slim\App($settings);

// Set up dependencies
require BASE_SERVER_PATH . '/src/dependencies.php';

// Register middleware
require BASE_SERVER_PATH . '/src/middleware.php';

// Register routes
require BASE_SERVER_PATH . '/src/routes.php';

// Run app
$app->run();
