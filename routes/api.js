/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

let expect = require('chai').expect;
let ConvertHandler = require('../controllers/convertHandler.js');

module.exports = (app) => {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit);
    var returnUnit = convertHandler.getReturnUnit(initUnit);
    var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

    if (initNum === 'invalid number' && initUnit === 'invalid unit') res.json('invalid number and unit');
    if (initNum === 'invalid number') res.json('invalid number');
    if (initUnit === 'invalid unit') res.json('invalid unit');
    res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});
  });
    
};
