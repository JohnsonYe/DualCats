import { userConstants } from '../constants/userConstants'
import { NullUser, ClientUser } from "../../components/classes/user";

export default function reducer (state = new NullUser(), action) {
    switch(action.type) {
        case userConstants.LOGIN:
            return new ClientUser({
                username: action.payload.username,
                email: action.payload.email,
                access_token: action.payload.access_token
              });
        case userConstants.LOGOUT:
            return new NullUser();
        default:
            return state;
    }
}