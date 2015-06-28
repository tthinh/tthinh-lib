var address = require('../../src/address');
var expect  = require('chai').expect;
var _ = require('underscore-contrib');

describe('Address', function() {

  describe('#getStateChoices', function () {
    it('should be a function', function () {
      expect(address.getStateChoices).to.be.a('function');
    });
    it('should return all 52 states', function() {
      var stateChoices = address.getStateChoices();
      expect((stateChoices)).to.be.a('Array');
      expect(stateChoices.length).to.equal(52);
    });
    it('should return states in form of abbr and name', function() {
      var stateChoices = address.getStateChoices();
      var stateAL = {"abbr": "AL", "name":  "Alabama"};
      var stateFC = {"abbr": "FC", "name": "Foreign or U.S. Possession"};
      expect(stateChoices[0]).to.deep.equal(stateAL);
      expect(stateChoices[51]).to.deep.equal(stateFC);
    });
  });

  describe('#getCountryChoices', function () {
    it('should be a function', function () {
      expect(address.getStateChoices).to.be.a('function');
    });
    it('should return all 259 countries ', function() {
      var countryChoices = address.getCountries();
      expect(_.isArray(address.getCountries())).to.true;
      expect(countryChoices.length).to.equal(259);
    });
    it('should return countries in form of abbr and name', function() {
      var countryChoices = address.getCountries();
      var countryEmpty = {"abbr":"", "name":"(not applicable)"};
      var countryOC = {"abbr":"OC", "name":"Other Countries"};
      expect(countryChoices[0]).to.deep.equal(countryEmpty);
      expect(countryChoices[258]).to.deep.equal(countryOC);
    });
  });

  describe('#getStateNameByAbbr', function () {
    it('should be a function', function () {
      expect(address.getStateChoices).to.be.a('function');
    });
    it('should return State Name', function() {
      expect(address.getStateNameByAbbr("AL")).to.equal("Alabama");
      expect(address.getStateNameByAbbr("FC")).to.equal("Foreign or U.S. Possession");
    });
    it('should return State Name from lowercase', function() {
      expect(address.getStateNameByAbbr("al")).to.equal("Alabama");
    });
    it('should return Null if cannot find State', function() {
      expect(address.getStateNameByAbbr("AL2")).to.equal('');
    });
    it('should return Null is empty abbr', function() {
      var emptyAbbr;
      expect(address.getStateNameByAbbr("")).to.equal('');
      expect(address.getStateNameByAbbr(emptyAbbr)).to.equal('');
    });
  });


  describe('#getForeignPossessionChoices', function () {
    it('should be a function', function () {
      expect(address.getForeignPossessionChoices).to.be.a('function');
    });
    it('should return all 259 countries ', function() {
      var choices = address.getForeignPossessionChoices();
      expect(_.isArray(address.getForeignPossessionChoices())).to.true;
      expect(choices.length).to.equal(8);
    });
    it('should return countries in form of abbr and name', function() {
      var tests = [
        {
          "abbr": "AS",
          "name": "American Samoa"
        },
        {
          "abbr": "FM",
          "name": "Federated States of Micronesia"
        },
        {
          "abbr": "GU",
          "name": "Guam"
        },
        {
          "abbr": "MH",
          "name": "Marshall Islands"
        },
        {
          "abbr": "MP",
          "name": "Northern Mariana Islands"
        },
        {
          "abbr": "PW",
          "name": "Palau"
        },
        {
          "abbr": "PR",
          "name": "Puerto Rico"
        },
        {
          "abbr": "VI",
          "name": "U.S. Virgin Islands"
        }
      ];

      var choices = address.getForeignPossessionChoices();
      expect(choices).to.deep.equal(tests);
    });
  });

  describe('#getMailingAddressTypeChoices', function () {
    it('should be a function', function () {
      expect(address.getMailingAddressTypeChoices).to.be.a('function');
    });
    it('should return all 4 choices ', function() {
      var choices = address.getMailingAddressTypeChoices();
      expect(_.isArray(address.getMailingAddressTypeChoices())).to.true;
      expect(choices.length).to.equal(4);
    });
    it('should return countries in form of abbr and name', function() {
      var tests = [
        {
          "abbr": "US",
          "name": "U.S. address"
        },
        {
          "abbr": "MILITARYPO",
          "name": "Military (APO, FPO, or DPO)"
        },
        {
          "abbr": "FC",
          "name": "Foreign country"
        },
        {
          "abbr": "USPOS",
          "name": "U.S. possession"
        }
      ];

      var choices = address.getMailingAddressTypeChoices();
      expect(choices).to.deep.equal(tests);
    });
  });

});
