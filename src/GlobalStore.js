import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

const mapDispatch = () => {
  const dispatch = useDispatch();
//   const state = useSelector((state) => state);

  const actions = useMemo(() => ({
      setCurrentUser(username, email, access_token) {
        dispatch({
            type: 'USERS_LOGIN',
            payload: {
                username: username,
                email: email,
                access_token: access_token
            }
        })
      },
      setCurrentUserLogout() {
          dispatch({type: 'USERS_LOGOUT'});
      }
  }), [dispatch])

  return actions;
}


export default mapDispatch;