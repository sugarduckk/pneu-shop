import useGlobalState from 'redux-wrapper/hook/useGlobalState'
import S from '../../constant/S'

const useClientString = () => {
  const { lang } = useGlobalState()
  return S[lang]
}

export default useClientString