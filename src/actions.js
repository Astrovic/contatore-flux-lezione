import Dispatcher from './Dispatcher';

export const increment = () => {
  const action = {
    type : 'INCREMENT'
  }
  // send action to dispatcher
  Dispatcher.dispatch(action);
}

export const decrement = () => {
  const action = {
    type : 'DECREMENT'
  }
  Dispatcher.dispatch(action);
  // send action to dispatcher
}

export const reset = () => {
  const action = {
    type : 'RESET'
  }
  Dispatcher.dispatch(action);
  // send action to dispatcher
}
