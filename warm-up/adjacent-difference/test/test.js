const chai = require("chai");
const assert = chai.assert;
const arrFilter = require("../main");

describe("adjacent Difference", () => {
    it("Should find the 3 longest adjacent elements", () => {
        assert.deepEqual(arrFilter(["Nice", "Dude", "I", "Agree"]), ["Dude", "I", "Agree"])
        assert.notDeepEqual(arrFilter(["Big", "Assert", "My", "Guy"]), ["Big, Assert, Guy"])
    })
})
