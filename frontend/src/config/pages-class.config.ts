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

    MESSAGES() {
        return '/messages';
    }

    FAVORITES() {
        return '/favorites';
    }

    VIEWING_REQUESTS() {
        return '/viewing-requests';
    }
}

export const PAGES = new PagesConfig();