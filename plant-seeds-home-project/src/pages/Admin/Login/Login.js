import { Button, Container, Form, FloatingLabel } from 'react-bootstrap';
import './Login.scss';

const Login = () => {
    // const isSuccess = useSelector((state) => state.isSuccess);
    // const isFetching = useSelector((state) => state.isFetching);
    // const dispatch = useDispatch();
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();
    // const handleLogin = (data) => {
    //     const formDataJSON = JSON.stringify(data);
    //     login(formDataJSON, dispatch);
    // };
    return (
        <Container
            fluid
            className="login-container d-flex justify-content-center align-items-center py-5"
        >
            {/* {isSuccess ? (
                <SuccessDiv message="Welcome to Jack's Garden Admin Panel. Redirecting you to dashboard now." />
            ) : ( */}
            <Form className="login-form bg-white shadow rounded-3 py-5 px-3 px-md-4">
                <h1 className="text-center text-success fw-bold pt-3">LOG IN</h1>
                <h6 className="text-center text-secondary pb-3">@PLANT SEEDS HOME ADMIN PANEL</h6>
                <FloatingLabel className="mb-3" label="Email">
                    <Form.Control
                        placeholder="Email"
                        // {...register("email", {
                        //     required: true,
                        //     pattern: {
                        //         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        //         message: "invalid email address",
                        //     },
                        // })}
                    />
                    <p className="text-danger">
                        {/* {errors.email && "Please enter a valid email"} */}
                    </p>
                </FloatingLabel>
                <FloatingLabel className="mb-3" label="Password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        // {...register("password", {
                        //     pattern: {
                        //         value: /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+*!=.]).*$/,
                        //         message: `Please check your password`,
                        //     },
                        //     required: "Please enter your password",
                        // })}
                    />
                    <p className="text-danger">
                        {/* {errors.password && errors.password.message} */}
                    </p>
                </FloatingLabel>
                <div className="d-grid gap-2">
                    <Button variant="success" type="submit" className="submit-btn">
                        {/* {isFetching ? <FetchingSpinner /> : "SUBMIT"} */}
                        SUBMIT
                    </Button>
                </div>
            </Form>
            {/* )} */}
        </Container>
    );
};
export default Login;
