import { useContext } from 'react';
import MyContext from '../context/context';

export default function FilterName() {
  const { inputValue, data } = useContext(MyContext);
  return data.filter((item) => item.name.includes(inputValue));
}
