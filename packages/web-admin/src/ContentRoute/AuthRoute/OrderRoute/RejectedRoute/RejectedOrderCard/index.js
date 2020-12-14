import React from 'react'
import SimpleCard from 'shared-lib/layout/SimpleCard'

const RejectedOrderCard = ({ doc, id }) => {
  return <SimpleCard>
    <div>
      {id}
    </div>
  </SimpleCard>
}

export default RejectedOrderCard