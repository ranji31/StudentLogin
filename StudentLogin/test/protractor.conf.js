/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/SeleniumTests/protractor.conf.js to edit this template
 */

exports.config = {
    
    seleniumServerJar: null,
    
    seleniumPort: null,
    
    seleniumArgs: [],
    
    chromeDriver: null,
    
    seleniumAddress: null,
    
    sauceUser: null,
    sauceKey: null,
    
    sauceSeleniumAddress: null,
    
    directConnect: false,
    
    firefoxPath: null,
    
    chromeOnly: false,
    
    exclude: [],
    
    capabilities: {
        browserName: 'chrome',
        
        count: 1,
        
        shardTestFiles: false,
        
        maxInstances: 1,
        
        specs: [],
        
        exclude: []
                
    },
    
    multiCapabilities: [],
    
    maxSessions: -1,
    
    baseUrl: 'http://localhost:9876',
    
    rootElement: 'body',
    
    allScriptsTimeout: 11000,
    
    getPageTimeout: 10000,
    
    beforeLaunch: function () {
    },
    
    onPrepare: function () {
    },
    
    onComplete: function () {
    },
    
    onCleanUp: function (exitCode) {},
    
    afterLaunch: function () {},
    
    params: {
        login: {
            user: 'Jane',
            password: '1234'
        }
    },
    
    resultJsonOutputFile: null,
    
    restartBrowserBetweenTests: false,
    
    framework: 'jasmine',
    
    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },
    
    mochaOpts: {
        ui: 'bdd',
        reporter: 'list'
    },
    
    // Options to be passed to Cucumber.
    cucumberOpts: {
        require: 'cucumber/stepDefinitions.js',
        tags: '@dev',
        format: 'summary'
    }
};
