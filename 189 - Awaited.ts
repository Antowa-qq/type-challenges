type MyAwaited<T> = T extends PromiseLike<infer U> ? (U extends PromiseLike<any> ? MyAwaited<U> : U) : never;

type ExampleType = Promise<string>;

type Res = MyAwaited<ExampleType>; // string
