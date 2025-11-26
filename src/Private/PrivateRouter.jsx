"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";
import Loading from "@/Components/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/login");
    }
  }, [user, router]);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user.email) {
    return children;
  }
}
