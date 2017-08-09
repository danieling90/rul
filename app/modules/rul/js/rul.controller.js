(function () {
    'use strict';

    angular
        .module('rul.module')
        .controller('rul.controller', rul);

    rul.$inject = [];

    function rul() {
        var vm = this;

        vm.numbers = '10,11,12,15,36,7,11,5,6,23,19,8,0,02,31,21,25';
        vm.numbersPlayed = [];
        vm.numbersPlayedDesc = [];
        
        vm.countBlack = 0;
        vm.countRed = 0;
        vm.countGreen = 0;

        vm.countDoubleCero = 0;
        vm.countCero = 0;
        vm.countOrphan = 0;

        vm.process = function () {
            vm.numbersPlayed = [];
            vm.numbersPlayedDesc = [];
            var arrayNumbers = vm.numbers.split(',');

            angular.forEach(arrayNumbers, function (id) {
                var number = _.find(numbers, function (obj) { return obj.Id === parseInt(id); });
                if (number !== undefined) {
                    vm.numbersPlayed.push(number);
                }
            });

            var obj = _.groupBy(vm.numbersPlayed, function (item) {
                return item.Id;
            });

            vm.countBlack = countByProperty('Color', 'black');
            vm.countRed = countByProperty('Color', 'red');
            vm.countGreen = countByProperty('Color', 'green');

            vm.countDoubleCero = countByProperty('Zone', 'doubleCero');
            vm.countCero = countByProperty('Zone', 'cero');
            vm.countOrphan = countByProperty('Zone', 'orphan');

            angular.forEach(_.sortBy(obj, 'length').reverse(), function (item) {
                console.log(item[0].Id + '[' + item.length + ']');
                vm.numbersPlayedDesc.push({ Number: item[0], Count: item.length });
            });
        }

        function countByProperty(property, value) {
            var count = _.groupBy(vm.numbersPlayed, function (item) {
                return item[property] === value;
            });
            return (count.true === undefined)? 0: count.true.length;
        }

        function init() {
            vm.process();
        }

        init();
    }
})();
