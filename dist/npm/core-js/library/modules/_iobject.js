'use strict';
(function(module,require){var exports=module.exports={};
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof.js');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
})(module,require);