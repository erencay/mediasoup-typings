// PipeTransport
// https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransport

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransport-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransportOptions
    export interface PipeTransportOptions<TAppData = Record<any, any>> {
        listenIp: TransportListenIp | string;
        enableSctp?: boolean;
        numSctpStreams?: TransportNumSctpStreams;
        maxSctpMessageSize?: number;
        appData?: TAppData;
    }

    export interface PipeTransport extends Transport {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransport-properties
        tuple?: Readonly<TransportTuple>;
        sctpParameters: Readonly<TransportSctpParameters>;
        sctpState: Readonly<SctpState>;
        observer: PlainRtpObserver;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransport-methods
        connect(options: { ip: string; port: number }): Promise<void>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransport-events
        on(event: "sctpstatechange", cb: (sctpState: SctpState) => void);
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#PipeTransport-observer-events
    interface PlainRtpObserver extends TransportObserver {
        on(event: "sctpstatechange", cb: (sctpState: SctpState) => void);
    }
}
