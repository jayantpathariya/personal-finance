import { Input } from "@/components/ui/input";

export const SignInForm = () => {
  return (
    <form className="bg-white">
      <Input placeholder="Email" />
      <Input placeholder="Password" error="Password is required." />
      <Input placeholder="Search..." search />
      <Input placeholder="Placeholder" prefixI />
    </form>
  );
};
