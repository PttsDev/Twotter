export default () => {

  const useAuthToken = () => useState('auth_token')
  const useAuthUser = () => useState('auth_user')
  const useAuthLoading = () => useState('auth_loading', () => true)

  const setToken = (newToken) => {
    const authToken = useAuthToken()
    authToken.value = newToken
  }

  const setUser = (newUser) => {
    const authUser = useAuthUser()
    authUser.value = newUser
  }

  const setIsAuthLoading = (value) => {
    useAuthLoading().value = value
  }

  const login = async (user, password) => {

    try {
      const data = await $fetch('/api/auth/login', {
        method: 'POST',
        body: {
          username: user,
          password
        }
      })
      setToken(data.access_token)
      setUser(data.user)
    }
    catch (err) {
      console.log(err)
    }

  }
  const refreshToken = async () => {
    try {
      const data = await $fetch('/api/auth/refresh')
      setToken(data.access_token)
      return true
    }
    catch (err) {
      console.log(err)
    }
  }

  const getUser = async () => {
    try {
      const data = await useFetchApi('/api/auth/user')
      setUser(data.user)
      return true
    }
    catch (err) {
      console.log(err)
    }
  }

  const initAuth = async () => {
    setIsAuthLoading(true)
    try {
      await refreshToken()
      await getUser()
    } catch (err) {
      console.log(err)
    } finally {
      setIsAuthLoading(false)
    }

  }

  return {
    login,
    useAuthUser,
    initAuth,
    useAuthToken,
    useAuthLoading
  }
}