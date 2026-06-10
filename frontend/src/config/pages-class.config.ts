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
}

export const PAGES = new PagesConfig();