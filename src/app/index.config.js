(function() {
  'use strict';

  angular
    .module('loopbackBrowser')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastr) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastr.options.timeOut = 3000;
    toastr.options.positionClass = 'toast-bottom-left';
    toastr.options.preventDuplicates = true;
    toastr.options.progressBar = true;
  }

})();
