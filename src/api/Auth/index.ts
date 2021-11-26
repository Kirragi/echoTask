import { api } from '..';
import { SIGN_IN_LINK, SIGN_UP_LINK } from '../constants';

export async function signIn(phone: string, password: string) {
  return await api
    .post(SIGN_IN_LINK, {
      phone: phone,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}

export async function signUp(
  phone: string,
  password: string,
  first_name: string,
  last_name: string,
) {
  return await api
    .post(SIGN_UP_LINK, {
      phone: phone,
      password: password,
      first_name: first_name,
      last_name: last_name,
    })
    .catch((error) => {
      return error;
    });
}
