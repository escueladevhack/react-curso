'use strict';
require('babel-register');

require('babel-register');
import Component from './Component';
import React from 'react';
import { renderToString } from 'react-dom/server';

const html = renderToString(<Component />);

console.log(html);