import { api } from '..';
import { USER } from '../constants';

export async function getUser() {
  return await api.get(USER).catch((error) => {
    return error;
  });
}
