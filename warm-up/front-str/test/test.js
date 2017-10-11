const chai = require("chai");
const assert = chai.assert;
const strCopies = require("../main")

describe("Front String", () => {
    it("should return n copies of the first 3 chars", () => {
        assert.equal(strCopies("big"), 3), "bigbigbig"
        assert.equal(strCopies("laugh"), 1), "lau"
        assert.equal(strCopies("ha"), 2), "haha"
    });
});
