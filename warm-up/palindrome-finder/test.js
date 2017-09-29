var chai = require("chai");
var assert = chai.assert;
var isPalindrome = require("./main.js")

describe("Checks palindrome", function(){
    it("Should have the same characters forward and backwards", function() {
        assert.equal(isPalindrome("racecar"), true)
    });
    it("Should ignore spaces", function() {
        assert.equal(isPalindrome("Race cAr"), true);
    });
    it("Should not be case sensitive", function() {
        assert.equal(isPalindrome("RacecAr"), true);
    });br
});
