export abstract class MessageQueue {
  abstract publish<P>(params: PublishParams<P>): void;
  abstract subscribe<P>(params: SubscribeParams<P>): void;
}

export type PublishParams<P> = {
  topic: string;
  payload: P;
};

export type SubscribeParams<P> = {
  topic: string;
  callback: (payload: P) => void;
};
