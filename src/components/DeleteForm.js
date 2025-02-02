import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { deleteData } from '../services/ServerApi';


const validationSchema = Yup.object().shape({
  id: Yup.string()
    .required('ID is required')
    .matches(/^\d+$/, 'ID must be a number'),
});

const DeleteForm = () => {
  return (
    <Formik
      initialValues={{ id: '' }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        console.log('Submitting delete for ID:', values.id);
        try {
          const response = await deleteData(values.id);
          if (response.success) {
            Alert.alert('Success', response.data.message);
            resetForm();
          } else {
            Alert.alert('Error', 'Failed to delete data.');
          }
        } catch (error) {
          console.error('Submission error:', error);
          Alert.alert('Error', 'An error occurred while deleting data.');
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter ID to delete"
            onChangeText={handleChange('id')}
            onBlur={handleBlur('id')}
            value={values.id}
          />
          {touched.id && errors.id && <Text style={styles.errorText}>{errors.id}</Text>}
          <Button title="Delete Data" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
});

export default DeleteForm;
