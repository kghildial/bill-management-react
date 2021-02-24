import React from 'react';
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
            initialValues={{
              description: '',
              category: '',
              amount: '',
              date: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              const { description, category, amount, date } = values;
              const splitDate = date.split('-');
              const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;

              switch (storeData.popupState.callType) {
                case 'Add':
                  const newEntryID = storeData.billsData.length + 1;
                  const payload = {
                    id: newEntryID,
                    description,
                    category,
                    amount,
                    date: formattedDate,
                  };
                  dispatch(addBillData(payload));
                  break;
                case 'Edit':
                  break;
                case 'Delete':
                  break;
                default: // Do nothing
              }

              // Edit flow
              // dispatch data to reducer for edit

              // Delete flow
              // Send the ID to delete
              // post deletion re-assignment of IDs

              // redux call to update billsData
              // Re-render expense table
              // Close popup & reset callType tp null
              setSubmitting(false);
              dispatch(updatePopupState({ isOpen: false, callType: null }));
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
