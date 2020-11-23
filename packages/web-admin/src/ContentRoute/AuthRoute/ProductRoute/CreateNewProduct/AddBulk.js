import React from 'react';
import Papa from 'papaparse';
import H1 from 'shared-lib/form-item/H1';
import Form from 'shared-lib/form-item/Form';
import Fieldset from 'shared-lib/form-item/Fieldset';
import Button from 'shared-lib/button/Button';
import FileBrowser from 'shared-lib/form-item/FileBrowser';
import TableCSV from 'shared-lib/ui/TableCSV';
import useForm from 'shared-lib/hook/useForm';
import validateCSV from './validateCSV';
import useAddBulkItem from 'firebase-wrapper/firestore/useAddBulkItem';
import useShowMessageDialog from 'redux-wrapper/hook/useShowMessageDialog';


const AddBulk = props => {
  const addBulkItem = useAddBulkItem();
  const showMessage = useShowMessageDialog();
  const [goods, setGoods] = React.useState();
  const { form, onSubmit, disabled, values } = useForm({
    files: null
  }, values => {
    var docs = [];
    if (goods) {
      for (let i = 1; i < goods.length; i++) {
        docs.push({
          id: goods[i][0],
          name: goods[i][1],
          category: goods[i][2],
          brand: goods[i][3],
          details: goods[i][4],
          in_stock: parseInt(goods[i][5]),
        });
      }
      return showMessage(new Promise((resolve, reject) => {
        addBulkItem(docs)
          .then(() => {
            resolve('All items are uploaded.');
            setGoods(null);
          })
          .catch(reject);
      }));
    }
  }, null, true);
  React.useEffect(() => {
    if (values.files) {
      Papa.parse(values.files[0], {
        complete: ({ data }) => {
          const { valid, error } = validateCSV(data);
          if (valid) {
            setGoods(data);
          }
          else {
            console.log("Error CSV", error);
          }
        }
      });
    }
  }, [values]);
  return <>
    <H1>Add products in bulk</H1>
    <Form onSubmit={onSubmit}>
      <Fieldset disabled={disabled}>
        <FileBrowser {...form('files')} multiple={false} accept=".csv" />
      </Fieldset>
      <Button type='submit'>Upload</Button>
    </Form>
    {goods && <TableCSV data={goods} />}
  </>;
};

export default AddBulk;