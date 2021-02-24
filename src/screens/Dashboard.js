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
    activeMonth: useSelector(state => state.uiStates.activeMonth),
    billsData: useSelector(state => state.billsData),
    categories: useSelector(state => state.categories),
    activeCategory: useSelector(state => state.uiStates.activeCategory),
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

  // Reset the form whenever callType === 'Add'
  useEffect(() => {
    if (storeData.popupState.callType === 'Add') resetForm();
  }, [storeData.popupState.callType]);

  // Prefill form for edit
  useEffect(() => {
    if (!!storeData.popupState.id) {
      const matchedData = {
        ...storeData.billsData[storeData.activeMonth].find(
          entry => entry.id === storeData.popupState.id
        ),
      };
      if (Object.keys(matchedData).length > 0) {
        const splitDate = matchedData.date.split('-');
        matchedData.date = `${splitDate[2]}-${splitDate[0]}-${splitDate[1]}`;
        delete matchedData.id;

        setFormPreset(matchedData);
      }
    }
  }, [storeData.popupState.id, storeData.billsData, storeData.activeMonth]);

  return (
    <>
      <Popup
        trigger={storeData.popupState.isOpen}
        callType={storeData.popupState.callType}
      >
        <Container type="popupContentWrapper">
          <Heading
            type="popupHeading"
            level="2"
            text={(() => {
              const { callType, id } = storeData.popupState;
              switch (callType) {
                case 'Add':
                  return `${callType} a bill`;
                case 'Edit':
                  return `${callType} bill #${id}`;
                case 'Delete':
                  return `${callType} bill #${id}?`;
                default:
                  return '';
              }
            })()}
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
                  const newEntryID =
                    storeData.billsData[storeData.activeMonth].length + 1;

                  const addPayload = {
                    id: newEntryID,
                    description,
                    category,
                    amount,
                    date: formattedDate,
                  };

                  dispatch(
                    addBillData({
                      data: addPayload,
                      activeMonth: storeData.activeMonth,
                    })
                  );
                  break;
                case 'Edit':
                  const editTarget = storeData.billsData[
                    storeData.activeMonth
                  ].find(entry => entry.id === storeData.popupState.id);

                  const editPayload = {
                    ...editTarget,
                    ...{
                      description,
                      category,
                      amount,
                      date: formattedDate,
                    },
                  };

                  dispatch(
                    editBillData({
                      data: editPayload,
                      activeMonth: storeData.activeMonth,
                    })
                  );
                  break;
                case 'Delete':
                  dispatch(
                    deleteBillData({
                      id: storeData.popupState.id,
                      activeMonth: storeData.activeMonth,
                    })
                  );
                  break;
                default: // Do nothing
              }

              setSubmitting(false);
              dispatch(
                updatePopupState({ isOpen: false, callType: null, id: null })
              );
            }}
          >
            {({ isSubmitting }) => (
              <Container type="formWrapper">
                <Form>
                  {storeData.popupState.callType !== 'Delete' && (
                    <>
                      <Input
                        type="text"
                        name="description"
                        label="Description"
                        placeholder="Something good..."
                      />
                      <Select
                        name="category"
                        label="Category"
                        optionsList={storeData.categories}
                        placeholder="Choose one..."
                      />
                      <Input
                        type="number"
                        name="amount"
                        label="Amount"
                        placeholder="Budget Friendly... ?"
                      />
                      <Input type="date" name="date" label="Date" />
                    </>
                  )}
                  <Button
                    type="submit"
                    variant="formSubmitBtn"
                    disabled={isSubmitting}
                    callType={storeData.popupState.callType}
                  >
                    {['Add', 'Edit'].indexOf(storeData.popupState.callType) !==
                    -1
                      ? 'Submit'
                      : 'Yes'}
                  </Button>
                  {storeData.popupState.callType === 'Delete' && (
                    <Button
                      onClick={() => {
                        dispatch(
                          updatePopupState({
                            isOpen: false,
                            callType: null,
                            id: null,
                          })
                        );
                      }}
                    >
                      No
                    </Button>
                  )}
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
            data={
              storeData.activeCategory !== ''
                ? storeData.billsData[storeData.activeMonth].filter(
                    entry => entry.category === storeData.activeCategory
                  )
                : storeData.billsData[storeData.activeMonth]
            }
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
