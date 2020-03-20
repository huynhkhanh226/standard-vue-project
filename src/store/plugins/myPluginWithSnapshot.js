var _ = require('lodash');

const myPluginWithSnapshot = store => {
    let prevState = _.cloneDeep(store.state)
    store.subscribe((mutation, state) => {
      let nextState = _.cloneDeep(state)
  
      // compare `prevState` and `nextState`...
      console.log(prevState);
      // save state for next mutation
      prevState = nextState
    })
  }

  export default myPluginWithSnapshot