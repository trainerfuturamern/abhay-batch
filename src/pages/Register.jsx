import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import { Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authSlice';


function Register() {
  const { Formik } = formik;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    fullName: yup.string().required("Please enter fullname").max(20, "Fullname shouldn't exceed 20 characters"),
    email: yup.string().required("Please enter email").email("Please enter a valid email"),
    password: yup.string().required("Please enter password"),
  });

  const handleRegister = (values)=>{

    //const users = [{fullName:'', email:'',password:'', role:'user'},{},{}];

    values.role = 'user';
    dispatch(registerUser(values));
    toast.success("User registered successfully!");
    navigate('/login');

  }

  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={4} className='my-4' >
         <h4>Register</h4>
        <Formik
      validationSchema={schema}
      onSubmit={handleRegister}
      initialValues={{
        fullName: '',
        email: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (  //values = {fullName:'',} touched ={fullName:true, } errors = {fullName:'Please enter fullname'}
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="validationFormik01">
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isValid={touched.fullName && !errors.fullName}
                isInvalid={!!errors.fullName}
              />
              <Form.Control.Feedback type='valid'>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationFormik02">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type='invalid'>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col}  controlId="validationFormikUsername">
              <Form.Label>Password: </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  isValid={touched.password && !errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
       
            </Form.Group>
          </Row>
          
          <div className='d-grid'>
            <Button type="submit">Register</Button>
          </div>
        </Form>
      )}
    </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default Register;