import React from 'react';
import { Formik, Form } from 'formik';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import seederData from '../seeder';

// Custom component(s) import(s)
import Container from '../components/Container';
import Heading from '../components/Heading';
import ExpenseTable from '../components/ExpenseTable';
import Popup from '../components/Popup';
import Input from '../components/Input';
import Select from '../components/Select';
import Button from '../components/Button';
import Icon from '../components/Icon';

const HomeScreen = () => {
  return (
    <>
      <Popup>
        <Container type="popupContentWrapper">
          <Icon type="popupCloseIcon" iconVal={faTimes} />
          <Heading type="popupHeading" level="2" text="Add/Edit a bill" />

          <Formik
            enableReinitialize
            initialValues={{
              description: '',
              catrgory: '',
              amount: '',
              date: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
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
                    optionsList={['one', 'two', 'three']}
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
            data={seederData.bills}
          />
        </Container>
        <Container type="chartContainer">
          <h1>Expense Chart</h1>
        </Container>
      </Container>
    </>
  );
};

export default HomeScreen;
