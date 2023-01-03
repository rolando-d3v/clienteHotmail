import clienteAxios from './clienteAxios';

export const createRegistroUser = async (data) => {
    return await clienteAxios.post('/user', data)
}