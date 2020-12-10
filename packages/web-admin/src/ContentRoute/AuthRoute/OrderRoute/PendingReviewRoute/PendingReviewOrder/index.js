import React from 'react'
import Button from 'shared-lib/button/Button'
import RowLayout from 'shared-lib/layout/RowLayout'
import SimpleCard from 'shared-lib/layout/SimpleCard'
import Space from 'shared-lib/layout/Space'

const PendingReviewOrder = ({ doc }) => {
  const data = React.useMemo(() => {
    return doc.data();
  }, [doc]);
  return <SimpleCard>
    <div>{doc.id}</div>
    <RowLayout>
      <Space />
      <Button>view order</Button>
      <Button>view slip</Button>
      <Button>accept</Button>
    </RowLayout>
  </SimpleCard>
}

export default PendingReviewOrder