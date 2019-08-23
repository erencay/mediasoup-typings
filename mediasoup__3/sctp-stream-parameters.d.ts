// https://mediasoup.org/documentation/v3/mediasoup/sctp-parameters/

declare module "mediasoup" {
    // Dictionaries
    // https://mediasoup.org/documentation/v3/mediasoup/sctp-parameters/

    // https://mediasoup.org/documentation/v3/mediasoup/sctp-parameters/#SctpStreamParameters
    export interface SctpStreamParameters {
        ordered?: boolean;
        maxPacketLifeTime?: number;
        maxRetransmits?: number;
    }
}
