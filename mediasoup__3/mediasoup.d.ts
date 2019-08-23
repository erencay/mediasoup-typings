// https://mediasoup.org/documentation/v3/mediasoup/api/#mediasoup

declare module "mediasoup" {
    // Properties
    // https://mediasoup.org/documentation/v3/mediasoup/api/#mediasoup-properties
    export const version: Readonly<string>;
    export const observer: Readonly<MediasoupObserver>;

    // Functions
    // https://mediasoup.org/documentation/v3/mediasoup/api/#mediasoup-functions
    export function createWorker(settings?: WorkerSettings): Promise<Worker>;
    export function getSupportedRtpCapabilities(): RtpCapabilities;
    export function parseScalabilityMode(
        scalabilityMode?: string,
    ): {
        spatialLayers: number;
        temporalLayers: number;
    };

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#mediasoup-observer-events
    interface MediasoupObserver extends NodeJS.EventEmitter {
        on(event: "newworker", cb: (worker: Worker) => void): this;
    }
}
