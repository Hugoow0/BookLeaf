import { title } from "@/components/primitives";
import Signup from "@/components/signup";

export default function SignupPage() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className={title()}>Sign up</h1>
                <br />
            </div>
            <Signup />
        </div>
    );
}
