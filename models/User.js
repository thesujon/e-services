/**
 * Created by sajibsarkar on 12/1/16.
 */


var mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    Schema = mongoose.Schema;


var userSchema = new Schema({
    APPLNO                    : {type: String},
    TF_FTF_CATEGORY           : {type: String},
    TF_FTF_CATEGORY_DESC      : {type: String},
    TF_FTF_TERM               : {type: String},
    TF_FTF_TERM_DESC          : {type: String},
    TF_DOC_TYPE               : {type: String},
    TF_DOC_TYPE_DESC          : {type: String},
    TF_DOC_NO                 : {type: String},
    TF_DOC_ISSUE_DATE         : {type: String},
    TF_DOC_CTRY_ISSUE         : {type: String},
    TF_DOC_CTRY_ISSUE_DESC    : {type: String},
    TF_DOC_EXP_DATE           : {type: String},
    TF_NAME                   : {type: String},
    TF_PRINT_NAME             : {type: String},
    TF_BIRTH_DATE             : {type: String},
    TF_BIRTH_PLACE            : {type: String},
    TF_BIRTH_PLACE_DESC       : {type: String},
    TF_SEX                    : {type: String},
    TF_SEX_DESC               : {type: String},
    TF_CITIZENSHIP            : {type: String},
    TF_CITIZENSHIP_DESC       : {type: String},
    TF_ADDRESS1               : {type: String},
    TF_ADDRESS2               : {type: String},
    TF_POSTCODE               : {type: String},
    TF_CITY                   : {type: String},
    TF_STATE                  : {type: String},
    TF_STATE_DESC             : {type: String},
    TF_OCCUPATION             : {type: String},
    TF_OCCUPATION_DESC        : {type: String},
    TF_CTRY_RESIDENT          : {type: String},
    TF_CTRY_RESIDENT_DESC     : {type: String},
    TF_EMAIL                  : {type: String},
    TF_PHONE                  : {type: String},
    nameCd                    : {type: String},
    TF_PREV_NAME              : {type: String},
    visaCd                    : {type: String},
    TF_VISA_TYPE              : {type: String},
    TF_VISA_TYPE_DESC         : {type: String},
    TF_VISA_NO                : {type: String},
    TF_VISA_EXP_DATE          : {type: String},
    TF_VISA_INTD_STAY         : {type: String},
    passCd                    : {type: String},
    TF_PASS_TYPE              : {type: String},
    TF_PASS_TYPE_DESC         : {type: String},
    TF_PASS_NO                : {type: String},
    TF_PASS_EXP_DATE          : {type: String},
    TF_PASS_INTD_STAY         : {type: String},
    TF_SPONSOR_NAME           : {type: String},
    TF_SPONSOR_ADDR1          : {type: String},
    TF_SPONSOR_ADDR2          : {type: String},
    TF_SPONSOR_PCODE          : {type: String},
    TF_SPONSOR_CITY           : {type: String},
    TF_SPONSOR_STATE          : {type: String},
    TF_SPONSOR_STATE_DESC     : {type: String},
    TF_SPONSOR_PHONE          : {type: String},
    TF_SPONSOR_FAXNO          : {type: String},
    TF_BUSINESS_TYPE          : {type: String},
    txnDetail                 : {type: String}
});


var user = mongoose.model('user', userSchema);

module.exports = user;