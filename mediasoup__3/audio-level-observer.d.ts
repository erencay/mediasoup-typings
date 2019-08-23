// AudioLevelObserver
// https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserver

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserver-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserverOptions
    export interface AudioLevelObserverOptions {
        maxEntries?: number;
        threshold?: number;
        interval?: number;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserverVolume
    export interface AudioLevelObserverVolume {
        producer: Producer;
        volume: number;
    }

    export interface AudioLevelObserver extends RtpObserver {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserver-properties

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserver-methods

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#AudioLevelObserver-events
        on(event: "volumes", cb: (volumes: AudioLevelObserverVolume[]) => void): void;
    }
}
