import React from 'react'
import SimpleCard from 'shared-lib/layout/SimpleCard'

const CompletedOrderCard = ({ doc, id }) => {
  return <SimpleCard>
    <div>
      {id}
    </div>
  </SimpleCard>
}

export default CompletedOrderCard