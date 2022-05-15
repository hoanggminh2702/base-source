export type RemoveOptionalProperty<T extends Object, K extends string> = T & {
  [index in Extract<keyof T, K>]: Exclude<T[index], undefined>;
};
