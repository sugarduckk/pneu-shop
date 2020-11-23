import styled from 'styled-components';

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 0 ${props => props.theme.dim.form.margin}px;
  color: ${props => props.theme.color.primaryText};
  opacity: ${props => props.disabled ? '0.4' : '1'};
  &:before, :after {
    content: '';
    flex: 1;
    height: 1px;
  }
  &:before {
    margin-right: .3em;
    background: linear-gradient(to right, transparent, ${props => props.theme.color.primaryText});
  }
  &:after {
    margin-left: .3em;
    background: linear-gradient(to right, ${props => props.theme.color.primaryText},transparent);
  }
`;

export default Divider;