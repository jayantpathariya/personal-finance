import { LogoLargeIcon } from "@/components/icons/logo-large-icon";

export const Header = () => {
  return (
    <header className="flex items-center justify-center rounded-bl-xl rounded-br-xl bg-gray-900 p-5 lg:hidden">
      <LogoLargeIcon className="text-white" />
    </header>
  );
};
