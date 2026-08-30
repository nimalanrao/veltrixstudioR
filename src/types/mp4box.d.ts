declare module 'mp4box' {
  export interface MP4MediaTrack {
    id: number;
    created: Date;
    modified: Date;
    volume: number;
    track_width: number;
    track_height: number;
    timescale: number;
    duration: number;
    bitrate: number;
    codec: string;
    language: string;
    nb_samples: number;
  }

  export interface MP4VideoTrack extends MP4MediaTrack {
    video: {
      width: number;
      height: number;
    };
  }

  export interface MP4AudioTrack extends MP4MediaTrack {
    audio: {
      sample_rate: number;
      channel_count: number;
      sample_size: number;
    };
  }

  export interface MP4Info {
    duration: number;
    timescale: number;
    isFragmented: boolean;
    isProgressive: boolean;
    hasMoov: boolean;
    hasMdat: boolean;
    tracks: MP4MediaTrack[];
    videoTracks: MP4VideoTrack[];
    audioTracks: MP4AudioTrack[];
  }

  export interface MP4Sample {
    track_id: number;
    description: any;
    is_rap: boolean;
    is_sync: boolean;
    timescale: number;
    dts: number;
    cts: number;
    duration: number;
    size: number;
    data: Uint8Array;
  }

  export interface ExtractionOptions {
    nbSamples?: number;
    rapAlignment?: boolean;
  }

  export class DataStream {
    static BIG_ENDIAN: boolean;
    static LITTLE_ENDIAN: boolean;
    buffer: ArrayBuffer;
    position: number;
    constructor(arrayBuffer?: ArrayBuffer, byteOffset?: number, endianness?: boolean);
    writeUint8(val: number): void;
    writeUint16(val: number): void;
    writeUint32(val: number): void;
    writeString(str: string): void;
    writeUint8Array(arr: Uint8Array): void;
    readUint8(): number;
    readUint16(): number;
    readUint32(): number;
    readString(length: number): string;
    readUint8Array(length: number): Uint8Array;
  }

  export interface MP4File {
    onReady?: (info: MP4Info) => void;
    onError?: (e: string | Error) => void;
    onSamples?: (id: number, user: any, samples: MP4Sample[]) => void;
    appendBuffer(data: ArrayBuffer & { fileStart?: number }): number;
    start(): void;
    stop(): void;
    flush(): void;
    setExtractionOptions(id: number, user?: any, options?: ExtractionOptions): void;
    getTrackById(id: number): any;
    moov?: any;
  }

  export function createFile(): MP4File;
}
