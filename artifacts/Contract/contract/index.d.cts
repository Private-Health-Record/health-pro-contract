import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type RecordMeta = { createdAt: bigint;
                           updatedAt: bigint;
                           version: bigint;
                           recordType: RecordType;
                           isEncrypted: boolean
                         };

export type DelegateInfo = { grantedBy: { bytes: Uint8Array };
                             grantedAt: bigint;
                             expiresAt: bigint;
                             accessLevel: AccessLevel
                           };

export type AuditEntry = { actor: { bytes: Uint8Array };
                           action: AuditAction;
                           target: { bytes: Uint8Array };
                           timestamp: bigint;
                           details: string
                         };

export enum AccountType { PROVIDER = 0, PATIENT = 1, DELEGATE = 2, AUDITOR = 3 }

export enum RecordType { MEDICAL_HISTORY = 0,
                         PRESCRIPTION = 1,
                         LAB_RESULT = 2,
                         IMAGING = 3,
                         CONSULTATION_NOTE = 4,
                         VACCINATION = 5,
                         ALLERGY = 6,
                         EMERGENCY_INFO = 7
}

export enum AccessLevel { READ_ONLY = 0, READ_WRITE = 1, EMERGENCY = 2, FULL = 3
}

export enum AuditAction { RECORD_CREATED = 0,
                          RECORD_UPDATED = 1,
                          RECORD_ACCESSED = 2,
                          ACCESS_GRANTED = 3,
                          ACCESS_REVOKED = 4,
                          PROVIDER_ADDED = 5,
                          PROVIDER_REMOVED = 6
}

export type Witnesses<T> = {
}

export type ImpureCircuits<T> = {
  register_account(context: __compactRuntime.CircuitContext<T>,
                   _accountType_0: AccountType): __compactRuntime.CircuitResults<T, boolean>;
  storeHealthRecord(context: __compactRuntime.CircuitContext<T>,
                    record_0: string,
                    recordType_0: RecordType): __compactRuntime.CircuitResults<T, []>;
  grantProviderAccess(context: __compactRuntime.CircuitContext<T>,
                      provider_0: { bytes: Uint8Array }): __compactRuntime.CircuitResults<T, []>;
  pause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  unpause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  compute_key_digest(privateKey_0: Uint8Array): Uint8Array;
  compute_commitment(userId_0: bigint, keyDigest_0: Uint8Array): Uint8Array;
  compute_auth_proof(commitment_0: Uint8Array,
                     randomChallenge_0: Uint8Array,
                     keyDigest_0: Uint8Array): Uint8Array;
  compute_integrity_proof(commitment_0: Uint8Array,
                          unencryptedHash_0: Uint8Array,
                          encryptedHash_0: Uint8Array,
                          keyDigest_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  register_account(context: __compactRuntime.CircuitContext<T>,
                   _accountType_0: AccountType): __compactRuntime.CircuitResults<T, boolean>;
  storeHealthRecord(context: __compactRuntime.CircuitContext<T>,
                    record_0: string,
                    recordType_0: RecordType): __compactRuntime.CircuitResults<T, []>;
  grantProviderAccess(context: __compactRuntime.CircuitContext<T>,
                      provider_0: { bytes: Uint8Array }): __compactRuntime.CircuitResults<T, []>;
  pause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  unpause(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  compute_key_digest(context: __compactRuntime.CircuitContext<T>,
                     privateKey_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
  compute_commitment(context: __compactRuntime.CircuitContext<T>,
                     userId_0: bigint,
                     keyDigest_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
  compute_auth_proof(context: __compactRuntime.CircuitContext<T>,
                     commitment_0: Uint8Array,
                     randomChallenge_0: Uint8Array,
                     keyDigest_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
  compute_integrity_proof(context: __compactRuntime.CircuitContext<T>,
                          commitment_0: Uint8Array,
                          unencryptedHash_0: Uint8Array,
                          encryptedHash_0: Uint8Array,
                          keyDigest_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  readonly PROVIDER_ROLE: Uint8Array;
  readonly PATIENT_ROLE: Uint8Array;
  readonly DELEGATE_ROLE: Uint8Array;
  readonly AUDITOR_ROLE: Uint8Array;
  registeredPatients: {
    isEmpty(): boolean;
    size(): bigint;
    member(elem_0: { bytes: Uint8Array }): boolean;
    [Symbol.iterator](): Iterator<{ bytes: Uint8Array }>
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
