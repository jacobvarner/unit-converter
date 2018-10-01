/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

let chai = require('chai');
let assert = chai.assert;
let ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', () => {
  
  suite('Function convertHandler.getNum(input)', () => {
    
    test('Whole number input', (done) => {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', (done) => {
      let input = '3.3L';
      assert.equal(convertHandler.getNum(input), 3.3);
      done();
    });
    
    test('Fractional Input', (done) => {
      let input = '3/4L';
      assert.equal(convertHandler.getNum(input), 0.75);
      done();
    });
    
    test('Fractional Input w/ Decimal', (done) => {
      let input = '5.5/10L';
      assert.equal(convertHandler.getNum(input),0.55);
      done();
    });
    
    test('Invalid Input (double fraction)', (done) => {
      let input = '5/6/7L';
      assert.equal(convertHandler.getNum(input), 'invalid number');
      done();
    });
    
    test('No Numerical Input', (done) => {
      let input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach((element) => {
        assert.notEqual(convertHandler.getUnit(element), 'invalid unit');
      });
      done();
    });
    
    test('Unknown Unit Input', (done) => {
      let input = '6test';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach((element, index) => {
        assert.equal(convertHandler.getReturnUnit(element), expect[index]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', () => {
    
    test('For Each Valid Unit Inputs', (done) => {
      let input = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      let expect = ['liters', 'gallons', 'kilometers', 'miles', 'kilograms', 'pounds'];
      input.forEach((element, index) => {
        assert.equal(convertHandler.spellOutUnit(element), expect[index]);
      });
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', () => {
    
    test('Gal to L', (done) => {
      let input = [5, 'gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', (done) => {
      let input = [5, 'l'];
      let expected = 1.32086026;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Mi to Km', (done) => {
      let input = [5, 'mi'];
      let expected = 8.04672;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Km to Mi', (done) => {
      let input = [5, 'km'];
      let expected = 3.10686;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Lbs to Kg', (done) => {
      let input = [5, 'lbs'];
      let expected = 12.26796;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
    test('Kg to Lbs', (done) => {
      let input = [5, 'kg'];
      let expected = 11.0231;
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1);
      done();
    });
    
  });

});