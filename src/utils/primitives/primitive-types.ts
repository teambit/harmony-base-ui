export type Nullable = undefined | null;
export type Primitive = string | number | bigint | boolean | Nullable;
export type JSON = { [key: string]: JSON | JSON[] | Primitive | Primitive[] };
