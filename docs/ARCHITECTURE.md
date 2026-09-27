OKG Intelligence Architecture

1. Overview

OKG Intelligence is a centralized AI platform operated by ONE KID GAMING (OKG).

The platform is designed around a backend-first architecture.

The frontend communicates with the OKG Intelligence API. The API handles authentication, plans, permissions, token accounting, model selection, and AI requests.

AI requests are routed through OmniRoute.

┌─────────────────────┐
│        User         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  OKG Intelligence   │
│     Web App         │
└──────────┬──────────┘
           │ HTTPS
           ▼
┌─────────────────────┐
│  OKG Intelligence   │
│        API          │
├─────────────────────┤
│ Authentication      │
│ Authorization       │
│ Plans               │
│ Tokens              │
│ Usage               │
│ Model Catalog       │
│ AI Requests         │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│      OmniRoute      │
│    Model Gateway    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│     AI Providers    │
│      / Models       │
└─────────────────────┘

⸻

2. Application Layers

OKG Intelligence is divided into several logical layers.

Presentation Layer

The web application.

Responsible for:

* User interface
* Chat
* Account pages
* Plan pages
* Token balance
* Usage information
* Server management
* Settings
* Administrative interfaces

The presentation layer should not contain secrets or authoritative business rules.

⸻

API Layer

The public backend API.

Responsible for:

* Request validation
* Authentication
* Authorization
* Rate limiting
* Plan enforcement
* Token calculations
* Model access
* AI request routing
* Usage recording

⸻

Service Layer

Contains the core application logic.

Examples:

* Account service
* Authentication service
* Plan service
* Token service
* Model service
* Usage service
* AI service
* Server service

Business rules should primarily live here rather than inside individual frontend components.

⸻

Data Layer

Responsible for persistent storage.

The data layer stores application state such as:

* Users
* Accounts
* Plans
* Models
* Token balances
* Token transactions
* Usage records
* Servers
* Server memberships
* Configuration

⸻

3. AI Request Flow

A normal AI request follows this sequence:

1. User sends message
        │
        ▼
2. Web app sends authenticated API request
        │
        ▼
3. API authenticates user
        │
        ▼
4. API checks account and plan
        │
        ▼
5. API validates requested model
        │
        ▼
6. API calculates token cost
        │
        ▼
7. API checks applicable limits
        │
        ▼
8. API sends request to OmniRoute
        │
        ▼
9. OmniRoute routes request to selected model
        │
        ▼
10. Model response returns
        │
        ▼
11. API records usage
        │
        ▼
12. API updates token balance
        │
        ▼
13. Response is returned to the web app

The frontend must not directly communicate with OmniRoute.

⸻

4. OmniRoute

OmniRoute is the central model gateway used by OKG Intelligence.

The backend stores the OmniRoute credential as a server-side environment variable.

Example:

OMNIROUTE_API_KEY=...

The actual key must never be committed to GitHub.

The frontend must never receive the OmniRoute API key.

⸻

5. Model System

Models are represented internally by a model catalog.

A model record should be capable of containing information such as:

id
display_name
provider
omniroute_model_id
enabled
default_token_cost
context_limit
capabilities

The exact model catalog will be defined during implementation.

Adding a new model should primarily require adding or updating model configuration rather than rewriting the AI system.

⸻

6. Token System

Tokens are the internal usage currency of OKG Intelligence.

Every model has a default token cost.

A simplified request calculation is:

Base Model Cost
        │
        ▼
Plan Modification
        │
        ▼
Applicable Token Cost
        │
        ▼
User's Token Balance

The backend is authoritative for all token calculations.

The client cannot choose its own token cost.

Token Transactions

Token changes should be recorded as transactions.

Examples:

purchase
grant
bonus
usage
refund
adjustment
expiration

This creates an auditable usage history.

⸻

7. Plans

OKG Intelligence has two major plan categories.

Personal Plans

Associated with an individual account.

Personal plans may control:

* Monthly token allowance
* Token cost modifications
* Available models
* Request limits
* Context limits
* Features
* Priority
* Other account capabilities

Server Plans

Associated with a Discord/community server.

Server plans may control:

* Shared server tokens
* Server model access
* Server limits
* Member access
* Server-specific features
* Administrative features

The exact plan definitions will be implemented separately from the core architecture.

⸻

8. Plan Enforcement

Plan enforcement must happen server-side.

For every protected request:

Authenticated User
        │
        ▼
Determine Account
        │
        ▼
Determine Active Plan
        │
        ▼
Determine Applicable Rules
        │
        ▼
Validate Request
        │
        ▼
Allow / Reject

The frontend may display plan information, but it cannot be trusted to enforce it.

⸻

9. Usage Tracking

Each AI request should produce a usage record.

A usage record should eventually contain information such as:

id
account_id
user_id
server_id
model_id
request_id
input_tokens
output_tokens
total_tokens
token_cost
created_at

Additional fields can be added as the system develops.

Usage records allow OKG Intelligence to provide:

* Token history
* Usage statistics
* Account billing information
* Administrative auditing
* Abuse detection
* Plan enforcement data

⸻

10. Authentication

Authentication will be handled by the OKG Intelligence backend.

The exact authentication provider and implementation will be selected during the implementation phase.

Authentication should support:

* Secure sessions or tokens
* Account identification
* Authorization
* Account settings
* Plan association

Authentication secrets must remain server-side.

⸻

11. Discord / Server Integration

Server functionality is designed to support OKG Intelligence features associated with Discord communities.

A server may have:

Server
 ├── Active Plan
 ├── Token Balance
 ├── Members
 ├── Permissions
 ├── Usage
 └── Settings

Server-specific functionality will be implemented after the core personal account system is functional.

⸻

12. Security Rules

The following information must never be committed to GitHub:

* OmniRoute API keys
* AI provider API keys
* Database credentials
* OAuth client secrets
* Session secrets
* Encryption keys
* Private certificates
* User passwords
* Other production credentials

Secrets must be provided through environment variables or a secure secrets manager.

⸻

13. Error Handling

The API should use consistent errors.

Examples include:

UNAUTHORIZED
FORBIDDEN
INVALID_REQUEST
MODEL_NOT_FOUND
MODEL_DISABLED
INSUFFICIENT_TOKENS
PLAN_LIMIT_REACHED
RATE_LIMITED
AI_PROVIDER_ERROR
INTERNAL_ERROR

Errors returned to users should contain useful information without exposing private infrastructure details.

⸻

14. Extensibility

The architecture should make it possible to add:

* New AI models
* New providers through OmniRoute
* New personal plans
* New server plans
* New token rules
* New AI features
* New integrations
* New authentication methods
* New dashboards
* New administrative tools

without requiring a complete rewrite.

⸻

15. Development Strategy

Implementation will occur incrementally.

Phase 1 — Core Backend

* Project initialization
* API server
* Environment configuration
* OmniRoute connection
* Basic AI request endpoint
* Model selection

Phase 2 — Accounts

* Authentication
* User accounts
* Account data
* Sessions

Phase 3 — Tokens

* Token balances
* Token transactions
* Model costs
* Usage recording

Phase 4 — Plans

* Personal plans
* Server plans
* Plan-specific limits
* Plan-specific token modifications

Phase 5 — Web Application

* Dashboard
* Chat interface
* Model selector
* Token display
* Usage display
* Account settings

Phase 6 — Server Features

* Discord integration
* Server accounts
* Server plans
* Server tokens
* Server permissions

Phase 7 — Administration

* Model management
* User management
* Plan management
* Usage monitoring
* System configuration

⸻

16. Architectural Principle

The most important architectural rule is:

The client requests actions. The backend decides whether those actions are allowed.

This applies to:

* Models
* Tokens
* Plans
* Limits
* Permissions
* Server features
* Administrative actions

The backend is the source of truth.
