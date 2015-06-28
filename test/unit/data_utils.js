'use strict';
var expect  = require('chai').expect;
var _ = require('underscore-contrib');
var dataUtils = require('../../src/data_utils');

describe('data_utils', function() {

  describe('#setPathValue', function () {
    it('should be a function', function () {
      expect(dataUtils.setPathValue).to.be.a('function');
    });
    it('should setPathValue ', function () {
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      dataUtils.setPathValue(mefData, 'returns.IRS1040.Return.ReturnHeader.Filer.SpouseSSN', "111-11-1111");
      var mefDataTest = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '111-11-1111'}}}}}};
      expect(mefData).to.deep.equal(mefDataTest);
    });
  });

  describe('#getPathValue', function () {
    it('should be a function', function () {
      expect(dataUtils.getPathValue).to.be.a('function');
    });
    it('should getPathValue ', function () {
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      var spouseSSN = dataUtils.getPathValue(mefData, 'returns.IRS1040.Return.ReturnHeader.Filer.SpouseSSN');
      expect(spouseSSN).to.deep.equal('123-12-1234');
    });
  });

});
