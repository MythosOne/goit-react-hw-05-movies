import { Formik, Form, Field } from 'formik';
import { Button } from './SearchBox.styled';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        search: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="search" />

        <Button type="submit">Search</Button>
      </Form>
    </Formik>
  );
};

SearchBox.propType = {
  onSubmit: PropTypes.func.isRequired,
};
