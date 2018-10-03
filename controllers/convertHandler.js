/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = (input) => {
    let result = input.slice(0, input.search(/[a-zA-Z]/g));
    if (result.split('/').length > 2 || result.split('.').length > 2) {
      result = 'invalid number';
      return result;
    }
    if (result.split('/').length === 2) {
      result = eval(result.split('/')[0] / result.split('/')[1]);
      return result;
    }
    if (result.length === 0) {
      return 1;
    }
    return eval(result);
  };
  
  this.getUnit = (input) => {
    let result = input.slice(input.search(/[A-z]/g)).toLowerCase();
    if (['gal','l','mi','km','lbs','kg'].indexOf(result) === -1) {
      result = 'invalid unit';
      return result;
    }
    return result;
  };
  
  this.getReturnUnit = (initUnit) => {
    let result;
    switch (initUnit) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
    }
    
    return result;
  };

  this.spellOutUnit = (unit) => {
    let result;
    switch (unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch (initUnit) {
      case 'gal':
        result = +(initNum * galToL).toFixed(5);
        break;
      case 'l':
        result = +(initNum / galToL).toFixed(5);
        break;
      case 'mi':
        result = +(initNum * miToKm).toFixed(5);
        break;
      case 'km':
        result = +(initNum / miToKm).toFixed(5);
        break;
      case 'lbs':
        result = +(initNum * lbsToKg).toFixed(5);
        break;
      case 'kg':
        result = +(initNum / lbsToKg).toFixed(5);
        break;
    }
    
    return result;
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result = '';
    result += initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
