import { Input } from "@/components/ui/input";

export const SignInForm = () => {
  return (
    <form className="bg-white">
      <Input placeholder="Email" label="Email" />
      <Input
        placeholder="Password"
        label="Password"
        error="Password is required."
      />
      <Input placeholder="Search..." label="Search" search />
      <Input placeholder="Placeholder" prefixI />
    </form>
  );
};
