'use strict';

/**
 * ueData Utils Module
 * @module ueData_utils
 */


var _ = require('underscore-contrib');
var dataUtils = require('./data_utils');
var address = require('./address');

/**
 * Sets the following returns.IRS1040.calculatedUEData.stateChoices to the address states.
 * @param mef - mef model
 */
function setStateChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetStateChoices', address.getStateChoices());
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.stateChoices to empty.
 * @param mef - mef model
 */
function removeStateChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetStateChoices', "");
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.stateChoices to the address states.
 * @param mef - mef model
 */
function setCountryChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetCountryChoices', address.getCountries());
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.stateChoices to empty.
 * @param mef - mef model
 */
function removeCountryChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetCountryChoices', "");
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.assetForeignPossessionChoices to the address states.
 * @param mef - mef model
 */
function setForeignPossessionChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetForeignPossessionChoices', address.getForeignPossessionChoices());
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.assetForeignPossessionChoices to empty.
 * @param mef - mef model
 */
function removeForeignPossessionChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetForeignPossessionChoices', "");
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.assetForeignPossessionChoices to the address states.
 * @param mef - mef model
 */
function setMailingAddressTypeChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices', address.getMailingAddressTypeChoices());
  return mef;
}

/**
 * Sets the following returns.IRS1040.calculatedUEData.assetForeignPossessionChoices to empty.
 * @param mef - mef model
 */
function removeMailingAddressTypeChoicesUEDataInMeF( mef) {
  dataUtils.setPathValue(mef, 'returns.IRS1040.calculatedUEData.assetMailingAddressTypeChoices', "");
  return mef;
}


module.exports = {
  setStateChoicesUEDataInMeF: setStateChoicesUEDataInMeF,
  removeStateChoicesUEDataInMeF: removeStateChoicesUEDataInMeF,
  setCountryChoicesUEDataInMeF: setCountryChoicesUEDataInMeF,
  removeCountryChoicesUEDataInMeF:removeCountryChoicesUEDataInMeF,
  setForeignPossessionChoicesUEDataInMeF:setForeignPossessionChoicesUEDataInMeF,
  removeForeignPossessionChoicesUEDataInMeF:removeForeignPossessionChoicesUEDataInMeF,
  setMailingAddressTypeChoicesUEDataInMeF:setMailingAddressTypeChoicesUEDataInMeF,
  removeMailingAddressTypeChoicesUEDataInMeF:removeMailingAddressTypeChoicesUEDataInMeF
};
