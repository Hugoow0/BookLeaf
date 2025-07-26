import { title } from "@/components/primitives";
import Login from "@/components/login";

export default function LoginPage() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h1 className={title()}>Login</h1>
                <br />
            </div>
            <Login />
        </div>
    );
}
