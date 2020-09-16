"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Event = /*#__PURE__*/function () {
  function Event() {
    _classCallCheck(this, Event);

    this.handlers = {};
  }

  _createClass(Event, [{
    key: "emit",
    value: function emit(msg) {
      if (this.handlers[msg] && this.handlers[msg].length > 0) {
        this.handlers[msg].forEach(function (cb) {
          return cb();
        });
      }
    }
  }, {
    key: "on",
    value: function on(msg, cb) {
      if (!this.handlers[msg]) {
        this.handlers[msg] = [cb];
      } else {
        this.handlers[msg].push(cb);
      }
    }
  }, {
    key: "remove",
    value: function remove(msg, cb) {
      if (this.handlers[msg]) {
        this.handlers[msg].splice(this.handlers[msg].indexOf(cb), 1);
      }
    }
  }]);

  return Event;
}();

var createEvent = function () {
  var instance;
  return function () {
    if (!instance) {
      instance = new Event();
    }

    return instance;
  };
}();

module.exports = createEvent;