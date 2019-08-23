// Transport
// https://mediasoup.org/documentation/v3/mediasoup/api/#Transport
declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Transport-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#TransportListenIp
    export interface TransportListenIp {
        ip: string;
        announcedIp?: string;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#TransportTuple
    export interface TransportTuple {
        localIP: string;
        localPort: number;
        remoteIP: string;
        remotePort: number;
        protocol: "udp" | "tcp";
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#TransportSctpParameters
    export interface TransportSctpParameters {
        port: 5000;
        OS: number;
        MIS: number;
        maxMessageSize: number;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#TransportNumSctpStreams
    export interface TransportNumSctpStreams {
        OS?: number;
        MIS?: number;
    }

    // Enums
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Transport-enums

    // https://mediasoup.org/documentation/v3/mediasoup/api/#TransportSctpState
    export enum SctpState {
        NEW = "new",
        CONNECTING = "connecting",
        CONNECTED = "connected",
        FAILED = "failed",
        CLOSED = "closed",
    }

    export abstract interface Transport<TAppData = Record<any, any>> {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Transport-properties
        id: Readonly<string>;
        closed: Readonly<boolean>;
        appData: Readonly<TAppData>;
        observer: Readonly<TransportObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Transport-methods
        close(): Promise<void>;
        getStats(): Promise<Array<Record<any, any>>>;
        connect(): Promise<void>;
        produce<TAppData = Record<any, any>>(
            options: ProducerOptions,
        ): Promise<Producer<TAppData>>;
        consume<TAppData = Record<any, any>>(
            options: ConsumerOptions,
        ): Promise<Consumer<TAppData>>;
        produceData<TAppData = Record<any, any>>(
            options?: DataProducerOptions,
        ): Promise<DataProducer<TAppData>>;
        consumeData<TAppData = Record<any, any>>(
            options: DataConsumerOptions,
        ): Promise<DataConsumer<TAppData>>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Transport-events
        on(event: "routerclose", cb: () => void): void;
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Transport-observer-events
    interface TransportObserver extends NodeJS.EventEmitter {
        on(event: "close", cb: () => void): this;
        on(event: "newproducer", cb: (producer: Producer) => void): this;
        on(event: "newconsumer", cb: (consumer: Consumer) => void): this;
        on(event: "newdataproducer", cb: (dataProducer: DataProducer) => void): this;
        on(event: "newdataconsumer", cb: (dataConsumer: DataConsumer) => void): this;
    }
}
