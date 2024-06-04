const eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventName] ?? [];
    if (!handlers.length) return;
    const handlerIndex = handlers.findIndex((handle, idx) => handle === handler);
    if (handlerIndex > -1) {
      handlers.splice(handlerIndex, 1);
    }
  },
  trigger(eventName, ...data) {
    if (!this._eventHandlers?.[eventName]) return;
    this._eventHandlers[eventName].forEach((handler) => handler.apply(this, data));
  }
}

// usage for this eventMixin

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
  multiplier(value) {
    this.trigger("multiply", value)
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on("select", (value) => console.log(value));
menu.on("select", (value) => console.log("Selected" + value));
menu.on("select", (value) => console.log("Selected this:" + value));

menu.choose("slecting menu");
menu.choose("menu");
menu.choose("menu");

let newMenu = new Menu();

newMenu.on("select", (value) => console.log("value is:" + value * 2));
newMenu.on("select", (value) => console.log("value is:" + value * 3));
newMenu.on("multiply", (value) => console.log("value is:" + value * 4));

newMenu.choose(2);
newMenu.multiplier(2);

