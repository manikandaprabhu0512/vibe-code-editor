import Image from "next/image";
import React from "react";
import SignInFormClient from "@/module/auth/components/SignInFormClient";

const Page = () => {
  return (
    <>
      <Image
        src={"/login.svg"}
        alt="Login"
        width={200}
        height={200}
        className="m-6 object-cover"
      />
      <SignInFormClient />
    </>
  );
};

export default Page;
