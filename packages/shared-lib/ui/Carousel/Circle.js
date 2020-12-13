import React from 'react'
import styled from 'styled-components'

const CircleContainer = styled.div`
  width: ${props => props.shown ? '1.6em' : '0.8em'};
  height: 0.8em;
  margin: 0.5em 0.2em;
  background: ${props => props.shown ? props.theme.color.contrast : props.theme.color.primary};;
  border-radius: 0.4em;
  transition: 0.2s;
`

const Circle = ({ shown, index, goIndex }) => {
  const onClick = React.useCallback(() => {
    goIndex(index)
  }, [goIndex, index])
  return <CircleContainer shown={shown} onClick={onClick} />
}

export default Circle