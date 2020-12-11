import React from 'react';
import SimpleCard from 'shared-lib/layout/SimpleCard';
import Button from 'shared-lib/button/Button';
import Space from 'shared-lib/layout/Space';
import useOnDeleteRole from './useOnDeleteRole';
import useOnEditRole from './useOnEditRole';

const RoleCard = ({ doc, id }) => {
  const onDeleteRole = useOnDeleteRole(doc.email, id);
  const onEditRole = useOnEditRole(doc.email, id, doc.role);
  return <SimpleCard row={true}>
    <div>
      <div>{doc.email}</div>
      <div>{doc.role}</div>
      <div>{doc.createdTimestamp.toDate().toString()}</div>
    </div>
    <Space />
    <Button onClick={onDeleteRole}> delete</Button>
    <Button onClick={onEditRole}>edit</Button>
  </SimpleCard>;
};

export default RoleCard;
