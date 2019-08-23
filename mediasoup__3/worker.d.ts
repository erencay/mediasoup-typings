import { EventEmitter } from "events";

// Worker
// https://mediasoup.org/documentation/v3/mediasoup/api/#Worker
declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Worker-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WorkerSettings
    export interface WorkerSettings extends WorkerUpdateableSettings {
        rtcMinPort?: number;
        rtcMaxPort?: number;
        dtlsCertificateFile?: string;
        dtlsPrivateKeyFile?: string;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WorkerUpdateableSettings
    export interface WorkerUpdateableSettings {
        logLevel?: "debug" | "warn" | "error" | "none";
        logTags?: string[];
    }

    export interface Worker {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Worker-properties
        pid: Readonly<number>;
        closed: Readonly<boolean>;
        observer: Readonly<WorkerObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Worker-methods
        close(): Promise<void>;
        updateSettings(settings: WorkerUpdateableSettings): Promise<void>;
        createRouter(options: RouterOptions): Promise<Router>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Worker-events
        on(event: "died", cb: () => void): void;
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Worker-observer-events
    interface WorkerObserver extends NodeJS.EventEmitter {
        on(event: "close", cb: () => void): this;
        on(event: "newrouter", cb: (router: Router) => void): this;
    }
}
