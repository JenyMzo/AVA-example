'use strict';

const test = require('ava');
import index from '../index';

test('el test de ava', t => {
    t.is(index.validateData(), 'Juan Camilo Montoya', 'Works');
});

test('test #2', t => {
    t.is(index.validateData(), 'Juan CamiloMontoya', 'Doesn\'t work');
});
