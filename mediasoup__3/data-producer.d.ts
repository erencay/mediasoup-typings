// DataProducer
// https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducer

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducer-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducerOptions
    export interface DataProducerOptions<TAppData = Record<any, any>> {
        sctpStreamParameters: SctpStreamParameters;
        label?: string;
        protocol?: string;
        appData?: TAppData;
    }

    export interface DataProducer<TAppData = Record<any, any>> {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducer-properties
        id: Readonly<string>;
        closed: Readonly<boolean>;
        sctpStreamParameters: Readonly<SctpStreamParameters>;
        label: Readonly<string>;
        protocol: Readonly<string>;
        appData: Readonly<TAppData>;
        observer: Readonly<DataProducerObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducer-methods
        close(): Promise<void>;
        getStats(): Promise<Record<any, any>>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducer-events
        on(event: "transportclose", cb: () => void);
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#DataProducer-observer-events
    interface DataProducerObserver extends NodeJS.EventEmitter {
        on(event: "close", cb: () => void);
    }
}
