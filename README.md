# 🌙 HealthPro — Privacy-Preserving Health Records on Midnight

[![Midnight Network](https://img.shields.io/badge/Midnight-Network-blue)](https://midnight.network)

HealthPro is a Compact smart contract that lets patients and providers manage electronic health records (EHRs) with privacy at the core. It uses role-based access control, pausability, and helper circuits for commitment, authentication, and integrity proof workflows.

- **Access control & pause** via OpenZeppelin Compact modules.
- **Opaque record references** stored on-ledger, with crypto proofs verified on-chain.
- **Friendly helper circuits** for computing commitments and proofs.

---

## 🚀 Quickstart

- **Prerequisite**: Install the Compact compiler and ensure it’s on your PATH.

1) **Clone and init submodules**
```bash
git clone <this-repo>
cd health-pro
git submodule update --init --recursive
```

2) **Install OpenZeppelin Compact deps (inside submodule)**
```bash
cd compact-contracts
nvm install && \
yarn && \
SKIP_ZK=true yarn compact
```

3) **Compile the contract** ✅
```bash
cd ..
compact compile HealthPro.compact artifacts/
```

You’ll find outputs under `artifacts/` (see Structure below).

Pro tip: run `compact --version` to check your compiler.

---

## 🗂️ Project Structure

```
health-pro/
├── HealthPro.compact              # Main contract
├── artifacts/
│    ├── compiler/
│    │   └── contract-info.json    # ABI-like interface description
│    ├── contract/                 # Compiled artifacts
│    ├── keys/                     # Proving/verifier material
│    └── zkir/                     # ZK IR and related
├── compact-contracts/             # OpenZeppelin Compact (git submodule)
├── .gitmodules
├── .gitignore
└── README.md
```

---

## 🔌 Dependencies & Imports

HealthPro imports OpenZeppelin Compact libraries from the submodule:

- `./compact-contracts/node_modules/@openzeppelin-compact/contracts/src/access/AccessControl` → prefix `AccessControl_`
- `./compact-contracts/node_modules/@openzeppelin-compact/contracts/src/security/Pausable` → prefix `Pausable_`
- `./compact-contracts/node_modules/@openzeppelin-compact/contracts/src/utils/Utils` → prefix `Utils_`

Ensure `compact-contracts/` exists and its `node_modules/` is installed (see Quickstart step 2).

---

## 🧠 Contract Interface (Summary)

Authoritative interface: `artifacts/compiler/contract-info.json`.

- **register_account(_accountType: AccountType): Boolean**
  - Register caller as `PROVIDER` or `PATIENT` and assign the role.
- **storeHealthRecord(record: Opaque<"string">, recordType: RecordType): []**
  - Store/update the caller’s opaque record reference by type.
- **grantProviderAccess(provider: ZswapCoinPublicKey): []**
  - Begin the access grant flow from a patient to a provider.
- **pause(): []** / **unpause(): []**
  - Admin-only controls.

Helper (pure) circuits:

- `compute_key_digest(Bytes<32>)`
- `compute_commitment(Uint<32>, Bytes<32>)`
- `compute_auth_proof(Bytes<32>, Bytes<32>, Bytes<32>)`
- `compute_integrity_proof(Bytes<32>, Bytes<32>, Bytes<32>, Bytes<32>)`

Enums: `AccountType`, `RecordType`, `AccessLevel`, `AuditAction`

Roles: `PROVIDER_ROLE`, `PATIENT_ROLE`, `DELEGATE_ROLE`, `AUDITOR_ROLE`

---

## 🧱 Storage Layout

- `registeredPatients: Set<ZswapCoinPublicKey>`
- `registeredProviders: Set<ZswapCoinPublicKey>`
- `healthRecords: Map<ZswapCoinPublicKey, Opaque<"string">>`
- `commitments: Map<ZswapCoinPublicKey, Bytes<32>>`

---

## ✅ Compatibility

- Compact pragma: `>= 0.16.0 && <= 0.17` (see `HealthPro.compact`).

---

## 🧭 Developer Tips

- If imports fail, verify the submodule and install step: `git submodule update --init --recursive` and `cd compact-contracts && npm ci`.
- After editing `HealthPro.compact`, re-run:
  ```bash
  compact compile HealthPro.compact artifacts/
  ```
- Inspect the interface quickly by opening `artifacts/compiler/contract-info.json`.

---

**Last Updated**: September 28, 2025  
Built with ❤️ for the Midnight Hackathon 🌙

Empowering developers to build privacy-preserving applications with zero-knowledge proofs.