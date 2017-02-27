/*
 * @Author: wj77998
 * @Date:   2017-02-27 16:58:57
 * @Email:  wj77998@qq.com
 * @Last Modified by:   wj77998
 * @Last Modified time: 2017-02-27 17:16:57
 */

'use strict';
var assert = require('assert');
var hump = require('../index');
describe('hump', function() {
    it('converts underscored strings to PascalCase', function() {
        assert.equal(hump('hello_world'), 'helloWorld');
    });
    it('converts hyphenated strings to PascalCase', function() {
        assert.equal(hump('hello-world'), 'helloWorld');
    });
    it('converts space-separated strings to PascalCase', function() {
        assert.equal(hump('hello world'), 'helloWorld');
    });
    it('does not separate on digits', function() {
        assert.equal(hump('helloWorld1'), 'hello_world1');
    });

    it('uses a custom pattern', function() {
        assert.equal(hump('helloWorld1', {
                pattern: /(?=[A-Z0-9])/
        }), 'hello_world_1');
    });

    it('uses a custom retrofit', function() {
        assert.equal(hump('helloWorld', {
            retrofit: '-'
        }), 'hello-world');
    });
});
