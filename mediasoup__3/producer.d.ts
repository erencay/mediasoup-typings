// Producer
// https://mediasoup.org/documentation/v3/mediasoup/api/#Producer

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Producer-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ProducerOptions
    export interface ProducerOptions<TAppData = Record<any, any>> {
        kind: "audio" | "video";
        rtpParameters: RtpSendParameters;
        paused?: boolean;
        appData?: TAppData;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ProducerRtpStreamScore
    export interface ProducerRtpStreamScore {
        ssrc: number;
        rid?: string;
        score: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ProducerVideoOrientation
    export interface ProducerVideoOrientation {
        camera: boolean;
        flip: boolean;
        rotation: 0 | 90 | 180 | 270;
    }

    // Enums
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Producer-enums

    // https://mediasoup.org/documentation/v3/mediasoup/api/#ProducerType
    export enum ProducerType {
        SIMPLE = "simple",
        SIMULCAST = "simulcast",
        SVC = "svc",
    }

    export interface Producer<TAppData = Record<any, any>> {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Producer-properties
        id: Readonly<string>;
        closed: Readonly<boolean>;
        kind: Readonly<"audio" | "video">;
        rtpParameters: Readonly<RtpSendParameters>;
        type: Readonly<ProducerType>;
        paused: Readonly<boolean>;
        score: Readonly<ProducerRtpStreamScore[]>;
        appData: Readonly<TAppData>;
        observer: Readonly<ProducerObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Producer-methods
        close(): Promise<void>;
        getStats(): Promise<Array<Record<any, any>>>;
        pause(): Promise<void>;
        resume(): Promise<void>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#Producer-events
        on(event: "transportclose", cb: () => void);
        on(event: "score", cb: (score: ProducerRtpStreamScore[]) => void);
        on(
            event: "videoorientationchange",
            cb: (videoOrientation: ProducerVideoOrientation) => void,
        );
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#Producer-observer-events
    interface ProducerObserver extends NodeJS.EventEmitter {
        on(event: "close" | "pause" | "resume", cb: () => void): this;
        on(event: "score", cb: (score: ProducerRtpStreamScore[]) => void): this;
        on(
            event: "videoorientationchange",
            cb: (videoOrientation: ProducerVideoOrientation) => void,
        );
    }
}
