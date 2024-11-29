import { LogoLarge } from "@/components/icons/logo-large";

export const Header = () => {
  return (
    <header className="flex items-center justify-center rounded-bl-xl rounded-br-xl bg-gray-900 p-5 lg:hidden">
      <LogoLarge className="text-white" />
    </header>
  );
};
