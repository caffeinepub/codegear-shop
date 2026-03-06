import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Hobby {
    id: bigint;
    name: string;
    createdAt: Time;
}
export type Time = bigint;
export interface backendInterface {
    addHobby(name: string): Promise<bigint>;
    getHobbies(): Promise<Array<Hobby>>;
    removeHobby(id: bigint): Promise<boolean>;
}
