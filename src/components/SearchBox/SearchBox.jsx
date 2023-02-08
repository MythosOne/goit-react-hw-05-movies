
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


// import { useState } from 'react';
// import { ImSearch } from 'react-icons/im';

// export const SearchBox = ({ onSubmit }) => {
//     const [values, setValues] = useState('');

//     const onChangeInput = e => {
//         setValues(e.currentTarget.value.trim().toLowerCase());
//     };

//     const handleSubmit = e => {
//         e.preventDefault();
        
//         onSubmit(values);
//         setValues('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 name='search'
//                 placeholder="Search movies"
//                 autoComplete="off"
//                 autoFocus
//                 value={values}
//                 onChange={onChangeInput}
//             />
//             <button type='submit'>
//             <ImSearch size={25} />
//             </button>
//         </form>
//     );
// };