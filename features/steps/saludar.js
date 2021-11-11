const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');

defineSupportCode(function({ Given, Then, When }) {let answer = ' ';
    Given('I start with {string}', 
        function (input) {// Write code here that turns the phrase above into concrete actions//
            callback(null, 'pending');
            answer = input;
        });
    When('I add {string}', 
        function (input) {// Write code here that turns the phrase above into concrete actions//
        callback(null, 'pending');
            answer = answer +' '+ input;
        });
    Then('I end up with {string}',
     function (input) {// Write code here that turns the phrase above into concrete actions//
        callback(null, 'pending');
        assert.equal(answer, input);
    });
});