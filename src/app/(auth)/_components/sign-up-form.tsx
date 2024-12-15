import Image from "next/image";
import Link from "next/link";

import { LogoLargeIcon } from "@/components/icons/logo-large-icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SignUpForm = () => {
  return (
    <div className="flex h-full w-full">
      <div className="relative hidden h-full w-[44%] overflow-hidden rounded-xl bg-orange lg:block">
        <Image
          src="/images/auth-illustration.jpg"
          alt="Auth illustration"
          className="h-full w-full bg-contain"
          width={500}
          height={500}
        />
        <LogoLargeIcon className="absolute left-6 top-6 text-white" />
        <div className="absolute bottom-6 left-6 space-y-2 text-white">
          <p className="text-1">
            Keep track of your money and save for your future
          </p>
          <p className="text-4 text-white/80">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-grow items-center justify-center">
        <form className="w-full max-w-lg rounded-xl bg-white p-4">
          <h1 className="text-1 mb-6">Sign Up</h1>
          <div className="flex flex-col gap-y-6">
            <Input label="Name" type="text" />
            <Input label="Email" type="email" />
            <Input label="Create Password" type="password" secure />
            <Button className="w-full">Create Account</Button>
          </div>
          <p className="mt-6 text-center text-gray-500">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-grey-900 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
