'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var evRedux = exports.evRedux = function evRedux(target) {
    return function () {
        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        var obj = new (Function.prototype.bind.apply(target, [null].concat(arg)))();
        return new Proxy(obj, handler);
    };
};
var handler = exports.handler = {
    get: function get(target, prop, proxy) {
        if (!Reflect.get(target, 'dispatch') || !Reflect.get(target, 'getState')) {
            var dispatch = evStore.dispatch,
                getState = evStore.getState;

            if (dispatch && getState) {
                Reflect.set(target, 'dispatch', dispatch);
                Reflect.set(target, 'getState', getState);
                Reflect.set(target, 'update', function (data, type) {
                    return dispatch({
                        type: type || target.actionType,
                        data: data
                    });
                });
            } else {
                console.error('You may forgot to init the easyStore');
            }
        }
        return Reflect.get(target, prop) || function () {
            console.error('function ' + prop + ' isn\'t exist in this action');
        };
    }
};
var evStore = exports.evStore = {
    dispatch: null,
    getState: null,
    init: function init(store) {
        evStore.dispatch = store.dispatch, evStore.getState = store.getState;
    }
};