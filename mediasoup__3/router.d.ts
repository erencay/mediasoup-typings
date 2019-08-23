// Router
// https://mediasoup.org/documentation/v3/mediasoup/api/#Router
declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Router-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#RouterOptions
    export interface RouterOptions {
        mediaCodecs?: RouterRtpCodecCapability[];
    }

    interface PipeToRouterOpts {
        router: Router;
        listenIp?: string;
        enableSctp?: boolean;
        numSctpStreams?: TransportNumSctpStreams;
    }

    interface PipeToRouterOptsProducerId extends PipeToRouterOpts {
        producerId: string;
    }

    interface PipeToRouterOptsDataProducerId extends PipeToRouterOpts {
        dataProducerId: string;
    }

    export interface Router {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Router-properties
        id: Readonly<string>;
        closed: Readonly<boolean>;
        rtpCapabilities: Readonly<RtpCapabilities>;
        observer: Readonly<RouterObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Router-methods
        close(): Promise<void>;
        createWebRtcTransport<TAppData>(
            options: WebRtcTransportOptions<TAppData>,
        ): Promise<WebRtcTransport<TAppData>>;
        createPlainRtpTransport(
            options: PlainRtpTransportOptions,
        ): Promise<PlainRtpTransport>;
        createPipeTransport(options: PipeTransportOptions): Promise<PipeTransport>;
        pipeToRouter(
            options: PipeToRouterOptsProducerId | PipeToRouterOptsDataProducerId,
        ): Promise<{ pipeConsumer: Consumer; pipeProducer: Producer }>;
        createAudioLevelObserver(
            options: AudioLevelObserverOptions,
        ): Promise<AudioLevelObserver>;
        canConsume(options: {
            producerId: string;
            rtpCapabilities: RtpCapabilities;
        }): boolean;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Router-events
        on(event: "workerclose", cb: () => void): void;
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Worker-observer-events
    interface RouterObserver extends NodeJS.EventEmitter {
        on(event: "close", cb: () => void): this;
        on(event: "newtransport", cb: (transport: Transport) => void): this;
    }
}
