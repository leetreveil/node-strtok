// Test reading uint32 values in different endiannesses.

var assert = require('assert');
var util = require('./util');
var strtok = require('../lib/strtok');

var le = function(v) {
    assert.equal(v, 0x001a001a);
    return strtok.UINT32_BE;
};

var be = function(v) {
    assert.equal(v, 0x1a001a00);
    return strtok.UINT32_LE;
};

util.runTest(
    '\x1a\x00\x1a\x00\x1a\x00\x1a\x00\x1a\x00\x1a\x00\x1a\x00\x1a\x00',
    [
        function(v) {
            assert.ok(v === undefined);
            return strtok.UINT32_LE;
        },
        le, be, le, be
]);