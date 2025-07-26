"use client";

import React from "react";
import { Button, Input, Checkbox, Link, Form, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
export default function Component() {
    const [isVisible, setIsVisible] = React.useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("handleSubmit");
    };

    return (
        <div className="flex h-full w-full items-center justify-center">
            <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
                <div className="flex flex-col gap-1">
                    <h1 className="text-large font-medium">
                        Create your account
                    </h1>
                    <p className="text-small text-default-500">to join Acme</p>
                </div>

                <Form
                    className="flex flex-col gap-3"
                    validationBehavior="native"
                    onSubmit={handleSubmit}
                >
                    <Input
                        isRequired
                        label="Full Name"
                        name="fullName"
                        placeholder="Enter your full name"
                        type="text"
                        variant="bordered"
                    />
                    <Input
                        isRequired
                        label="Email Address"
                        name="email"
                        placeholder="Enter your email"
                        type="email"
                        variant="bordered"
                    />
                    <Input
                        isRequired
                        endContent={
                            <button type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="lucide:eye-off"
                                    />
                                ) : (
                                    <Icon
                                        className="pointer-events-none text-2xl text-default-400"
                                        icon="lucide:eye"
                                    />
                                )}
                            </button>
                        }
                        label="Password"
                        name="password"
                        placeholder="Create a password"
                        type={isVisible ? "text" : "password"}
                        variant="bordered"
                    />
                    <div className="flex w-full items-center px-1 py-2">
                        <Checkbox name="terms" size="sm">
                            I agree to the{" "}
                            <Link href="#" size="sm">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" size="sm">
                                Privacy Policy
                            </Link>
                        </Checkbox>
                    </div>
                    <Button className="w-full" color="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <div className="flex items-center gap-4 py-2">
                    <Divider className="flex-1" />
                    <p className="shrink-0 text-tiny text-default-500">OR</p>
                    <Divider className="flex-1" />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        startContent={
                            <Icon icon="logos:google-icon" width={24} />
                        }
                        variant="bordered"
                    >
                        Sign up with Google
                    </Button>
                    <Button
                        startContent={
                            <Icon icon="logos:github-icon" width={24} />
                        }
                        variant="bordered"
                    >
                        Sign up with Github
                    </Button>
                </div>
                <p className="text-center text-small">
                    Already have an account?&nbsp;
                    <Link href="/login" size="sm">
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
