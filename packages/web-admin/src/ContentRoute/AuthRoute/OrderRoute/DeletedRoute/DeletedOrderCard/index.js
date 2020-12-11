import React from 'react'
import SimpleCard from 'shared-lib/layout/SimpleCard'

const DeletedOrderCard = ({ doc, id }) => {
  return <SimpleCard>
    <div>
      {id}
    </div>
  </SimpleCard>
}

export default DeletedOrderCard