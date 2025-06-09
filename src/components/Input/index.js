import { InputContainer } from './styles';

function Input({value, onChange}) {
  return (
    <InputContainer>
      <input valur={value} onChange={onChange} />
    </InputContainer>
  )
}
 export default Input