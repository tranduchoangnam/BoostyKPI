import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function SignUp() {
    const [checkBox, setCheckBox] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirm_password: "",
    });
    const auth = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate email
        if (!formData.email) {
            toast.error("Email is required.");
            return;
        }

        if (!validateEmail(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        // Validate passwords
        if (!formData.password) {
            toast.error("Password is required.");
            return;
        }

        if (formData.password !== formData.confirm_password) {
            toast.error("Passwords do not match.");
            return;
        }

        // Validate terms and conditions checkbox
        if (!checkBox) {
            toast.error("Please agree to the terms and conditions.");
            return;
        }

        // Proceed with form submission
        try {
            toast.success("Account created successfully!", {
                autoClose: 500, // Close after 3 seconds
                onClose: () => navigate('/auth/sign-in') // Navigate to the desired page after successful signup
            });
        } catch (error) {
            toast.error("Failed to create an account. Please try again.");
        }
    };

    return (
        <section className="flex gap-4 justify-center">
            <ToastContainer />
            <div className="w-[540px] my-16 py-12 px-16 bg-[#FFF]">
                <div className="text-center">
                    <Typography className="font-bold mb-4 text-[32px] font-['Inter']">
                        Create an Account
                    </Typography>
                    <Typography
                        color="blue-gray"
                        className="text-lg font-normal text-[16px] font-['Inter']"
                    >
                        Have an Account?{" "}
                        <Link
                            to="/auth/sign-in"
                            className="text-[#1E5EFF] font-medium"
                        >
                            Sign In
                        </Link>
                    </Typography>
                </div>
                <form className="mt-8 mb-2 mx-auto w-full">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="-mb-4 font-medium font-['Inter']"
                        >
                            Username
                        </Typography>
                        <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            size="lg"
                            placeholder="Enter your email..."
                            className=" !border-[#D9E1EC] focus:!border-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="-mb-4 font-medium font-['Inter']"
                        >
                            Password
                        </Typography>
                        <Input
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="password"
                            size="lg"
                            placeholder="Enter your password..."
                            className=" !border-[#D9E1EC] focus:!border-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="-mb-4 font-medium font-['Inter']"
                        >
                            Confirm Password
                        </Typography>
                        <Input
                            id="confirm-password"
                            name="confirm_password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            type="password"
                            size="lg"
                            placeholder="Confirm your password..."
                            className=" !border-[#D9E1EC] focus:!border-gray-900"
                            labelProps={{
                                className:
                                    "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Checkbox
                        value={checkBox}
                        onChange={(e) => setCheckBox(e.target.checked)}
                        label={
                            <Typography
                                variant="small"
                                color="#5A607F"
                                className="flex items-center justify-start font-medium font-['Inter']"
                            >
                                I agree to the terms and conditions
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button
                        className="mt-6 bg-[#1E5EFF] !rounded-[4px] text-[16px] font-medium font-['Inter']"
                        fullWidth
                        onClick={handleSubmit}
                    >
                        Create Account
                    </Button>

                    <div className="text-center gap-2 mt-6">
                        <Typography
                            variant="small"
                            color="#5A607F"
                            className="flex items-center justify-center font-['Inter']"
                        >
                            By creating an account, you agree to our{" "}
                        </Typography>
                        <Link
                            className="text-[#1E5EFF] font-small text-[14px]"
                        >
                            Terms of Service
                        </Link>
                    </div>
                    <div className="w-full bg-[#D7DBEC] h-[1px] mt-6"></div>
                    <Typography
                        variant="small"
                        color="#5A607F"
                        className="flex items-center justify-center mt-6 font-['Inter']"
                    >
                        Or create an account using:
                    </Typography>
                    <div className="space-y-4 mt-8">
                        <Button
                            size="lg"
                            color="white"
                            className="flex items-center gap-2 justify-center border-[#D9E1EC] border rounded-[4px] shadow-none font-['Inter']"
                            fullWidth
                        >
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_1156_824)">
                                    <path
                                        d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z"
                                        fill="#FBBC04"
                                    />
                                    <path
                                        d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z"
                                        fill="#EA4335"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1156_824">
                                        <rect
                                            width="16"
                                            height="16"
                                            fill="white"
                                            transform="translate(0.5)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>Continue With Google</span>
                        </Button>
                        <Button
                            size="lg"
                            color="white"
                            className="flex items-center gap-2 justify-center border border-[#D9E1EC] rounded-[4px] shadow-none font-['Inter']"
                            fullWidth
                        >
                            <img
                                src="/img/facebook-logo.svg"
                                height={24}
                                width={24}
                                alt=""
                            />
                            <span>Continue With Facebook</span>
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SignUp;
