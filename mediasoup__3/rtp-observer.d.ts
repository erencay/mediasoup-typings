// RtpObserver
// https://mediasoup.org/documentation/v3/mediasoup/api/#RtpObserver

declare module "mediasoup" {
    export abstract interface RtpObserver {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#RtpObserver-properties
        id: Readonly<string>;
        closed: Readonly<boolean>;
        paused: Readonly<boolean>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#RtpObserver-methods
        close(): Promise<void>;
        pause(): Promise<void>;
        resume(): Promise<void>;
        addProducer(producer: Producer): Promise<void>;
        removeProducer(producer: Producer): Promise<void>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#RtpObserver-events
        on(event: "routerclose", cb: () => void);
    }
}
