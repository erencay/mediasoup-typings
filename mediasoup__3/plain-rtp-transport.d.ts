// PlainRtpTransport
// https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransport

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransport-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransportOptions
    export interface PlainRtpTransportOptions<TAppData = Record<any, any>> {
        listenIp: TransportListenIp | string;
        rtcpMux?: boolean;
        comedia?: boolean;
        multiSource?: boolean;
        enableSctp?: boolean;
        numSctpStreams?: TransportNumSctpStreams;
        maxSctpMessageSize?: number;
        appData?: TAppData;
    }

    export interface PlainRtpTransport extends Transport {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransport-properties
        tuple?: Readonly<TransportTuple>;
        rtcpTuple?: Readonly<TransportTuple>;
        sctpParameters: Readonly<TransportSctpParameters>;
        sctpState: Readonly<SctpState>;
        observer: Readonly<PlainRtpObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransport-methods
        connect(options: { ip: string; port: number; rtcpPort?: number }): Promise<void>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransport-events
        on(event: "sctpstatechange", cb: (sctpState: SctpState) => void);
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#PlainRtpTransport-observer-events
    interface PlainRtpObserver extends TransportObserver {
        on(event: "sctpstatechange", cb: (sctpState: SctpState) => void);
    }
}
