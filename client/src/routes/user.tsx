import { Title } from "../components/Title";
import { useNavigate } from "react-router-dom";
import { User } from "../components/User";
import { useSession } from "../lib/session";

export function UserPage() {
  const navigate = useNavigate();

  const userData = useSession();

  if (!userData) {
    navigate("/auth", { replace: true });
    return null;
  }

  if (userData === "loading") {
    return <Title>User</Title>;
  }

  return <User userData={userData} />;
}
