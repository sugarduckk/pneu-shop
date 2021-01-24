import useGlobalState from 'redux-wrapper/hook/useGlobalState';
import CommonString from '../constant/CommonString';

const useCommonString = () => {
  const { lang } = useGlobalState();
  return CommonString[lang];
};

export default useCommonString;