import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export enum AccountType { PROVIDER = 0, PATIENT = 1 }

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
  register(context: __compactRuntime.CircuitContext<T>,
           _accountType_0: AccountType): __compactRuntime.CircuitResults<T, boolean>;
  storeHealthRecord(context: __compactRuntime.CircuitContext<T>,
                    record_0: string): __compactRuntime.CircuitResults<T, []>;
  pause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  unpause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
}

export type Circuits<T> = {
  register(context: __compactRuntime.CircuitContext<T>,
           _accountType_0: AccountType): __compactRuntime.CircuitResults<T, boolean>;
  storeHealthRecord(context: __compactRuntime.CircuitContext<T>,
                    record_0: string): __compactRuntime.CircuitResults<T, []>;
  pause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  unpause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
}

export type Ledger = {
  readonly PROVIDER_ROLE: Uint8Array;
  readonly PATIENT_ROLE: Uint8Array;
  readonly DELEGATE_ROLE: Uint8Array;
  registeredPatients: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: { bytes: Uint8Array }): boolean;
    lookup(key_0: { bytes: Uint8Array }): boolean;
    [Symbol.iterator](): Iterator<[{ bytes: Uint8Array }, boolean]>
  };
  registeredProviders: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: { bytes: Uint8Array }): boolean;
    [Symbol.iterator](): Iterator<{ bytes: Uint8Array }>
  };
  healthRecords: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: { bytes: Uint8Array }): boolean;
    lookup(key_0: { bytes: Uint8Array }): string;
    [Symbol.iterator](): Iterator<[{ bytes: Uint8Array }, string]>
  };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>,
               _initOwner_0: { is_left: boolean,
                               left: { bytes: Uint8Array },
                               right: { bytes: Uint8Array }
                             }): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
