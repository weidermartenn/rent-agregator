export const authService = {
  async sendOtp(email: string): Promise<void> {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/send-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      },
    );

    if (!res.ok) throw new Error("Не удалось отправить код");
  },

  async verifyOtp(email: string, code: string): Promise<{ expiresAt: number }> {
    const res = await fetch(
      `/api/auth/verify-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
        credentials: "include",
      },
    );

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      throw new Error(data?.message || "Не удалось подтвердить код");
    }

    return res.json();
  },

  async logout(): Promise<void> {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
  },
};
