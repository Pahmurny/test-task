import engine from 'ld-store/src/store-engine'
import localStorage from 'ld-store/storages/localStorage'

const store = engine.createStore([localStorage])


class User {
  isAuthenticated = () => {
    return store.get('user')
  }

  /**
   * Log In User
   * @param user
   * @returns {*}
   */
  logIn = (user) => {
    return store.set('user', user)
  }

  logOut = () => {
    return store.remove('user')
  }

  /**
   * Get User ID or false when is not authorized
   * @returns {*}
   */
  getId = () => {
    const user = this.isAuthenticated()
    if (user) {
      return user.id
    }
    return false
  }

  /**
   * Get User Name
   * @returns {*}
   */
  getName = () => {
    const user = this.isAuthenticated()
    if (user) {
      return user.userName
    }
    return false
  }

}


export const user = new User()








