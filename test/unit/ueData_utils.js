'use strict';
var expect  = require('chai').expect;
var _ = require('underscore-contrib');
var ueData_utils = require('../../src/ueData_utils');
var address = require('../../src/address');
var dataUtils = require('../../src/data_utils');

describe('ueData_utils', function() {
  describe('#setStateChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.setStateChoicesUEDataInMeF).to.be.a('function');
    });
    it('should set the state list for returns.IRS1040.calculatedUEData.assetStateChoices', function () {
      var stateChoices = address.getStateChoices();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setStateChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetStateChoices');
      expect(mefChoices).to.deep.equal(stateChoices);
    });
  });

  describe('#removeStateChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.removeStateChoicesUEDataInMeF).to.be.a('function');
    });
    it('should remove state list for returns.IRS1040.calculatedUEData.assetStateChoices', function () {
      var choices = address.getStateChoices();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setStateChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetStateChoices');
      expect(mefChoices).to.deep.equal(choices);
      mefData = ueData_utils.removeStateChoicesUEDataInMeF(mefData);
      mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetStateChoices');
      expect(mefChoices).to.deep.equal("");

    });

  });

  describe('#setCountryChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.setCountryChoicesUEDataInMeF).to.be.a('function');
    });
    it('should set the country list for returns.IRS1040.calculatedUEData.assetCountryChoices', function () {
      var choices = address.getCountries();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setCountryChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetCountryChoices');
      expect(mefChoices).to.deep.equal(choices);
    });
  });

  describe('#removeCountryChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.removeCountryChoicesUEDataInMeF).to.be.a('function');
    });
    it('should remove Country list for returns.IRS1040.calculatedUEData.assetCountryChoices', function () {
      var choices = address.getCountries();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setCountryChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetCountryChoices');
      expect(mefChoices).to.deep.equal(choices);
      mefData = ueData_utils.removeCountryChoicesUEDataInMeF(mefData);
      mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetCountryChoices');
      expect(mefChoices).to.deep.equal("");

    });
  });

  describe('#setForeignPossessionChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.setForeignPossessionChoicesUEDataInMeF).to.be.a('function');
    });
    it('should set the Foreign Possession list for returns.IRS1040.calculatedUEData.assetForeignPossessionChoices', function () {
      var choices = address.getForeignPossessionChoices();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setForeignPossessionChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetForeignPossessionChoices');
      expect(mefChoices).to.deep.equal(choices);
    });
  });

  describe('#removeForeignPossessionChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.removeForeignPossessionChoicesUEDataInMeF).to.be.a('function');
    });
    it('should remove Foreign Possession list for returns.IRS1040.calculatedUEData.assetForeignPossessionChoices', function () {
      var choices = address.getForeignPossessionChoices();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setForeignPossessionChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetForeignPossessionChoices');
      expect(mefChoices).to.deep.equal(choices);
      mefData = ueData_utils.removeForeignPossessionChoicesUEDataInMeF(mefData);
      mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetForeignPossessionChoices');
      expect(mefChoices).to.deep.equal("");

    });
  });

  describe('#setMailingAddressTypeChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.setMailingAddressTypeChoicesUEDataInMeF).to.be.a('function');
    });
    it('should set the Mailing list for returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices', function () {
      var choices = address.getMailingAddressTypeChoices();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setMailingAddressTypeChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices');
      expect(mefChoices).to.deep.equal(choices);
    });
  });

  describe('#removeMailingAddressTypeChoicesUEDataInMeF', function () {
    it('should be a function', function () {
      expect(ueData_utils.removeMailingAddressTypeChoicesUEDataInMeF).to.be.a('function');
    });
    it('should remove Mailing list for returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices', function () {
      var choices = address.getMailingAddressTypeChoices();
      var mefData = { returns: { IRS1040: { Return: { ReturnHeader: { Filer: { SpouseSSN: '123-12-1234'}}}}}};
      mefData = ueData_utils.setMailingAddressTypeChoicesUEDataInMeF(mefData);
      var mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices');
      expect(mefChoices).to.deep.equal(choices);
      mefData = ueData_utils.removeMailingAddressTypeChoicesUEDataInMeF(mefData);
      mefChoices = dataUtils.getPathValue(mefData, 'returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices');
      expect(mefChoices).to.deep.equal("");

    });
  });

});

