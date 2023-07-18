"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

// 01:37:00

type typeProvider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

type typeProviders = Record<string, typeProvider>;

const AuthProviders = () => {
  const [providers, setProviders] = useState<typeProviders | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();
      console.log(res);
      setProviders(res);
    };

    fetchProviders();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((v: typeProvider, i, a) => {
          return (
            <button
              key={i}
              onClick={() => signIn(v?.id)}
              className="text-black font-light text-base hover:underline"
            >
              SIGN IN
            </button>
          );
        })}
      </div>
    );
  }
};

export default AuthProviders;
