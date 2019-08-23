// Consumer
// https://mediasoup.org/documentation/v3/mediasoup/api/#Consumer

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Consumer-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ConsumerOptions
    export interface ConsumerOptions<TAppData = Record<any, any>> {
        producerId: string;
        rtpCapabilities: RtpCapabilities;
        paused?: boolean;
        preferredLayers?: ConsumerLayers;
        appData?: TAppData;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ConsumerLayers
    export interface ConsumerLayers {
        spatialLayer: number;
        temporalLayer?: number;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ConsumerRtpStreamScore
    export interface ConsumerRtpStreamScore {
        score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
        producerScore: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    }

    // Enums
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Consumer-enums

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ConsumerType
    export enum ConsumerType {
        SIMPLE = "simple",
        SIMULCAST = "simulcast",
        SVC = "svc",
        PIPE = "pipe",
    }

    export interface Consumer<TAppData = Record<any, any>> {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Consumer-properties
        id: Readonly<string>;
        producerId: Readonly<string>;
        closed: boolean;
        kind: Readonly<"audio" | "video">;
        rtpParameters: Readonly<RtpReceiveParameters>;
        type: Readonly<ConsumerType>;
        paused: Readonly<boolean>;
        producerPaused: Readonly<boolean>;
        score: Readonly<ConsumerRtpStreamScore>;
        currentLayers: Readonly<ConsumerLayers | null>;
        appData: Readonly<TAppData>;
        observer: Readonly<ConsumerObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Consumer-methods
        close(): Promise<void>;
        getStats(): Promise<Array<Record<any, any>>>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        setPreferredLayers(preferredLayers: ConsumerLayers): Promise<void>;
        requestKeyFrame(): Promise<void>;

        on(
            event:
                | "transportclose"
                | "producerclose"
                | "producerpause"
                | "producerresume",
            cb: () => void,
        );
        on(event: "score", cb: (score: ConsumerRtpStreamScore) => void);
        on(event: "layerschange", cb: (layers: ConsumerLayers | null) => void);
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Consumer-observer-events
    interface ConsumerObserver extends NodeJS.EventEmitter {
        on(event: "close" | "pause" | "resume", cb: () => void): this;
        on(event: "score", cb: (score: ConsumerRtpStreamScore) => void);
        on(event: "layerschange", cb: (layers: ConsumerLayers | null) => void);
    }
}
