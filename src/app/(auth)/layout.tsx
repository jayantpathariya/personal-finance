import { Header } from "./_components/header";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default AuthLayout;
