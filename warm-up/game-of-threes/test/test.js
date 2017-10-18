const chai = require("chai");
const assert = chai.assert;

const threes = require("../app.js");

const tests = {
    case0: 1,
    case1: 3,
    case2: 10,
    case3: 28,
}

describe("Game of Threes test", () => {
    it("should return 0", () => {
        assert.equal(threes(tests.case0), 0);
    })
    it("should return 1", () => {
        assert.equal(threes(tests.case1), 1);
    })
    it("should return 2", () => {
        assert.equal(threes(tests.case2), 2);
    })
    it("should return 3", () => {
        assert.equal(threes(tests.case3), 3);
    })
})
