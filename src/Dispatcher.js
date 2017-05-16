class Dispatcher {
  constructor(propr){
    this.isDispatching = false;
    this.actionHandlers = [];
  }

  register(actionHandler) {
    this.actionHandlers.push(actionHandler);
  }

  dispatch(action){
    if(this.isDispatching){
      throw new Error("I'm sorry but I'm busy")
    }

    this.isDispatching = true;
    // send action to  store
    this.actionHandlers.forEach(handler => handler(action));

    this.isDispatching = false;

  }
}

export default new Dispatcher;
