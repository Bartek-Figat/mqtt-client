const shallowClone = (obj) => {
  let orginProto = Object.getPrototypeOf(obj);
  return Object.assign(Object.create(orginProto), obj);
};

class Car {
  constructor() {
    this.head = "";
    this.body = "";
    this.wheel = "";
  }
  getHead() {
    return this.head;
  }

  setHead(head) {
    this.head = head;
  }

  getBody(body) {
    this.body = body;
  }

  getWheel() {
    return this.wheel;
  }

  setWheel(wheel) {
    this.wheel = wheel;
  }
}

class Builder {
    buildHead(){}
    buildBody(){}
    buildWheel(){}
    buildPart(){}
}
class StandardBuilder extends Builder {
  constructor() {
    super();
    this.car = new Car();
  }
}



