import { useHistory } from 'react-router';
import { useIdParam } from './useIdParams';

export const useGetElemByIdParam = <T>(list: T[]) => {
  const id = useIdParam();
  const history = useHistory();
  const elem = list.find((elem: any) => {
    if(elem.id === id) {
      return true;
    } else {
      return false;
    }
  });

  if(!elem) {
    history.push('/404');
  }

  return elem;
}