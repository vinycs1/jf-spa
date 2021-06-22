import { useSelector, useDispatch } from 'react-redux';
import { AxiosActionRequest } from '../../shared/axios/axios.types';

export const actionTeste: string = '@domain/teste';

export const actionTeste2: string = '@domain/teste2';

export const teste = () => new AxiosActionRequest({
  type: actionTeste,
  config: {
    url: '/teste',
    method: 'GET',
  },
  actionTypes: {
    success: 'teste_success',
    fail: 'teste_fail',
  },
});

export const teste2 = () => ({
  type: actionTeste2,
});

export const useTeste = () => {
  const dispatch = useDispatch();

  const doTeste = () => {
    dispatch(teste());
  };

  return {
    doTeste,
  };
};
