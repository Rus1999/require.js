// config

requirejs.config({
    baseUrl: 'scripts',
    paths: {
        angular: [
            // load in order
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min',
            'angular.min'
        ],
        bootStrapFile: '<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js" integrity="sha512-WW8/jxkELe2CAiE4LvQfwm1rajOS8PHasCCx+knHG0gBHt8EXxS6T6tJRTGuDQVnluuAvMxWF4j8SNFDKceLFg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
        extCore: 'ext-core',
        jquery: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min',
            'jquery.min'
        ],
        mootools: 'mootools.min',
        swfObj: 'swfobject'
    }
});