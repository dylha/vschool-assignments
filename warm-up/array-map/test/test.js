const chai = require("chai");
const assert = chai.assert;
const maps = require("../main");

describe("an array that", function () {
    it("should double numbers", function () {
        assert.deepEqual(maps.doubleNumbers([1]), [2]);
        assert.deepEqual(maps.doubleNumbers([1, 2]), [2, 4]);
        assert.deepEqual(maps.doubleNumbers([-1]), [-2]);
    });
});

describe("an array that", function () {
    it("should turn an array of numbers into an array of strings", function () {
        assert.deepEqual(maps.stringItUp([1]), ["1"]);
        assert.deepEqual(maps.stringItUp([1, 2]), ["1", "2"]);
        assert.deepEqual(maps.stringItUp([-1]), ["-1"]);
    });
});

describe("an array that", function () {
    const tests = {
        test1: [{name: "James", age: 42}, {name: "Jill", age: 42}],
        test2: [{name: "Bob", age: 32}]
    };

    it("should return an array of string names", function () {
        assert.deepEqual(maps.namesOnly(tests.test1), ["James", "Jill"])
        assert.deepEqual(maps.namesOnly(tests.test2), ["Bob"])
    });
});

describe("The Matrix", function () {
    const tests = {
        test1: [{name: "James", age: 42}, {name: "Jill", age: 16}],
        test2: [{name: "Bob", age: 32}]
    };

    it("should return an array of strings", function () {
        assert.deepEqual(maps.thereIsNoSpoon(tests.test1), ["James can go to The Matrix", "Jill is underage!!"])
        assert.deepEqual(maps.thereIsNoSpoon(tests.test2), ["Bob can go to The Matrix"])
    });
});

describe("react map", function () {
    const tests = {
        test1: [{name: "James", age: 42}, {name: "Jill", age: 42}],
        test2: [{name: "Bob", age: 32}]
    };

    it("should return an array of strings", function () {
        assert.deepEqual(maps.readyToPutInTheDOM(tests.test1), ["<h1>James</h1><h2>42</h2>", "<h1>Jill</h1><h2>42</h2>"])
        assert.deepEqual(maps.readyToPutInTheDOM(tests.test2), ["<h1>Bob</h1><h2>32</h2>"])
    });
});
