(function() {
  'use strict';

  angular
    .module('eServices')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
