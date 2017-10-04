const chai = require("chai");
const assert = chai.assert;
const validate = require("./main.js")

describe("An IP Address", function () {
    it("should have 3 periods", function () {
        assert.isTrue(validate("12.23.34.45"));
        assert.isTrue(validate("121.253.0.4"));
        assert.isFalse(validate("18.253.0"));
    });
    it("should have 4 numbers", function () {
        assert.isTrue(validate("12.23.34.45"));
        assert.isFalse(validate("18.253.0"));
        assert.isFalse(validate("18.253.0.45.123"));
    });
    it("the numbers should be somewhere from 0-255", function () {
        assert.isTrue(validate("123.0.0.231"));
        assert.isFalse(validate("1345.250.60.5000"));
    });
    it("should only contain numbers in each section", function () {
        assert.isTrue(validate("123.0.0.231"));
        assert.isFalse(validate("a.b.c.d"));
    });
});
