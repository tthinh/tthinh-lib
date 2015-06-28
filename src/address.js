

'use strict';

var _ = require('underscore-contrib');


/**
 * Address Module
 * @module address
 */

/**
 * Returns a list of StateChoices
 * @returns List of StateChoices
 */
function getStateChoices() {
  var stateChoices = [
    {
      "abbr": "AL",
      "name":  "Alabama"
    },
    {
      "abbr": "AK",
      "name": "Alaska"
    },
    {
      "abbr": "AZ",
      "name": "Arizona"
    },
    {
      "abbr": "AR",
      "name": "Arkansas"
    },
    {
      "abbr": "CA",
      "name": "California"
    },
    {
      "abbr": "CO",
      "name": "Colorado"
    },
    {
      "abbr": "CT",
      "name": "Connecticut"
    },
    {
      "abbr": "DE",
      "name": "Delaware"
    },
    {
      "abbr": "DC",
      "name": "District of Columbia"
    },
    {
      "abbr": "FL",
      "name": "Florida"
    },
    {
      "abbr": "GA",
      "name": "Georgia"
    },
    {
      "abbr": "HI",
      "name": "Hawaii"
    },
    {
      "abbr": "ID",
      "name": "Idaho"
    },
    {
      "abbr": "IL",
      "name": "Illinois"
    },
    {
      "abbr": "IN",
      "name": "Indiana"
    },
    {
      "abbr": "IA",
      "name": "Iowa"
    },
    {
      "abbr": "KS",
      "name": "Kansas"
    },
    {
      "abbr": "KY",
      "name": "Kentucky"
    },
    {
      "abbr": "LA",
      "name": "Louisiana"
    },
    {
      "abbr": "ME",
      "name": "Maine"
    },
    {
      "abbr": "MD",
      "name": "Maryland"
    },
    {
      "abbr": "MA",
      "name": "Massachusetts"
    },
    {
      "abbr": "MI",
      "name": "Michigan"
    },
    {
      "abbr": "MN",
      "name": "Minnesota"
    },
    {
      "abbr": "MS",
      "name": "Mississippi"
    },
    {
      "abbr": "MO",
      "name": "Missouri"
    },
    {
      "abbr": "MT",
      "name": "Montana"
    },
    {
      "abbr": "NE",
      "name": "Nebraska"
    },
    {
      "abbr": "NV",
      "name": "Nevada"
    },
    {
      "abbr": "NH",
      "name": "New Hampshire"
    },
    {
      "abbr": "NJ",
      "name": "New Jersey"
    },
    {
      "abbr": "NM",
      "name": "New Mexico"
    },
    {
      "abbr": "NY",
      "name": "New York"
    },
    {
      "abbr": "NC",
      "name": "North Carolina"
    },
    {
      "abbr": "ND",
      "name": "North Dakota"
    },
    {
      "abbr": "OH",
      "name": "Ohio"
    },
    {
      "abbr": "OK",
      "name": "Oklahoma"
    },
    {
      "abbr": "OR",
      "name": "Oregon"
    },
    {
      "abbr": "PA",
      "name": "Pennsylvania"
    },
    {
      "abbr": "RI",
      "name": "Rhode Island"
    },
    {
      "abbr": "SC",
      "name": "South Carolina"
    },
    {
      "abbr": "SD",
      "name": "South Dakota"
    },
    {
      "abbr": "TN",
      "name": "Tennessee"
    },
    {
      "abbr": "TX",
      "name": "Texas"
    },
    {
      "abbr": "UT",
      "name": "Utah"
    },
    {
      "abbr": "VT",
      "name": "Vermont"
    },
    {
      "abbr": "VA",
      "name": "Virginia"
    },
    {
      "abbr": "WA",
      "name": "Washington"
    },
    {
      "abbr": "WV",
      "name": "West Virginia"
    },
    {
      "abbr": "WI",
      "name": "Wisconsin"
    },
    {
      "abbr": "WY",
      "name": "Wyoming"
    },
    {
      "abbr": "FC",
      "name": "Foreign or U.S. Possession"
    }
  ];
  return stateChoices;
};

/**
 * Returns a list of Countries with name and abbreviations
 * @returns List of Countries
 */
function getCountries() {
  var countryChoices = [
    {
      "abbr":"",
      "name":"(not applicable)"
    },
    {
      "abbr":"AF",
      "name":"Afghanistan"
    },
    {
      "abbr":"AX",
      "name":"Akrotiri"
    },
    {
      "abbr":"AL",
      "name":"Albania"
    },
    {
      "abbr":"AG",
      "name":"Algeria"
    },
    {
      "abbr":"AQ",
      "name":"American Samoa"
    },
    {
      "abbr":"AN",
      "name":"Andorra"
    },
    {
      "abbr":"AO",
      "name":"Angola"
    },
    {
      "abbr":"AV",
      "name":"Anguilla"
    },
    {
      "abbr":"AY",
      "name":"Antarctica "
    },
    {
      "abbr":"AC",
      "name":"Antigua and Barbuda"
    },
    {
      "abbr":"AR",
      "name":"Argentina"
    },
    {
      "abbr":"AM",
      "name":"Armenia"
    },
    {
      "abbr":"AA",
      "name":"Aruba"
    },
    {
      "abbr":"AT",
      "name":"Ashmore and Cartier Islands"
    },
    {
      "abbr":"AS",
      "name":"Australia"
    },
    {
      "abbr":"AU",
      "name":"Austria"
    },
    {
      "abbr":"AJ",
      "name":"Azerbaijan"
    },
    {
      "abbr":"BF",
      "name":"Bahamas"
    },
    {
      "abbr":"BA",
      "name":"Bahrain"
    },
    {
      "abbr":"FQ",
      "name":"Baker Island "
    },
    {
      "abbr":"BG",
      "name":"Bangladesh"
    },
    {
      "abbr":"BB",
      "name":"Barbados "
    },
    {
      "abbr":"BO",
      "name":"Belarus"
    },
    {
      "abbr":"BE",
      "name":"Belgium"
    },
    {
      "abbr":"BH",
      "name":"Belize"
    },
    {
      "abbr":"BN",
      "name":"Benin"
    },
    {
      "abbr":"BD",
      "name":"Bermuda"
    },
    {
      "abbr":"BT",
      "name":"Bhutan"
    },
    {
      "abbr":"BL",
      "name":"Bolivia"
    },
    {
      "abbr":"BK",
      "name":"Bosnia-Herzegovina"
    },
    {
      "abbr":"BC",
      "name":"Botswana"
    },
    {
      "abbr":"BV",
      "name":"Bouvet Island"
    },
    {
      "abbr":"BR",
      "name":"Brazil"
    },
    {
      "abbr":"IO",
      "name":"British Indian Ocean Territory"
    },
    {
      "abbr":"VI",
      "name":"British Virgin Islands"
    },
    {
      "abbr":"BX",
      "name":"Brunei"
    },
    {
      "abbr":"BU",
      "name":"Bulgaria"
    },
    {
      "abbr":"UV",
      "name":"Burkina Faso"
    },
    {
      "abbr":"BM",
      "name":"Burma"
    },
    {
      "abbr":"BY",
      "name":"Burundi"
    },
    {
      "abbr":"CB",
      "name":"Cambodia"
    },
    {
      "abbr":"CM",
      "name":"Cameroon"
    },
    {
      "abbr":"CA",
      "name":"Canada "
    },
    {
      "abbr":"CV",
      "name":"Cape Verde"
    },
    {
      "abbr":"CJ",
      "name":"Cayman Islands"
    },
    {
      "abbr":"CT",
      "name":"Central African Republic"
    },
    {
      "abbr":"CD",
      "name":"Chad"
    },
    {
      "abbr":"CI",
      "name":"Chile"
    },
    {
      "abbr":"CH",
      "name":"China "
    },
    {
      "abbr":"KT",
      "name":"Christmas Island"
    },
    {
      "abbr":"IP",
      "name":"Clipperton Island"
    },
    {
      "abbr":"CK",
      "name":"Cocos (Keeling) Islands"
    },
    {
      "abbr":"CO",
      "name":"Colombia"
    },
    {
      "abbr":"CN",
      "name":"Comoros "
    },
    {
      "abbr":"CF",
      "name":"Congo (Brazzaville)"
    },
    {
      "abbr":"CG",
      "name":"Congo (Kinshasa)"
    },
    {
      "abbr":"CW",
      "name":"Cook Islands"
    },
    {
      "abbr":"CR",
      "name":"Coral Sea Islands"
    },
    {
      "abbr":"CS",
      "name":"Costa Rica"
    },
    {
      "abbr":"IV",
      "name":"Cote D'Ivoire (Ivory Coast)"
    },
    {
      "abbr":"HR",
      "name":"Croatia"
    },
    {
      "abbr":"CU",
      "name":"Cuba"
    },
    {
      "abbr":"UC",
      "name":"Curacao"
    },
    {
      "abbr":"CY",
      "name":"Cyprus"
    },
    {
      "abbr":"EZ",
      "name":"Czech Republic"
    },
    {
      "abbr":"DA",
      "name":"Denmark"
    },
    {
      "abbr":"DX",
      "name":"Dhekelia"
    },
    {
      "abbr":"DJ",
      "name":"Djibouti"
    },
    {
      "abbr":"DO",
      "name":"Dominica"
    },
    {
      "abbr":"DR",
      "name":"Dominican Republic"
    },
    {
      "abbr":"TT",
      "name":"East Timor "
    },
    {
      "abbr":"EC",
      "name":"Ecuador"
    },
    {
      "abbr":"EG",
      "name":"Egypt"
    },
    {
      "abbr":"ES",
      "name":"El Salvador"
    },
    {
      "abbr":"EK",
      "name":"Equatorial Guinea"
    },
    {
      "abbr":"ER",
      "name":"Eritrea"
    },
    {
      "abbr":"EN",
      "name":"Estonia"
    },
    {
      "abbr":"ET",
      "name":"Ethiopia"
    },
    {
      "abbr":"FK",
      "name":"Falkland Islands (Islas Malvinas)"
    },
    {
      "abbr":"FO",
      "name":"Faroe Islands"
    },
    {
      "abbr":"FM",
      "name":"Federated States of Micronesia"
    },
    {
      "abbr":"FJ",
      "name":"Fiji"
    },
    {
      "abbr":"FI",
      "name":"Finland"
    },
    {
      "abbr":"FR",
      "name":"France"
    },
    {
      "abbr":"FP",
      "name":"French Polynesia"
    },
    {
      "abbr":"FS",
      "name":"French Southern and Antarctic Lands"
    },
    {
      "abbr":"GB",
      "name":"Gabon"
    },
    {
      "abbr":"GA",
      "name":"The Gambia"
    },
    {
      "abbr":"GG",
      "name":"Georgia"
    },
    {
      "abbr":"GM",
      "name":"Germany"
    },
    {
      "abbr":"GH",
      "name":"Ghana"
    },
    {
      "abbr":"GI",
      "name":"Gibraltar"
    },
    {
      "abbr":"GR",
      "name":"Greece"
    },
    {
      "abbr":"GL",
      "name":"Greenland"
    },
    {
      "abbr":"GJ",
      "name":"Grenada"
    },
    {
      "abbr":"GQ",
      "name":"Guam"
    },
    {
      "abbr":"GT",
      "name":"Guatemala"
    },
    {
      "abbr":"GK",
      "name":"Guernsey"
    },
    {
      "abbr":"GV",
      "name":"Guinea"
    },
    {
      "abbr":"PU",
      "name":"Guinea-Bissau"
    },
    {
      "abbr":"GY",
      "name":"Guyana"
    },
    {
      "abbr":"HA",
      "name":"Haiti"
    },
    {
      "abbr":"HM",
      "name":"Heard Island and McDonald Islands"
    },
    {
      "abbr":"VT",
      "name":"Holy See"
    },
    {
      "abbr":"HO",
      "name":"Honduras"
    },
    {
      "abbr":"HK",
      "name":"Hong Kong"
    },
    {
      "abbr":"HQ",
      "name":"Howland Island "
    },
    {
      "abbr":"HU",
      "name":"Hungary"
    },
    {
      "abbr":"IC",
      "name":"Iceland"
    },
    {
      "abbr":"IN",
      "name":"India"
    },
    {
      "abbr":"ID",
      "name":"Indonesia"
    },
    {
      "abbr":"IR",
      "name":"Iran"
    },
    {
      "abbr":"IZ",
      "name":"Iraq"
    },
    {
      "abbr":"EI",
      "name":"Ireland"
    },
    {
      "abbr":"IS",
      "name":"Israel"
    },
    {
      "abbr":"IT",
      "name":"Italy"
    },
    {
      "abbr":"JM",
      "name":"Jamaica"
    },
    {
      "abbr":"JN",
      "name":"Jan Mayen"
    },
    {
      "abbr":"JA",
      "name":"Japan"
    },
    {
      "abbr":"DQ",
      "name":"Jarvis Island"
    },
    {
      "abbr":"JE",
      "name":"Jersey"
    },
    {
      "abbr":"JQ",
      "name":"Johnston Atoll"
    },
    {
      "abbr":"JO",
      "name":"Jordan"
    },
    {
      "abbr":"KZ",
      "name":"Kazakhstan"
    },
    {
      "abbr":"KE",
      "name":"Kenya"
    },
    {
      "abbr":"KQ",
      "name":"Kingman Reef"
    },
    {
      "abbr":"KR",
      "name":"Kiribati"
    },
    {
      "abbr":"KN",
      "name":"Korea, North"
    },
    {
      "abbr":"KS",
      "name":"Korea, South"
    },
    {
      "abbr":"KV",
      "name":"Kosovo"
    },
    {
      "abbr":"KU",
      "name":"Kuwait"
    },
    {
      "abbr":"KG",
      "name":"Kyrgyzstan"
    },
    {
      "abbr":"LA",
      "name":"Laos"
    },
    {
      "abbr":"LG",
      "name":"Latvia"
    },
    {
      "abbr":"LE",
      "name":"Lebanon"
    },
    {
      "abbr":"LT",
      "name":"Lesotho"
    },
    {
      "abbr":"LI",
      "name":"Liberia"
    },
    {
      "abbr":"LY",
      "name":"Libya"
    },
    {
      "abbr":"LS",
      "name":"Liechtenstein"
    },
    {
      "abbr":"LH",
      "name":"Lithuania"
    },
    {
      "abbr":"LU",
      "name":"Luxembourg "
    },
    {
      "abbr":"MC",
      "name":"Macau"
    },
    {
      "abbr":"MK",
      "name":"Macedonia"
    },
    {
      "abbr":"MA",
      "name":"Madagascar"
    },
    {
      "abbr":"MI",
      "name":"Malawi"
    },
    {
      "abbr":"MY",
      "name":"Malaysia"
    },
    {
      "abbr":"MV",
      "name":"Maldives"
    },
    {
      "abbr":"ML",
      "name":"Mali"
    },
    {
      "abbr":"MT",
      "name":"Malta"
    },
    {
      "abbr":"IM",
      "name":"Man, Isle of"
    },
    {
      "abbr":"RM",
      "name":"Marshall Islands"
    },
    {
      "abbr":"MR",
      "name":"Mauritania"
    },
    {
      "abbr":"MP",
      "name":"Mauritius"
    },
    {
      "abbr":"MX",
      "name":"Mexico"
    },
    {
      "abbr":"MQ",
      "name":"Midway Islands"
    },
    {
      "abbr":"MD",
      "name":"Moldova"
    },
    {
      "abbr":"MN",
      "name":"Monaco"
    },
    {
      "abbr":"MG",
      "name":"Mongolia "
    },
    {
      "abbr":"MJ",
      "name":"Montenegro"
    },
    {
      "abbr":"MH",
      "name":"Montserrat"
    },
    {
      "abbr":"MO",
      "name":"Morocco"
    },
    {
      "abbr":"MZ",
      "name":"Mozambique"
    },
    {
      "abbr":"WA",
      "name":"Namibia"
    },
    {
      "abbr":"NR",
      "name":"Nauru"
    },
    {
      "abbr":"BQ",
      "name":"Navassa Island"
    },
    {
      "abbr":"NP",
      "name":"Nepal"
    },
    {
      "abbr":"NL",
      "name":"Netherlands"
    },
    {
      "abbr":"NC",
      "name":"New Caledonia"
    },
    {
      "abbr":"NZ",
      "name":"New Zealand"
    },
    {
      "abbr":"NU",
      "name":"Nicaragua"
    },
    {
      "abbr":"NG",
      "name":"Niger"
    },
    {
      "abbr":"NI",
      "name":"Nigeria"
    },
    {
      "abbr":"NE",
      "name":"Niue "
    },
    {
      "abbr":"NF",
      "name":"Norfolk Island"
    },
    {
      "abbr":"CQ",
      "name":"Northern Mariana Islands"
    },
    {
      "abbr":"NO",
      "name":"Norway"
    },
    {
      "abbr":"MU",
      "name":"Oman"
    },
    {
      "abbr":"PK",
      "name":"Pakistan"
    },
    {
      "abbr":"PS",
      "name":"Palau"
    },
    {
      "abbr":"LQ",
      "name":"Palmyra Atoll"
    },
    {
      "abbr":"PM",
      "name":"Panama "
    },
    {
      "abbr":"PP",
      "name":"Papua-New Guinea"
    },
    {
      "abbr":"PF",
      "name":"Paracel Islands"
    },
    {
      "abbr":"PA",
      "name":"Paraguay"
    },
    {
      "abbr":"PE",
      "name":"Peru"
    },
    {
      "abbr":"RP",
      "name":"Philippines"
    },
    {
      "abbr":"PC",
      "name":"Pitcairn Islands"
    },
    {
      "abbr":"PL",
      "name":"Poland"
    },
    {
      "abbr":"PO",
      "name":"Portugal "
    },
    {
      "abbr":"RQ",
      "name":"Puerto Rico"
    },
    {
      "abbr":"QA",
      "name":"Qatar"
    },
    {
      "abbr":"RO",
      "name":"Romania"
    },
    {
      "abbr":"RS",
      "name":"Russia"
    },
    {
      "abbr":"RW",
      "name":"Rwanda"
    },
    {
      "abbr":"TB",
      "name":"Saint Barthelemy"
    },
    {
      "abbr":"RN",
      "name":"Saint Martin"
    },
    {
      "abbr":"WS",
      "name":"Samoa"
    },
    {
      "abbr":"SM",
      "name":"San Marino"
    },
    {
      "abbr":"TP",
      "name":"Sao Tome and Principe"
    },
    {
      "abbr":"SA",
      "name":"Saudi Arabia"
    },
    {
      "abbr":"SG",
      "name":"Senegal"
    },
    {
      "abbr":"RI",
      "name":"Serbia"
    },
    {
      "abbr":"SE",
      "name":"Seychelles           "
    },
    {
      "abbr":"SL",
      "name":"Sierra Leone"
    },
    {
      "abbr":"SN",
      "name":"Singapore"
    },
    {
      "abbr":"NN",
      "name":"Sint Maarten"
    },
    {
      "abbr":"LO",
      "name":"Slovakia"
    },
    {
      "abbr":"SI",
      "name":"Slovenia"
    },
    {
      "abbr":"BP",
      "name":"Solomon Islands"
    },
    {
      "abbr":"SO",
      "name":"Somalia"
    },
    {
      "abbr":"SF",
      "name":"South Africa"
    },
    {
      "abbr":"SX",
      "name":"South Georgia and The S Sandwich Islands"
    },
    {
      "abbr":"OD",
      "name":"South Sudan"
    },
    {
      "abbr":"SP",
      "name":"Spain"
    },
    {
      "abbr":"PG",
      "name":"Spratly Islands          "
    },
    {
      "abbr":"CE",
      "name":"Sri Lanka"
    },
    {
      "abbr":"SH",
      "name":"St. Helena"
    },
    {
      "abbr":"SC",
      "name":"St. Kitts and Nevis"
    },
    {
      "abbr":"ST",
      "name":"St. Lucia Island"
    },
    {
      "abbr":"SB",
      "name":"St. Pierre and Miquelon"
    },
    {
      "abbr":"VC",
      "name":"St. Vincent and Grenadines"
    },
    {
      "abbr":"SU",
      "name":"Sudan"
    },
    {
      "abbr":"NS",
      "name":"Suriname"
    },
    {
      "abbr":"SV",
      "name":"Svalbard"
    },
    {
      "abbr":"WZ",
      "name":"Swaziland"
    },
    {
      "abbr":"SW",
      "name":"Sweden "
    },
    {
      "abbr":"SZ",
      "name":"Switzerland"
    },
    {
      "abbr":"SY",
      "name":"Syria"
    },
    {
      "abbr":"TW",
      "name":"Taiwan"
    },
    {
      "abbr":"TI",
      "name":"Tajikistan"
    },
    {
      "abbr":"TZ",
      "name":"Tanzania"
    },
    {
      "abbr":"TH",
      "name":"Thailand"
    },
    {
      "abbr":"TO",
      "name":"Togo"
    },
    {
      "abbr":"TL",
      "name":"Tokelau "
    },
    {
      "abbr":"TN",
      "name":"Tonga"
    },
    {
      "abbr":"TD",
      "name":"Trinidad and Tobago"
    },
    {
      "abbr":"TS",
      "name":"Tunisia"
    },
    {
      "abbr":"TU",
      "name":"Turkey"
    },
    {
      "abbr":"TX",
      "name":"Turkmenistan"
    },
    {
      "abbr":"TK",
      "name":"Turks and Caicos Islands"
    },
    {
      "abbr":"TV",
      "name":"Tuvalu"
    },
    {
      "abbr":"UG",
      "name":"Uganda"
    },
    {
      "abbr":"UP",
      "name":"Ukraine"
    },
    {
      "abbr":"AE",
      "name":"United Arab Emirates"
    },
    {
      "abbr":"UK",
      "name":"United Kingdom"
    },
    {
      "abbr":"UY",
      "name":"Uruguay"
    },
    {
      "abbr":"UZ",
      "name":"Uzbekistan"
    },
    {
      "abbr":"NH",
      "name":"Vanuatu"
    },
    {
      "abbr":"VE",
      "name":"Venezuela"
    },
    {
      "abbr":"VM",
      "name":"Vietnam"
    },
    {
      "abbr":"VQ",
      "name":"Virgin Islands"
    },
    {
      "abbr":"WQ",
      "name":"Wake Island"
    },
    {
      "abbr":"WF",
      "name":"Wallis and Futuna"
    },
    {
      "abbr":"WI",
      "name":"Western Sahara"
    },
    {
      "abbr":"YM",
      "name":"Yemen (Aden)"
    },
    {
      "abbr":"ZA",
      "name":"Zambia"
    },
    {
      "abbr":"ZI",
      "name":"Zimbabwe"
    },
    {
      "abbr":"OC",
      "name":"Other Countries"
    }
  ];
  return countryChoices;
};


/**
 * Returns a list of US foreign Possession List
 * @returns List of US foreign Possession List
 */
function getForeignPossessionChoices() {
  var foreignPossessionChoices = [
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
    }];
  return foreignPossessionChoices;

}

/**
 * Returns a list of Mailing address types with name and abbreviations
 * @returns List of Mailing address types
 */
function getMailingAddressTypeChoices() {
  var mailingAddressTypechoices = [
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
  return mailingAddressTypechoices;
}


/**
 * Get the State name from the state abbr
 * @param abbr - abbreviation of state. ex. NY
 * @returns Name of State
 */
function getStateNameByAbbr(abbrId) {
  var stateName = "";
  var stateChoices = getStateChoices();
  if(abbrId) {
    var foundState = _.find(stateChoices, function(stateItem){
      return abbrId.toUpperCase() === _.property('abbr')(stateItem);
    });
    if(foundState){
      stateName = foundState.name;
    }
  }
  return stateName;
}

module.exports = {
  getStateChoices: getStateChoices,
  getStateNameByAbbr: getStateNameByAbbr,
  getCountries: getCountries,
  getForeignPossessionChoices:getForeignPossessionChoices,
  getMailingAddressTypeChoices:getMailingAddressTypeChoices
};
