import { useAuth } from "../../AuthProvider/useAuth";

export const ProctedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não possui acesso</h1>;
  }

  return children;
};
