'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.8.1';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 52435875175126190479447740508185965837690552500527637822603658699938581184512n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

var AccountType;
(function (AccountType) {
  AccountType[AccountType['PROVIDER'] = 0] = 'PROVIDER';
  AccountType[AccountType['PATIENT'] = 1] = 'PATIENT';
  AccountType[AccountType['DELEGATE'] = 2] = 'DELEGATE';
  AccountType[AccountType['AUDITOR'] = 3] = 'AUDITOR';
})(AccountType = exports.AccountType || (exports.AccountType = {}));

var RecordType;
(function (RecordType) {
  RecordType[RecordType['MEDICAL_HISTORY'] = 0] = 'MEDICAL_HISTORY';
  RecordType[RecordType['PRESCRIPTION'] = 1] = 'PRESCRIPTION';
  RecordType[RecordType['LAB_RESULT'] = 2] = 'LAB_RESULT';
  RecordType[RecordType['IMAGING'] = 3] = 'IMAGING';
  RecordType[RecordType['CONSULTATION_NOTE'] = 4] = 'CONSULTATION_NOTE';
  RecordType[RecordType['VACCINATION'] = 5] = 'VACCINATION';
  RecordType[RecordType['ALLERGY'] = 6] = 'ALLERGY';
  RecordType[RecordType['EMERGENCY_INFO'] = 7] = 'EMERGENCY_INFO';
})(RecordType = exports.RecordType || (exports.RecordType = {}));

var AccessLevel;
(function (AccessLevel) {
  AccessLevel[AccessLevel['READ_ONLY'] = 0] = 'READ_ONLY';
  AccessLevel[AccessLevel['READ_WRITE'] = 1] = 'READ_WRITE';
  AccessLevel[AccessLevel['EMERGENCY'] = 2] = 'EMERGENCY';
  AccessLevel[AccessLevel['FULL'] = 3] = 'FULL';
})(AccessLevel = exports.AccessLevel || (exports.AccessLevel = {}));

var AuditAction;
(function (AuditAction) {
  AuditAction[AuditAction['RECORD_CREATED'] = 0] = 'RECORD_CREATED';
  AuditAction[AuditAction['RECORD_UPDATED'] = 1] = 'RECORD_UPDATED';
  AuditAction[AuditAction['RECORD_ACCESSED'] = 2] = 'RECORD_ACCESSED';
  AuditAction[AuditAction['ACCESS_GRANTED'] = 3] = 'ACCESS_GRANTED';
  AuditAction[AuditAction['ACCESS_REVOKED'] = 4] = 'ACCESS_REVOKED';
  AuditAction[AuditAction['PROVIDER_ADDED'] = 5] = 'PROVIDER_ADDED';
  AuditAction[AuditAction['PROVIDER_REMOVED'] = 6] = 'PROVIDER_REMOVED';
})(AuditAction = exports.AuditAction || (exports.AuditAction = {}));

const _descriptor_0 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_1 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_2 = new _ZswapCoinPublicKey_0();

const _descriptor_3 = new __compactRuntime.CompactTypeBoolean();

const _descriptor_4 = new __compactRuntime.CompactTypeEnum(3, 1);

const _descriptor_5 = new __compactRuntime.CompactTypeOpaqueString();

const _descriptor_6 = new __compactRuntime.CompactTypeEnum(7, 1);

class _ContractAddress_0 {
  alignment() {
    return _descriptor_0.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_0.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0.bytes);
  }
}

const _descriptor_7 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_3.alignment().concat(_descriptor_2.alignment().concat(_descriptor_7.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_3.fromValue(value_0),
      left: _descriptor_2.fromValue(value_0),
      right: _descriptor_7.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_3.toValue(value_0.is_left).concat(_descriptor_2.toValue(value_0.left).concat(_descriptor_7.toValue(value_0.right)));
  }
}

const _descriptor_8 = new _Either_0();

const _descriptor_9 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _tuple_0 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment())));
  }
  fromValue(value_0) {
    return [
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0[0]).concat(_descriptor_0.toValue(value_0[1]).concat(_descriptor_0.toValue(value_0[2]).concat(_descriptor_0.toValue(value_0[3]))));
  }
}

const _descriptor_10 = new _tuple_0();

class _tuple_1 {
  alignment() {
    return _descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment().concat(_descriptor_0.alignment()))));
  }
  fromValue(value_0) {
    return [
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0),
      _descriptor_0.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_0.toValue(value_0[0]).concat(_descriptor_0.toValue(value_0[1]).concat(_descriptor_0.toValue(value_0[2]).concat(_descriptor_0.toValue(value_0[3]).concat(_descriptor_0.toValue(value_0[4])))));
  }
}

const _descriptor_11 = new _tuple_1();

class _tuple_2 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_0.alignment());
  }
  fromValue(value_0) {
    return [
      _descriptor_1.fromValue(value_0),
      _descriptor_0.fromValue(value_0)
    ]
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0[0]).concat(_descriptor_0.toValue(value_0[1]));
  }
}

const _descriptor_12 = new _tuple_2();

const _descriptor_13 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

const _descriptor_14 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    }
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object') {
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    }
    this.witnesses = witnesses_0;
    this.circuits = {
      register_account: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`register_account: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const _accountType_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('register_account',
                                      'argument 1 (as invoked from Typescript)',
                                      'HealthPro.compact line 126 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(_accountType_0) === 'number' && _accountType_0 >= 0 && _accountType_0 <= 3)) {
          __compactRuntime.type_error('register_account',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'HealthPro.compact line 126 char 1',
                                      'Enum<AccountType, PROVIDER, PATIENT, DELEGATE, AUDITOR>',
                                      _accountType_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_4.toValue(_accountType_0),
            alignment: _descriptor_4.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._register_account_0(context,
                                                  partialProofData,
                                                  _accountType_0);
        partialProofData.output = { value: _descriptor_3.toValue(result_0), alignment: _descriptor_3.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      storeHealthRecord: (...args_1) => {
        if (args_1.length !== 3) {
          throw new __compactRuntime.CompactError(`storeHealthRecord: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const record_0 = args_1[1];
        const recordType_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('storeHealthRecord',
                                      'argument 1 (as invoked from Typescript)',
                                      'HealthPro.compact line 156 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(recordType_0) === 'number' && recordType_0 >= 0 && recordType_0 <= 7)) {
          __compactRuntime.type_error('storeHealthRecord',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'HealthPro.compact line 156 char 1',
                                      'Enum<RecordType, MEDICAL_HISTORY, PRESCRIPTION, LAB_RESULT, IMAGING, CONSULTATION_NOTE, VACCINATION, ALLERGY, EMERGENCY_INFO>',
                                      recordType_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_5.toValue(record_0).concat(_descriptor_6.toValue(recordType_0)),
            alignment: _descriptor_5.alignment().concat(_descriptor_6.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._storeHealthRecord_0(context,
                                                   partialProofData,
                                                   record_0,
                                                   recordType_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      grantProviderAccess: (...args_1) => {
        if (args_1.length !== 2) {
          throw new __compactRuntime.CompactError(`grantProviderAccess: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        const provider_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('grantProviderAccess',
                                      'argument 1 (as invoked from Typescript)',
                                      'HealthPro.compact line 164 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        if (!(typeof(provider_0) === 'object' && provider_0.bytes.buffer instanceof ArrayBuffer && provider_0.bytes.BYTES_PER_ELEMENT === 1 && provider_0.bytes.length === 32)) {
          __compactRuntime.type_error('grantProviderAccess',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'HealthPro.compact line 164 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      provider_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_2.toValue(provider_0),
            alignment: _descriptor_2.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._grantProviderAccess_0(context,
                                                     partialProofData,
                                                     provider_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      pause: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`pause: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('pause',
                                      'argument 1 (as invoked from Typescript)',
                                      'HealthPro.compact line 176 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._pause_0(context, partialProofData);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      unpause: (...args_1) => {
        if (args_1.length !== 1) {
          throw new __compactRuntime.CompactError(`unpause: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        }
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined)) {
          __compactRuntime.type_error('unpause',
                                      'argument 1 (as invoked from Typescript)',
                                      'HealthPro.compact line 181 char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        }
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this._unpause_0(context, partialProofData);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      compute_key_digest(context, ...args_1) {
        return { result: pureCircuits.compute_key_digest(...args_1), context };
      },
      compute_commitment(context, ...args_1) {
        return { result: pureCircuits.compute_commitment(...args_1), context };
      },
      compute_auth_proof(context, ...args_1) {
        return { result: pureCircuits.compute_auth_proof(...args_1), context };
      },
      compute_integrity_proof(context, ...args_1) {
        return { result: pureCircuits.compute_integrity_proof(...args_1), context };
      }
    };
    this.impureCircuits = {
      register_account: this.circuits.register_account,
      storeHealthRecord: this.circuits.storeHealthRecord,
      grantProviderAccess: this.circuits.grantProviderAccess,
      pause: this.circuits.pause,
      unpause: this.circuits.unpause
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const constructorContext_0 = args_0[0];
    const _initOwner_0 = args_0[1];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!(typeof(_initOwner_0) === 'object' && typeof(_initOwner_0.is_left) === 'boolean' && typeof(_initOwner_0.left) === 'object' && _initOwner_0.left.bytes.buffer instanceof ArrayBuffer && _initOwner_0.left.bytes.BYTES_PER_ELEMENT === 1 && _initOwner_0.left.bytes.length === 32 && typeof(_initOwner_0.right) === 'object' && _initOwner_0.right.bytes.buffer instanceof ArrayBuffer && _initOwner_0.right.bytes.BYTES_PER_ELEMENT === 1 && _initOwner_0.right.bytes.length === 32)) {
      __compactRuntime.type_error('Contract state constructor',
                                  'argument 1 (argument 2 as invoked from Typescript)',
                                  'HealthPro.compact line 106 char 1',
                                  'struct Either<is_left: Boolean, left: struct ZswapCoinPublicKey<bytes: Bytes<32>>, right: struct ContractAddress<bytes: Bytes<32>>>',
                                  _initOwner_0)
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('register_account', new __compactRuntime.ContractOperation());
    state_0.setOperation('storeHealthRecord', new __compactRuntime.ContractOperation());
    state_0.setOperation('grantProviderAccess', new __compactRuntime.ContractOperation());
    state_0.setOperation('pause', new __compactRuntime.ContractOperation());
    state_0.setOperation('unpause', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(0n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(1n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(2n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(3n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(false),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(4n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(5n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(6n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(7n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(8n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(9n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(10n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    this.__grantRole_0(context,
                       partialProofData,
                       _descriptor_0.fromValue(Contract._query(context,
                                                               partialProofData,
                                                               [
                                                                { dup: { n: 0 } },
                                                                { idx: { cached: false,
                                                                         pushPath: false,
                                                                         path: [
                                                                                { tag: 'value',
                                                                                  value: { value: _descriptor_13.toValue(2n),
                                                                                           alignment: _descriptor_13.alignment() } }] } },
                                                                { popeq: { cached: false,
                                                                           result: undefined } }]).value),
                       _initOwner_0);
    const tmp_0 = this._persistentHash_0(new Uint8Array([80, 82, 79, 86, 73, 68, 69, 82, 95, 82, 79, 76, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(4n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_0),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_1 = this._persistentHash_0(new Uint8Array([80, 65, 84, 73, 69, 78, 84, 95, 82, 79, 76, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(5n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_2 = this._persistentHash_0(new Uint8Array([68, 69, 76, 69, 71, 65, 84, 69, 95, 82, 79, 76, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(6n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_2),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_3 = this._persistentHash_0(new Uint8Array([65, 85, 68, 73, 84, 79, 82, 95, 82, 79, 76, 69, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(7n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_3),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  _left_0(value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  _persistentHash_0(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_0, value_0);
    return result_0;
  }
  _persistentHash_1(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_12, value_0);
    return result_0;
  }
  _persistentHash_2(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_10, value_0);
    return result_0;
  }
  _persistentHash_3(value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_11, value_0);
    return result_0;
  }
  _ownPublicKey_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_2.toValue(result_0),
      alignment: _descriptor_2.alignment()
    });
    return result_0;
  }
  _hasRole_0(context, partialProofData, roleId_0, account_0) {
    if (_descriptor_3.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_13.toValue(0n),
                                                                            alignment: _descriptor_13.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(roleId_0),
                                                                                                        alignment: _descriptor_0.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value)
        &&
        _descriptor_3.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_13.toValue(0n),
                                                                            alignment: _descriptor_13.alignment() } },
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_0.toValue(roleId_0),
                                                                            alignment: _descriptor_0.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(account_0),
                                                                                                        alignment: _descriptor_8.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value))
    {
      return _descriptor_3.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(0n),
                                                                                 alignment: _descriptor_13.alignment() } },
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_0.toValue(roleId_0),
                                                                                 alignment: _descriptor_0.alignment() } }] } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_8.toValue(account_0),
                                                                                 alignment: _descriptor_8.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    } else {
      return false;
    }
  }
  _assertOnlyRole_0(context, partialProofData, roleId_0) {
    this.__checkRole_0(context,
                       partialProofData,
                       roleId_0,
                       this._left_0(this._ownPublicKey_0(context,
                                                         partialProofData)));
    return [];
  }
  __checkRole_0(context, partialProofData, roleId_0, account_0) {
    __compactRuntime.assert(this._hasRole_0(context,
                                            partialProofData,
                                            roleId_0,
                                            account_0),
                            'AccessControl: unauthorized account');
    return [];
  }
  __grantRole_0(context, partialProofData, roleId_0, account_0) {
    __compactRuntime.assert(!this._isContractAddress_0(account_0),
                            'AccessControl: unsafe role approval');
    return this.__unsafeGrantRole_0(context,
                                    partialProofData,
                                    roleId_0,
                                    account_0);
  }
  __unsafeGrantRole_0(context, partialProofData, roleId_0, account_0) {
    if (this._hasRole_0(context, partialProofData, roleId_0, account_0)) {
      return false;
    } else {
      if (!_descriptor_3.fromValue(Contract._query(context,
                                                   partialProofData,
                                                   [
                                                    { dup: { n: 0 } },
                                                    { idx: { cached: false,
                                                             pushPath: false,
                                                             path: [
                                                                    { tag: 'value',
                                                                      value: { value: _descriptor_13.toValue(0n),
                                                                               alignment: _descriptor_13.alignment() } }] } },
                                                    { push: { storage: false,
                                                              value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(roleId_0),
                                                                                                           alignment: _descriptor_0.alignment() }).encode() } },
                                                    'member',
                                                    { popeq: { cached: true,
                                                               result: undefined } }]).value))
      {
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(0n),
                                                    alignment: _descriptor_13.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(roleId_0),
                                                                                alignment: _descriptor_0.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newMap(
                                            new __compactRuntime.StateMap()
                                          ).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(0n),
                                                    alignment: _descriptor_13.alignment() } },
                                         { tag: 'value',
                                           value: { value: _descriptor_0.toValue(roleId_0),
                                                    alignment: _descriptor_0.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(account_0),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(true),
                                                                                alignment: _descriptor_3.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 2 } }]);
        return true;
      } else {
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(0n),
                                                    alignment: _descriptor_13.alignment() } },
                                         { tag: 'value',
                                           value: { value: _descriptor_0.toValue(roleId_0),
                                                    alignment: _descriptor_0.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_8.toValue(account_0),
                                                                                alignment: _descriptor_8.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(true),
                                                                                alignment: _descriptor_3.alignment() }).encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 2 } }]);
        return true;
      }
    }
  }
  _isContractAddress_0(keyOrAddress_0) { return !keyOrAddress_0.is_left; }
  _assertPaused_0(context, partialProofData) {
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_13.toValue(3n),
                                                                                                alignment: _descriptor_13.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value),
                            'Pausable: not paused');
    return [];
  }
  _assertNotPaused_0(context, partialProofData) {
    __compactRuntime.assert(!_descriptor_3.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_13.toValue(3n),
                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                      { popeq: { cached: false,
                                                                                 result: undefined } }]).value),
                            'Pausable: paused');
    return [];
  }
  __pause_0(context, partialProofData) {
    this._assertNotPaused_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(3n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(true),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  __unpause_0(context, partialProofData) {
    this._assertPaused_0(context, partialProofData);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_13.toValue(3n),
                                                                            alignment: _descriptor_13.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(false),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  _isContractAddress_1(keyOrAddress_0) { return !keyOrAddress_0.is_left; }
  _register_account_0(context, partialProofData, _accountType_0) {
    this._assertNotPaused_0(context, partialProofData);
    const caller_0 = this._left_0(this._ownPublicKey_0(context, partialProofData));
    __compactRuntime.assert(!this._isContractAddress_1(caller_0),
                            'HealthPro: contract address not allowed');
    if (_accountType_0 === 0) {
      let tmp_0;
      __compactRuntime.assert(!(tmp_0 = caller_0.left,
                                _descriptor_3.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_13.toValue(9n),
                                                                                                    alignment: _descriptor_13.alignment() } }] } },
                                                                         { push: { storage: false,
                                                                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_0),
                                                                                                                                alignment: _descriptor_2.alignment() }).encode() } },
                                                                         'member',
                                                                         { popeq: { cached: true,
                                                                                    result: undefined } }]).value)),
                              'HealthPro: account already registered as a provider');
      const tmp_1 = caller_0.left;
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_13.toValue(9n),
                                                  alignment: _descriptor_13.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_1),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      this.__grantRole_0(context,
                         partialProofData,
                         _descriptor_0.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 0 } },
                                                                  { idx: { cached: false,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_13.toValue(4n),
                                                                                             alignment: _descriptor_13.alignment() } }] } },
                                                                  { popeq: { cached: false,
                                                                             result: undefined } }]).value),
                         caller_0);
      return true;
    } else {
      if (_accountType_0 === 1) {
        let tmp_2;
        __compactRuntime.assert(!(tmp_2 = caller_0.left,
                                  _descriptor_3.fromValue(Contract._query(context,
                                                                          partialProofData,
                                                                          [
                                                                           { dup: { n: 0 } },
                                                                           { idx: { cached: false,
                                                                                    pushPath: false,
                                                                                    path: [
                                                                                           { tag: 'value',
                                                                                             value: { value: _descriptor_13.toValue(8n),
                                                                                                      alignment: _descriptor_13.alignment() } }] } },
                                                                           { push: { storage: false,
                                                                                     value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_2),
                                                                                                                                  alignment: _descriptor_2.alignment() }).encode() } },
                                                                           'member',
                                                                           { popeq: { cached: true,
                                                                                      result: undefined } }]).value)),
                                'HealthPro: account already registered as a patient');
        const tmp_3 = caller_0.left;
        Contract._query(context,
                        partialProofData,
                        [
                         { idx: { cached: false,
                                  pushPath: true,
                                  path: [
                                         { tag: 'value',
                                           value: { value: _descriptor_13.toValue(8n),
                                                    alignment: _descriptor_13.alignment() } }] } },
                         { push: { storage: false,
                                   value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_3),
                                                                                alignment: _descriptor_2.alignment() }).encode() } },
                         { push: { storage: true,
                                   value: __compactRuntime.StateValue.newNull().encode() } },
                         { ins: { cached: false, n: 1 } },
                         { ins: { cached: true, n: 1 } }]);
        this.__grantRole_0(context,
                           partialProofData,
                           _descriptor_0.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_13.toValue(5n),
                                                                                               alignment: _descriptor_13.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value),
                           caller_0);
        return true;
      } else {
        return false;
      }
    }
  }
  _storeHealthRecord_0(context, partialProofData, record_0, recordType_0) {
    this._assertNotPaused_0(context, partialProofData);
    const caller_0 = this._left_0(this._ownPublicKey_0(context, partialProofData));
    let tmp_0;
    __compactRuntime.assert((tmp_0 = caller_0.left,
                             _descriptor_3.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_13.toValue(8n),
                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_2.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'HealthPro: caller not registered as a patient');
    const tmp_1 = caller_0.left;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_13.toValue(10n),
                                                alignment: _descriptor_13.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_1),
                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_5.toValue(record_0),
                                                                            alignment: _descriptor_5.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  _grantProviderAccess_0(context, partialProofData, provider_0) {
    this._assertNotPaused_0(context, partialProofData);
    const caller_0 = this._left_0(this._ownPublicKey_0(context, partialProofData));
    let tmp_0;
    __compactRuntime.assert((tmp_0 = caller_0.left,
                             _descriptor_3.fromValue(Contract._query(context,
                                                                     partialProofData,
                                                                     [
                                                                      { dup: { n: 0 } },
                                                                      { idx: { cached: false,
                                                                               pushPath: false,
                                                                               path: [
                                                                                      { tag: 'value',
                                                                                        value: { value: _descriptor_13.toValue(8n),
                                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                                      { push: { storage: false,
                                                                                value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_0),
                                                                                                                             alignment: _descriptor_2.alignment() }).encode() } },
                                                                      'member',
                                                                      { popeq: { cached: true,
                                                                                 result: undefined } }]).value)),
                            'HealthPro: caller not registered as a patient');
    __compactRuntime.assert(_descriptor_3.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_13.toValue(9n),
                                                                                                alignment: _descriptor_13.alignment() } }] } },
                                                                     { push: { storage: false,
                                                                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(provider_0),
                                                                                                                            alignment: _descriptor_2.alignment() }).encode() } },
                                                                     'member',
                                                                     { popeq: { cached: true,
                                                                                result: undefined } }]).value),
                            'HealthPro: target account not registered as a provider');
    return [];
  }
  _pause_0(context, partialProofData) {
    this._assertOnlyRole_0(context,
                           partialProofData,
                           _descriptor_0.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_13.toValue(2n),
                                                                                               alignment: _descriptor_13.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value));
    this.__pause_0(context, partialProofData);
    return [];
  }
  _unpause_0(context, partialProofData) {
    this._assertOnlyRole_0(context,
                           partialProofData,
                           _descriptor_0.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_13.toValue(2n),
                                                                                               alignment: _descriptor_13.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value));
    this.__unpause_0(context, partialProofData);
    return [];
  }
  _compute_key_digest_0(privateKey_0) {
    return this._persistentHash_0(privateKey_0);
  }
  _compute_commitment_0(userId_0, keyDigest_0) {
    return this._persistentHash_1([userId_0, keyDigest_0]);
  }
  _compute_auth_proof_0(commitment_0, randomChallenge_0, keyDigest_0) {
    const tag_0 = new Uint8Array([104, 101, 97, 108, 116, 104, 112, 114, 111, 58, 97, 117, 116, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    return this._persistentHash_2([tag_0,
                                   commitment_0,
                                   randomChallenge_0,
                                   keyDigest_0]);
  }
  _compute_integrity_proof_0(commitment_0,
                             unencryptedHash_0,
                             encryptedHash_0,
                             keyDigest_0)
  {
    const tag_0 = new Uint8Array([104, 101, 97, 108, 116, 104, 112, 114, 111, 58, 105, 110, 116, 101, 103, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    return this._persistentHash_3([tag_0,
                                   commitment_0,
                                   unencryptedHash_0,
                                   encryptedHash_0,
                                   keyDigest_0]);
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    get PROVIDER_ROLE() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(4n),
                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get PATIENT_ROLE() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(5n),
                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get DELEGATE_ROLE() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(6n),
                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get AUDITOR_ROLE() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_13.toValue(7n),
                                                                                 alignment: _descriptor_13.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    registeredPatients: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(8n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(0n),
                                                                                                               alignment: _descriptor_9.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_9.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(8n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(typeof(elem_0) === 'object' && elem_0.bytes.buffer instanceof ArrayBuffer && elem_0.bytes.BYTES_PER_ELEMENT === 1 && elem_0.bytes.length === 32)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'HealthPro.compact line 96 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      elem_0)
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(8n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(elem_0),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[8];
        return self_0.asMap().keys().map((elem) => _descriptor_2.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    registeredProviders: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(0n),
                                                                                                               alignment: _descriptor_9.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_9.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const elem_0 = args_0[0];
        if (!(typeof(elem_0) === 'object' && elem_0.bytes.buffer instanceof ArrayBuffer && elem_0.bytes.BYTES_PER_ELEMENT === 1 && elem_0.bytes.length === 32)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'HealthPro.compact line 98 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      elem_0)
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(9n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(elem_0),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[9];
        return self_0.asMap().keys().map((elem) => _descriptor_2.fromValue(elem.value))[Symbol.iterator]();
      }
    },
    healthRecords: {
      isEmpty(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`isEmpty: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(10n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(0n),
                                                                                                               alignment: _descriptor_9.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        }
        return _descriptor_9.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(10n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32)) {
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'HealthPro.compact line 100 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        }
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(10n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(key_0),
                                                                                                               alignment: _descriptor_2.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1) {
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        }
        const key_0 = args_0[0];
        if (!(typeof(key_0) === 'object' && key_0.bytes.buffer instanceof ArrayBuffer && key_0.bytes.BYTES_PER_ELEMENT === 1 && key_0.bytes.length === 32)) {
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'HealthPro.compact line 100 char 1',
                                      'struct ZswapCoinPublicKey<bytes: Bytes<32>>',
                                      key_0)
        }
        return _descriptor_5.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_13.toValue(10n),
                                                                                   alignment: _descriptor_13.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_2.toValue(key_0),
                                                                                   alignment: _descriptor_2.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0) {
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        }
        const self_0 = state.asArray()[10];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_2.fromValue(key.value),      _descriptor_5.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({ });
const pureCircuits = {
  compute_key_digest: (...args_0) => {
    if (args_0.length !== 1) {
      throw new __compactRuntime.CompactError(`compute_key_digest: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    }
    const privateKey_0 = args_0[0];
    if (!(privateKey_0.buffer instanceof ArrayBuffer && privateKey_0.BYTES_PER_ELEMENT === 1 && privateKey_0.length === 32)) {
      __compactRuntime.type_error('compute_key_digest',
                                  'argument 1',
                                  'HealthPro.compact line 191 char 1',
                                  'Bytes<32>',
                                  privateKey_0)
    }
    return _dummyContract._compute_key_digest_0(privateKey_0);
  },
  compute_commitment: (...args_0) => {
    if (args_0.length !== 2) {
      throw new __compactRuntime.CompactError(`compute_commitment: expected 2 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const userId_0 = args_0[0];
    const keyDigest_0 = args_0[1];
    if (!(typeof(userId_0) === 'bigint' && userId_0 >= 0n && userId_0 <= 4294967295n)) {
      __compactRuntime.type_error('compute_commitment',
                                  'argument 1',
                                  'HealthPro.compact line 196 char 1',
                                  'Uint<0..4294967295>',
                                  userId_0)
    }
    if (!(keyDigest_0.buffer instanceof ArrayBuffer && keyDigest_0.BYTES_PER_ELEMENT === 1 && keyDigest_0.length === 32)) {
      __compactRuntime.type_error('compute_commitment',
                                  'argument 2',
                                  'HealthPro.compact line 196 char 1',
                                  'Bytes<32>',
                                  keyDigest_0)
    }
    return _dummyContract._compute_commitment_0(userId_0, keyDigest_0);
  },
  compute_auth_proof: (...args_0) => {
    if (args_0.length !== 3) {
      throw new __compactRuntime.CompactError(`compute_auth_proof: expected 3 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const commitment_0 = args_0[0];
    const randomChallenge_0 = args_0[1];
    const keyDigest_0 = args_0[2];
    if (!(commitment_0.buffer instanceof ArrayBuffer && commitment_0.BYTES_PER_ELEMENT === 1 && commitment_0.length === 32)) {
      __compactRuntime.type_error('compute_auth_proof',
                                  'argument 1',
                                  'HealthPro.compact line 202 char 1',
                                  'Bytes<32>',
                                  commitment_0)
    }
    if (!(randomChallenge_0.buffer instanceof ArrayBuffer && randomChallenge_0.BYTES_PER_ELEMENT === 1 && randomChallenge_0.length === 32)) {
      __compactRuntime.type_error('compute_auth_proof',
                                  'argument 2',
                                  'HealthPro.compact line 202 char 1',
                                  'Bytes<32>',
                                  randomChallenge_0)
    }
    if (!(keyDigest_0.buffer instanceof ArrayBuffer && keyDigest_0.BYTES_PER_ELEMENT === 1 && keyDigest_0.length === 32)) {
      __compactRuntime.type_error('compute_auth_proof',
                                  'argument 3',
                                  'HealthPro.compact line 202 char 1',
                                  'Bytes<32>',
                                  keyDigest_0)
    }
    return _dummyContract._compute_auth_proof_0(commitment_0,
                                                randomChallenge_0,
                                                keyDigest_0);
  },
  compute_integrity_proof: (...args_0) => {
    if (args_0.length !== 4) {
      throw new __compactRuntime.CompactError(`compute_integrity_proof: expected 4 arguments (as invoked from Typescript), received ${args_0.length}`);
    }
    const commitment_0 = args_0[0];
    const unencryptedHash_0 = args_0[1];
    const encryptedHash_0 = args_0[2];
    const keyDigest_0 = args_0[3];
    if (!(commitment_0.buffer instanceof ArrayBuffer && commitment_0.BYTES_PER_ELEMENT === 1 && commitment_0.length === 32)) {
      __compactRuntime.type_error('compute_integrity_proof',
                                  'argument 1',
                                  'HealthPro.compact line 212 char 1',
                                  'Bytes<32>',
                                  commitment_0)
    }
    if (!(unencryptedHash_0.buffer instanceof ArrayBuffer && unencryptedHash_0.BYTES_PER_ELEMENT === 1 && unencryptedHash_0.length === 32)) {
      __compactRuntime.type_error('compute_integrity_proof',
                                  'argument 2',
                                  'HealthPro.compact line 212 char 1',
                                  'Bytes<32>',
                                  unencryptedHash_0)
    }
    if (!(encryptedHash_0.buffer instanceof ArrayBuffer && encryptedHash_0.BYTES_PER_ELEMENT === 1 && encryptedHash_0.length === 32)) {
      __compactRuntime.type_error('compute_integrity_proof',
                                  'argument 3',
                                  'HealthPro.compact line 212 char 1',
                                  'Bytes<32>',
                                  encryptedHash_0)
    }
    if (!(keyDigest_0.buffer instanceof ArrayBuffer && keyDigest_0.BYTES_PER_ELEMENT === 1 && keyDigest_0.length === 32)) {
      __compactRuntime.type_error('compute_integrity_proof',
                                  'argument 4',
                                  'HealthPro.compact line 212 char 1',
                                  'Bytes<32>',
                                  keyDigest_0)
    }
    return _dummyContract._compute_integrity_proof_0(commitment_0,
                                                     unencryptedHash_0,
                                                     encryptedHash_0,
                                                     keyDigest_0);
  }
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
