import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Button from 'shared-lib/button/Button';
import Space from 'shared-lib/layout/Space';
import useOnDeleteRole from './useOnDeleteRole';
import useOnEditRole from './useOnEditRole';

const RoleCard = ({ doc }) => {
  const data = React.useMemo(() => {
    return doc.data();
  }, [doc]);
  const onDeleteRole = useOnDeleteRole(data.email, doc.id);
  const onEditRole = useOnEditRole(data.email, doc.id, data.role);
  return <SimpleCard row={true}>
    <div>
      <div>{data.email}</div>
      <div>{data.role}</div>
      <div>{data.createdTimestamp.toDate().toString()}</div>
    </div>
    <Space />
    <Button onClick={onDeleteRole}> delete</Button>
    <Button onClick={onEditRole}>edit</Button>
  </SimpleCard>;
};

export default RoleCard;
