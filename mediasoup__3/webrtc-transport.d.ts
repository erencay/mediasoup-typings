// WebRtcTransport
// https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport
declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-dictionaries

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportOptions
    export interface WebRtcTransportOptions<TAppData = Record<any, any>> {
        listenIps: TransportListenIp[] | TransportListenIp | string;
        enableUdp?: boolean;
        enableTcp?: boolean;
        preferUdp?: boolean;
        preferTcp?: boolean;
        initialAvailableOutgoingBitrate?: number;
        minimumAvailableOutgoingBitrate?: number;
        enableSctp?: boolean;
        numSctpStreams?: TransportNumSctpStreams;
        maxSctpMessageSize?: number;
        appData?: TAppData;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportIceParameters
    export interface IceParameters {
        usernameFragment?: string;
        password?: string;
        iceLite?: boolean;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportIceCandidate
    export interface IceCandidate {
        foundation: string;
        priority: number;
        ip: string;
        protocol: "udp" | "tcp";
        port: number;
        type: "host";
        tcpType?: "passive";
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportDtlsParameters
    export interface DtlsParameters {
        role?: DtlsRole;
        fingerprints: DtlsFingerprints;
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportDtlsFingerprints
    export interface DtlsFingerprints {
        "sha-1"?: string;
        "sha-224"?: string;
        "sha-256"?: string;
        "sha-384"?: string;
        "sha-512"?: string;
    }

    // Enums
    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-enums

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportIceState
    export enum IceState {
        NEW = "new",
        CONNECTED = "connected",
        COMPLETED = "completed",
        DISCONNECTED = "disconnected",
        CLOSED = "closed",
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportDtlsRole
    export enum DtlsRole {
        AUTO = "auto",
        CLIENT = "client",
        SERVER = "server",
    }

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransportDtlsState
    export enum DtlsState {
        NEW = "new",
        CONNECTING = "connecting",
        CONNECTED = "connected",
        FAILED = "failed",
        CLOSED = "closed",
    }

    export interface WebRtcTransport<TAppData = Record<any, any>>
        extends Transport<TAppData> {
        // Properties
        // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-properties
        iceRole: Readonly<"controlled">;
        iceParameters: Readonly<IceParameters>;
        iceCandidates: Readonly<IceCandidate[]>;
        iceState: Readonly<IceState>;
        iceSelectedTuple?: Readonly<TransportTuple>;
        dtlsParameters: Readonly<DtlsParameters>;
        dtlsState: Readonly<DtlsState>;
        dtlsRemoteCert: Readonly<string>;
        sctpParameters: Readonly<TransportSctpParameters>;
        sctpState: Readonly<SctpState>;
        observer: Readonly<WebRTCObserver>;

        // Methods
        // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-methods
        connect(options: { dtlsParameters: DtlsParameters }): Promise<void>;
        setMaxIncomingBitrate(bitrate: number): Promise<void>;
        restartIce(): Promise<IceParameters>;

        // Events
        // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-events
        on(event: "icestatechange", cb: (iceState: IceState) => void);
        on(
            event: "iceselectedtuplechange",
            cb: (iceSelectedTuple: TransportTuple) => void,
        );
        on(event: "dtlsstatechange", cb: (dtlsState: DtlsState) => void);
        on(event: "sctpstatechange", cb: (sctpState: SctpState) => void);
    }

    // Observer Events
    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-observer-events

    // https://mediasoup.org/documentation/v3/mediasoup/api/#WebRtcTransport-observer-events
    interface WebRTCObserver extends TransportObserver {
        on(event: "icestatechange", cb: (iceState: IceState) => void): this;
        on(
            event: "iceselectedtuplechange",
            cb: (iceSelectedTuple: TransportTuple) => void,
        );
        on(event: "dtlsstatechange", cb: (dtlsState: DtlsState) => void);
        on(event: "sctpstatechange", cb: (sctpState: SctpState) => void);
    }
}
