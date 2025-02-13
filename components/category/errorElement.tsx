import { Button } from "../ui/button";
import Link from "next/link";

function ErrorElement({
  error,
  refetch,
}: {
  error: string;
  refetch: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-2xl text-myPrimaryDark">
        Oooops‼️ There was Some error‼️
      </h1>
      <p className="text-4xl">⚠️ ⚠️ ⚠️</p>
      <p className="text-xl text-myPrimaryDark">{error}</p>
      <div className="flex items-center justify-center gap-4">
        <Button
          className="cursor-pointer bg-mySecondary"
          onClick={() => refetch()}
          style={{ transition: "all 0.6s" }}
        >
          Try again
        </Button>
        <p>or</p>
        <Button className="bg-myPrimary" style={{ transition: "all 0.6s" }}>
          <Link href="/" className="text-white">
            Go back to home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default ErrorElement;
