import { signOut, useSession } from "next-auth/client";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div>
      <Header />
      {loading && <p>Loading..</p>}
      {!session && <LoginForm />}
      {session && (
        <div className="container mx-8">
          <p className="text-lg mb-4">
            Signed in as {session.user.name} ({session.user.email})
          </p>
          <button
            className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
