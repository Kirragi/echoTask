import { api } from '..';
import { RESET_PASS_START, RESET_PASS_END } from '../constants';

export async function resetPassStart(phone: string) {
  return await api
    .post(RESET_PASS_START, {
      phone: phone,
    })
    .catch((error) => {
      return error;
    });
}

export async function resetPassEnd(
  phone: string,
  code: string,
  password: string,
) {
  return await api
    .post(RESET_PASS_END, {
      phone: phone,
      code: code,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}
