class Event {
  constructor() {
    this.handlers = {};
  }

  emit(msg, params) {
    if (this.handlers[msg] && this.handlers[msg].length > 0) {
      this.handlers[msg].forEach(cb => cb(params));
    }
  }

  on(msg, cb) {
    if (!this.handlers[msg]) {
      this.handlers[msg] = [ cb ];
    } else {
      this.handlers[msg].push(cb);
    }
  }

  remove(msg, cb) {
    if (this.handlers[msg]) {
      this.handlers[msg].splice(this.handlers[msg].indexOf(cb), 1);
    }
  }
}

const createEvent = (function() {
  let instance;
  return function() {
    if (!instance) {
      instance = new Event();
    }
    return instance;
  }
})();

module.exports = createEvent;