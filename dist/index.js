'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var PureRender = function PureRender(target) {

  /**
   * 避免没有意义的re-render
   * 当nextProps和this.props, nextState 和 this.state不同时，
   * 才会去re—render
   * @param  {} nextProps
   * @param  {} nextState
   */
  target.prototype.shouldComponentUpdate = function (nextProps, nextState) {
    var debug = PureRender.__debug__ || false;

    if (debug) {
      //时间锚点，帮助分析性能
      console.time(target.name + ' compare lose time');
      //更好的日志格式
      console.groupCollapsed(target.name + ' pure-render');
    }

    var isChange = !((0, _immutable.is)((0, _immutable.fromJS)(nextProps), (0, _immutable.fromJS)(this.props)) && (0, _immutable.is)((0, _immutable.fromJS)(nextState), (0, _immutable.fromJS)(this.state)));

    if (debug) {
      if (!isChange) {
        console.log(target.name + ' avoid unnecessary re-render');
      }
      console.timeEnd(target.name + ' compare lose time');
      console.groupEnd();
    }

    return isChange;
  };
};

//expose
/**
 * React本身提供了PureRenderMixin来优化React的性能
 * Mixin的语法在es6的class中不是特别的好用，另外
 * 社区更流行high order function的策略，decorator
 * 是高阶函数的语法糖
 */
exports.default = PureRender;
