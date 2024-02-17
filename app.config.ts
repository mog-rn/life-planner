import 'dotenv/config';

const myValue = 'L - Planner';

export default {
    name: myValue,
    icon: process.env.APP_ICON || './assets/icon.png',
    version: process.env.PROJECT_VERSION || '1.0.1',
    platforms: ['android'],
    orientation: 'portrait',
    owner: "mog-rn",
    slug: "life-planner",
    userInterfaceStyle: "light",
    splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
        "**/*"
    ],
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#ffffff"
        },
        package: "com.mogrn.lifeplanner",
        versionCode: 2,
    },
    web: {
        favicon: "./assets/favicon.png"
    },
    extra: {
        eas: {
            projectId: "50348197-6cb6-4e88-a474-9ebfa166b499",
        },
    },
};
