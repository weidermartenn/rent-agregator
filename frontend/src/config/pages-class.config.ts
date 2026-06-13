class PagesConfig {
    HOME() {
        return '/';
    }

    ABOUT() {
        return '/about';
    }

    CONTACT() {
        return '/contact';
    }

    LOGIN() {
        return '/login';
    }

    VERIFY_OTP(email: string) {
        return `/login/verify-otp?email=${encodeURIComponent(email)}`
    }

    PROFILE() {
        return '/profile';
    }
}

export const PAGES = new PagesConfig();