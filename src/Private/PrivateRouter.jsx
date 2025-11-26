"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";
import Loading from "@/Components/Loading";

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <Loading></Loading>;
  }

  return <>{children}</>;
}
