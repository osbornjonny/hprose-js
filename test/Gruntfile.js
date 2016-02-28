module.exports = function (grunt) {
  var browsers = [{
    browserName: 'android',
    version: '4.0'
  }, {
    browserName: 'android',
    version: '4.1'
  }, {
    browserName: 'android',
    version: '4.2'
  }, {
    browserName: 'android',
    version: '4.3'
  }, {
    browserName: 'android',
    version: '4.4'
  }, {
    browserName: 'android',
    version: '5.1'
  }, {
    browserName: 'iphone',
    version: '9.2'
  }, {
    browserName: 'iphone',
    version: '9.1'
  }, {
    browserName: 'iphone',
    version: '9.0'
  }, {
    browserName: 'iphone',
    version: '8.4'
  }, {
    browserName: 'iphone',
    version: '8.3'
  }, {
    browserName: 'iphone',
    version: '8.2'
  }, {
    browserName: 'iphone',
    version: '8.1'
  }, {
    browserName: 'iphone',
    version: '8.0'
  }, {
    browserName: 'iphone',
    version: '7.0'
  }, {
    browserName: 'iphone',
    version: '6.1'
  }, {
    browserName: 'iphone',
    version: '6.0'
  }, {
    browserName: 'iphone',
    version: '5.1'
  }, {
    browserName: 'chrome',
    version: 'latest'
  }, {
    browserName: 'chrome',
    version: 'latest-1'
  }, {
    browserName: 'chrome',
    version: 'latest-2'
  }, {
    browserName: 'chrome',
    version: 'latest-3'
  }, {
    browserName: 'chrome',
    version: 'latest-4'
  }, {
    browserName: 'chrome',
    version: 'latest-5'
  }, {
    browserName: 'chrome',
    version: 'latest-6'
  }, {
    browserName: 'chrome',
    version: 'latest-7'
  }, {
    browserName: 'chrome',
    version: 'latest-8'
  }, {
    browserName: 'chrome',
    version: 'latest-9'
  }, {
    browserName: 'chrome',
    version: 'latest-10'
  }, {
    browserName: 'chrome',
    version: 'latest-11'
  }, {
    browserName: 'chrome',
    version: 'latest-12'
  }, {
    browserName: 'chrome',
    version: 'latest-13'
  }, {
    browserName: 'chrome',
    version: 'latest-14'
  }, {
    browserName: 'chrome',
    version: 'latest-15'
  }, {
    browserName: 'chrome',
    version: 'latest-16'
  }, {
    browserName: 'chrome',
    version: 'latest-17'
  }, {
    browserName: 'chrome',
    version: 'latest-18'
  }, {
    browserName: 'chrome',
    version: 'latest-19'
  }, {
    browserName: 'chrome',
    version: 'latest-20'
  }, {
    browserName: 'firefox',
    version: 'latest'
  }, {
    browserName: 'firefox',
    version: 'latest-1'
  }, {
    browserName: 'firefox',
    version: 'latest-2'
  }, {
    browserName: 'firefox',
    version: 'latest-3'
  }, {
    browserName: 'firefox',
    version: 'latest-4'
  }, {
    browserName: 'firefox',
    version: 'latest-5'
  }, {
    browserName: 'firefox',
    version: 'latest-6'
  }, {
    browserName: 'firefox',
    version: 'latest-7'
  }, {
    browserName: 'firefox',
    version: 'latest-8'
  }, {
    browserName: 'firefox',
    version: 'latest-9'
  }, {
    browserName: 'firefox',
    version: 'latest-10'
  }, {
    browserName: 'firefox',
    version: 'latest-11'
  }, {
    browserName: 'firefox',
    version: 'latest-12'
  }, {
    browserName: 'firefox',
    version: 'latest-13'
  }, {
    browserName: 'firefox',
    version: 'latest-14'
  }, {
    browserName: 'firefox',
    version: 'latest-15'
  }, {
    browserName: 'firefox',
    version: 'latest-16'
  }, {
    browserName: 'firefox',
    version: 'latest-17'
  }, {
    browserName: 'firefox',
    version: 'latest-18'
  }, {
    browserName: 'firefox',
    version: 'latest-19'
  }, {
    browserName: 'firefox',
    version: 'latest-20'
  }, {
    browserName: 'safari',
    version: 'latest'
  }, {
    browserName: 'safari',
    version: 'latest-1'
  }, {
    browserName: 'safari',
    version: 'latest-2'
  }, {
    browserName: 'safari',
    version: 'latest-3'
  }, {
    browserName: 'safari',
    version: 'latest-4'
  }, {
    browserName: 'MicrosoftEdge',
    version: '20.10240'
  }, {
    browserName: 'internet explorer',
    version: '11.0'
  }, {
    browserName: 'internet explorer',
    version: '10.0'
  }, {
    browserName: 'internet explorer',
    version: '9.0'
  }, {
    browserName: 'internet explorer',
    version: '8.0'
  }, {
    browserName: 'internet explorer',
    version: '7.0'
  }, {
    browserName: 'internet explorer',
    version: '6.0'
  }, {
    browserName: 'opera',
    version: '11'
  }];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          base: '',
          port: 9999
        }
      }
    },

    'saucelabs-mocha': {
      all: {
        options: {
          username: 'hprose-js',
          key: '4183a5d8-d54b-4808-9ade-fbe00961392e',
          urls: [
            'http://127.0.0.1:9999/index.html'
          ],
          browsers: browsers,
          build: process.env.TRAVIS_JOB_ID,
          testname: 'hprose-js tests',
          throttled: 3,
          statusCheckAttempts: -1,
          pollInterval: 5000,
          maxRetries: 3,
          sauceConfig: {
            'video-upload-on-pass': false
          }
        }
      }
    },
    watch: {}
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-saucelabs');

  grunt.registerTask('default', ['connect', 'saucelabs-mocha']);
};
