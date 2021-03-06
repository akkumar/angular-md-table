export default (ngModule) => {
    ngModule.animation('.fadeleft', function ($animateCss) {
        /*@ngInject*/
        return {
            enter: function (element) {
                let width = angular.element(element).width();
                return $animateCss(element, {
                    from: {
                        opacity: 0,
                        marginLeft: '-' + width + 'px'
                    },

                    to: {
                        opacity: 1,
                        marginLeft: '0'
                    },
                    duration: 0.4
                });
            },

            leave: function (element) {
                let width = angular.element(element).width();
                return $animateCss(element, {
                    from: {
                        opacity: 1,
                        marginLeft: 0
                    },

                    to: {
                        opacity: 0,
                        marginLeft: '-' + width + 'px'
                    },
                    duration: 0.4
                });
            }
        };
    });
}
