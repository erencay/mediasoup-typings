// DataConsumer
// https://mediasoup.org/documentation/v3/mediasoup/api/#DataConsumer

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#DataConsumer-dictionaries

    export interface DataConsumerOptions<TAppData = Record<any, any>> {
        producerId: string;
        appData?: TAppData;
    }

    export interface DataConsumer<TAppData = Record<any, any>> {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#DataConsumer-properties
        id: Readonly<string>;
        dataProducerId: Readonly<string>;
        closed: Readonly<boolean>;
        sctpStreamParameters: Readonly<SctpStreamParameters>;
        label: Readonly<string>;
        protocol: Readonly<string>;
        appData: Readonly<TAppData>;
        observer: Readonly<DataConsumerObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#DataConsumer-methods
        close(): Promise<void>;
        getStats(): Promise<Record<any, any>>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#DataConsumer-events
        on(event: "transportclose" | "dataproducerclose", cb: () => void);
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#DataConsumer-observer-events
    interface DataConsumerObserver extends NodeJS.EventEmitter {
        on(event: "close", cb: () => void);
    }
}
