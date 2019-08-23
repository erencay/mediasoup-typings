// Device
// https://mediasoup.org/documentation/v3/mediasoup-client/api/#Device

declare module "mediasoup-client" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup-client/api/#Device-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup-client/api/#DeviceOptions
    export interface DeviceOptions {
        Handler?: any | string;
    }

    // https://mediasoup.org/documentation/v3/mediasoup-client/api/#DeviceSctpCapabilities
    export interface DeviceSctpCapabilities {
        numStreams: TransportNumSctpStreams;
    }

    declare class Device {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup-client/api/#Device-properties

        public handlerName: Readonly<string>;
        public loaded: Readonly<boolean>;
        public rtpCapabilities: Readonly<RtpCapabilities>;
        public sctpCapabilities: Readonly<DeviceSctpCapabilities>;

        // Constructor
        // https://mediasoup.org/documentation/v3/mediasoup-client/api/#Device-constructor
        constructor(options?: DeviceOptions);

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup-client/api/#Device-methods

        public load(options: { routerRtpCapabilities: RtpCapabilities }): Promise<void>;
        public canProduce(kind: "audio" | "video"): boolean;
        public createSendTransport(options: TransportOptions): Promise<Transport>;
        public createRecvTransport(options: TransportOptions): Promise<Transport>;
    }
}
