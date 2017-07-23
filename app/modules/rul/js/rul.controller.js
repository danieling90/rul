(function () {
    'use strict';

    angular
        .module('rul.module')
        .controller('rul.controller', rul);

    rul.$inject = [];

    function rul() {
        var vm = this;
        
        vm.test = "holita";
    }
})();
