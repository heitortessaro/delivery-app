import axios from 'axios';

const URL_LOGIN = 'http://localhost:3001/login';
const URL_USER = 'http://localhost:3001/user';

export const login = async ({ email, password }) => {
  try {
    const result = await axios.post(URL_LOGIN, { email, password });
    return result.data;
  } catch (error) {
    return null;
  }
};

export const createUser = async ({ name, password, email, role }, token) => {
  try {
    const { data } = await axios.post(
      URL_USER,
      { name, password, email, role },
      { headers: {
        authorization: token,
      } },
    );
    console.log(data);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export default { login, createUser };
