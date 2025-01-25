export abstract class MessageQueue {
  abstract publish(params: PublishParams): void;
  abstract subscribe(params: SubscribeParams): void;
}

type JsonValue =
  | string
  | number
  | boolean
  | { [x: string]: JsonValue }
  | JsonValue[];

export type PublishParams = {
  topic: string;
  payload: JsonValue;
};

export type SubscribeParams = {
  topic: string;
  callback: (payload: JsonValue) => void;
};
