import Image from "next/image";
import { signIn } from "next-auth/client";
const Login = () => {
  return (
    <div className="grid place-items-center ">
      <Image
        src="https://links.papareact.com/t4i"
        width={400}
        height={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="bg-blue-500 p-5 rounded-full text-white text-center cursor-pointer hover:bg-blue-600"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
