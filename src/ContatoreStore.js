
import Dispatcher from './Dispatcher';
import EventEmitter from 'EventEmitter';

let conto = 0;

/* se avessimo avuto un oggetto
let contoComplesso = {
  prop1: 32m,
  prop2: 'string'
}
return contoComplesso
avrebbe restituito una referenza all'oggetto, dunque avrenìmmo prima
dovuto fare una createOptionDialoge poi tornatr la copia modificata
*/

const increment = () => {
  conto +=1;
};

const decrement = () => {
  if(conto>0){
    conto -=1;
  }
};

const reset = () => {
  conto = 0;
};

const handleAction = (action) => {
  switch (action.type) {
    case 'INCREMENT':
      increment();
      break;
    case 'DECREMENT':
      decrement();
      break;
    case 'RESET':
      reset();
      break;
    default:
      // ...
  }
  // c'è stato il cambiamento, adesso tutti quelli che si sono registrati a questo
  // evento, atraverso la ViewController, potranno aggiornare la view
  instance.emitChange();
}

Dispatcher.register(handleAction);

class ContatoreStore extends EventEmitter {  // emissione di un evento, come i listener js
  getConto() {
    return conto;
  }
  addChangeListener(callback) {
    this.addListener('CHANGE', callback);
  }
  removeChangeListener(callback) {
    this.removeListener('CHANGE', callback);
  }
  emitChange(callback) {
    this.emit('CHANGE', callback);
  }
}

const instance = new ContatoreStore;
export default instance;
