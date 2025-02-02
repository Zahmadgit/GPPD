import React from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { putData } from '../services/ServerApi';

// Define the validation schema using Yup
const validationSchema = Yup.object().shape({
    id: Yup.string()
        .required('ID is required')
        .matches(/^\d+$/, 'ID must be a number'),
    title: Yup.string()
        .required('Title is required')
        .max(100, 'Title must be less than 100 characters'),
    description: Yup.string()
        .max(500, 'Description must be less than 500 characters'),
    price: Yup.number()
        .required('Price is required')
        .positive('Price must be a positive number'),
    stock: Yup.number()
        .required('Stock is required')
        .integer('Stock must be an integer')
        .positive('Stock must be a positive number'),
});

const PutForm = () => {
    return (
        <Formik
            initialValues={{
                id: '',
                title: '',
                description: '',
                price: '',
                stock: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
                console.log('Submitting data:', values);
                try {
                    // Preparing the data for the PUT request
                    const { id, ...newData } = values;
                    const response = await putData({ id, newData });
                    console.log('Server response:', response);
                    if (response.success) {
                        Alert.alert('Success', 'Data updated successfully!');
                        resetForm();
                    } else {
                        Alert.alert('Error', 'Failed to update data.');
                    }
                } catch (error) {
                    console.error('Submission error:', error);
                    Alert.alert('Error', 'An error occurred while updating the form.');
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="ID"
                        onChangeText={handleChange('id')}
                        onBlur={handleBlur('id')}
                        value={values.id}
                    />
                    {touched.id && errors.id && <Text style={styles.errorText}>{errors.id}</Text>}

                    <TextInput
                        style={styles.input}
                        placeholder="Title"
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('title')}
                        value={values.title}
                    />
                    {touched.title && errors.title && <Text style={styles.errorText}>{errors.title}</Text>}

                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        onChangeText={handleChange('description')}
                        onBlur={handleBlur('description')}
                        value={values.description}
                    />
                    {touched.description && errors.description && (
                        <Text style={styles.errorText}>{errors.description}</Text>
                    )}

                    <TextInput
                        style={styles.input}
                        placeholder="Price"
                        onChangeText={handleChange('price')}
                        onBlur={handleBlur('price')}
                        value={values.price}
                        keyboardType="numeric"
                    />
                    {touched.price && errors.price && <Text style={styles.errorText}>{errors.price}</Text>}

                    <TextInput
                        style={styles.input}
                        placeholder="Stock"
                        onChangeText={handleChange('stock')}
                        onBlur={handleBlur('stock')}
                        value={values.stock}
                        keyboardType="numeric"
                    />
                    {touched.stock && errors.stock && <Text style={styles.errorText}>{errors.stock}</Text>}

                    <Button title="Update Data" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
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

export default PutForm;