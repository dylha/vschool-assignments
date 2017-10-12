const chai = require("chai");
const assert = chai.assert;
const balanceStr = require("../main");

describe("Every opening parentheses needs a closing parentheses"), () => {
    it("Should return true if there is an opening and closing parentheses"), () => {
        assert.isTrue(balanceStr("Hello()World!")), true
        assert.isTrue(balanceStr("()")), true
        assert.isTrue(balanceStr("()()()")), true
        assert.isFalse(balanceStr("(")), false
        assert.isFalse(balanceStr(")")), false
        assert.isFalse(balanceStr("()(")), false
        assert.isFalse(balanceStr("())")), false
    }
    it("Should return false if the closing parentheses is before the opening parentheses"), () => {
        assert.isFalse(balanceStr(")(")), false
        assert.isFalse(balanceStr("())(")), false
    }
}
