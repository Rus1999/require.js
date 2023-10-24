// config

requirejs.config({
    baseUrl: 'scripts',
    paths: {
        angular: [
            // load in order
            'https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min',
            'libs/angular.min'
        ],
        jquery: [
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min',
            'libs/jquery-3.7.1'
        ],
        mootools: 'libs/MooTools-Core-1.6.0',
        methods: 'customScript/methods',
        customAlert: 'customScript/customAlert',
        callCustomAlert: 'customScript/callCustomAlert'
    }
});