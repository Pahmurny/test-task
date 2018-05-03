import engine from 'ld-store/src/store-engine'
import localStorage from 'ld-store/storages/localStorage'

const store = engine.createStore([localStorage])

class User {
  isAuthenticated = () => {
    return store.get('user')
  }

  logIn = (user) => {
    return store.set('user', user)
  }

  logOut = () => {
    return store.remove('user')
  }

}


export const user = new User()








