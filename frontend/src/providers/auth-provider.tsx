'use client';

import { User } from "@/shared/types";
import { useAuthStore } from "@/store/auth.store";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

async function fetchMe(): Promise<{ user: User; expiresAt: number }> {
    const res = await fetch(`/api/auth/me`, { credentials: "include" });
    if (!res.ok) throw new Error('Unauthorized');
    return res.json();
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { setAuth, clearAuth, expiresAt, isAuth } = useAuthStore();

    const [isExpired] = useState(() => (expiresAt ? Date.now() > expiresAt : true));

    const { data, isError } = useQuery({
        queryKey: ['me'],
        queryFn: fetchMe,
        retry: false,
        enabled: !isAuth || isExpired,
    });

    useEffect(() => {
        if (data) setAuth(data.user, data.expiresAt)
        if (isError) clearAuth();
    }, [data, isError, setAuth, clearAuth]);

    return <>{children}</>
}