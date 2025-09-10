import React, { useState } from 'react'
import * as formik from 'formik';
import * as yup from 'yup';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct } from '../../redux/productSlice';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

    const {id} = useParams();

    const {products} = useSelector((state) => state.products);

    const product = products.find((pr) => pr.id === Number(id));

    const navigate = useNavigate();
    

    const { Formik } = formik;
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        productName: yup.string().required("Please enter product name").max(20, "Product name shouldn't exceed 20 characters"),
        productPrice: yup.number().required("Please enter product price"),
        productDescription: yup.string().required("Please enter product description"),
        productPhoto: yup.string().required("Please enter add product photo"),
    });


    const handleEditProductSubmit = (values)=>{
        console.log("values------------>", values);
        values.id = Number(id);
        dispatch(editProduct(values));
        toast.success("Product updated successfully!");
        navigate('/admin/list-products');
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={4} className='my-4' >
                    <h4>Edit Product</h4>
                    {product ? (
                        <Formik
                        validationSchema={schema}
                        onSubmit={handleEditProductSubmit}
                        initialValues={{
                            productName: product?.productName,
                            productPrice: product?.productPrice,
                            productDescription: product?.productDescription,
                            productPhoto: product?.productPhoto
                        }}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors, resetForm }) => (  //values = {fullName:'',} touched ={fullName:true, } errors = {fullName:'Please enter fullname'}
                            <Form noValidate onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationFormik01">
                                        <Form.Label>Product Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="productName"
                                            value={values.productName}
                                            onChange={handleChange}
                                            isValid={touched.productName && !errors.productName}
                                            isInvalid={!!errors.productName}
                                        />
                                        <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.productName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationFormik02">
                                        <Form.Label>Product Price: </Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="productPrice"
                                            value={values.productPrice}
                                            onChange={handleChange}
                                            isValid={touched.productPrice && !errors.productPrice}
                                            isInvalid={!!errors.productPrice}
                                        />

                                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>
                                            {errors.productPrice}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationFormikUsername">
                                        <Form.Label>Product Description: </Form.Label>
                                        <Form.Control
                                            as="textarea" 
                                            rows={3}
                                            name="productDescription"
                                            value={values.productDescription}
                                            onChange={handleChange}
                                            isInvalid={!!errors.productDescription}
                                            isValid={touched.productDescription && !errors.productDescription}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.productDescription}
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="validationFormikUsername">
                                        <Form.Label>Product Photo: </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="productPhoto"
                                            value={values.productPhoto}
                                            onChange={handleChange}
                                            isInvalid={!!errors.productPhoto}
                                            isValid={touched.productPhoto && !errors.productPhoto}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.productPhoto}
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </Row>
                                <div className='d-grid'>
                                    <Button type="submit">Add Product</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    ) : (
                        <h4>Invalid product Id</h4>
                    )}
                    
                </Col>
            </Row>
        </Container>
    )
}

export default EditProduct