import { ButtonLogOut, ButtonLogin } from "@/components/ButtonAuth";
import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
  <div>
     <h1>
        {session?.user ? "Authenticated" + session.user.name
      : "Not Authenticated"
        }
      </h1>
      <div>
        {session?.user ? (<ButtonLogOut/>)
          : (<ButtonLogin/>)
        }
      </div>
    </div>
      );
}
