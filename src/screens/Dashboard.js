import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

// Custom component(s) import(s)
import Container from '../components/Container';
import ControlsCenter from '../components/ControlsCenter';
import Heading from '../components/Heading';
import ExpenseTable from '../components/ExpenseTable';
import Popup from '../components/Popup';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';

// Actions(s) import(s);
import { updatePopupState } from '../actions/uiStateActions';
import {
  addBillData,
  editBillData,
  deleteBillData,
} from '../actions/billsDataActions';

// Custom hook(s) / util method(s) import(s)
import { getUniqueCategoryValues } from '../utils';

const Dashboard = () => {
  const dispatch = useDispatch();
  const storeData = {
    popupState: useSelector(state => state.uiStates.popupState),
    billsData: useSelector(state => state.billsData),
  };

  const [formPreset, setFormPreset] = useState({
    description: '',
    category: '',
    amount: '',
    date: '',
  });

  const resetForm = () => {
    setFormPreset({
      description: '',
      category: '',
      amount: '',
      date: '',
    });
  };

  // Prefill form for edit
  useEffect(() => {
    if (!!storeData.popupState.id) {
      const matchedData = {
        ...storeData.billsData.find(
          entry => entry.id === storeData.popupState.id
        ),
      };

      const splitDate = matchedData.date.split('-');
      matchedData.date = `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`;
      delete matchedData.id;

      setFormPreset(matchedData);
    }
  }, [storeData.popupState.id, storeData.billsData]);

  return (
    <>
      <Popup trigger={storeData.popupState.isOpen}>
        <Container type="popupContentWrapper">
          <Heading
            type="popupHeading"
            level="2"
            text={`${storeData.popupState.callType} a bill`}
          />

          <Formik
            enableReinitialize
            initialValues={formPreset}
            onSubmit={(values, { setSubmitting }) => {
              const { description, category, amount, date } = values;
              const splitDate = date.split('-');
              const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;

              switch (storeData.popupState.callType) {
                case 'Add':
                  const newEntryID = storeData.billsData.length + 1;
                  const addPayload = {
                    id: newEntryID,
                    description,
                    category,
                    amount,
                    date: formattedDate,
                  };
                  dispatch(addBillData(addPayload));
                  break;
                case 'Edit':
                  const editTarget = storeData.billsData.find(
                    entry => entry.id === storeData.popupState.id
                  );
                  const editPayload = {
                    ...editTarget,
                    ...{
                      description,
                      category,
                      amount,
                      date: formattedDate,
                    },
                  };
                  dispatch(editBillData(editPayload));
                  break;
                case 'Delete':
                  break;
                default: // Do nothing
              }
              // Delete flow
              // Send the ID to delete
              // post deletion re-assignment of IDs

              // Re-render expense table
              // Close popup & reset callType tp null
              setSubmitting(false);
              resetForm();
              dispatch(
                updatePopupState({ isOpen: false, callType: null, id: null })
              );
            }}
          >
            {({ isSubmitting }) => (
              <Container type="formWrapper">
                <Form>
                  <Input
                    type="text"
                    name="description"
                    label="Description"
                    placeholder="Something good..."
                  />
                  <Select
                    name="category"
                    label="Category"
                    optionsList={getUniqueCategoryValues(
                      storeData.billsData.map(entry => entry.category)
                    )}
                    placeholder="Choose one..."
                  />
                  <Input
                    type="number"
                    name="amount"
                    label="Amount"
                    placeholder="Budget Friendly... ?"
                  />
                  <Input type="date" name="date" label="Date" />
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Form>
              </Container>
            )}
          </Formik>
        </Container>
      </Popup>
      <Container type="contentWrapper">
        <Container type="billsListContainer">
          <ControlsCenter />
          <ExpenseTable
            headingData={[
              'ID',
              'Date',
              'Category',
              'Description',
              'Amount',
              '',
            ]}
            widthData={['10%', '20%', '20%', '20%', '20%', '10%']}
            data={storeData.billsData}
          />
        </Container>
        <Container type="chartContainer">
          <h1>Expense Chart</h1>
        </Container>
      </Container>
    </>
  );
};

export default Dashboard;
