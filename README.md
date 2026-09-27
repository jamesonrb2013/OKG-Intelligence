OKG Intelligence

OKG Intelligence is the AI platform built by ONE KID GAMING (OKG).

It provides a unified AI experience with multiple AI models, personal plans, server plans, token-based usage, and centralized model routing through OmniRoute.

Project Status

Development — Initial Foundation

The project is currently being built from the ground up.

Core Goals

* Provide access to multiple AI models through one platform
* Use OmniRoute as the centralized model gateway
* Use a unified OKG Intelligence token system
* Support personal accounts and personal plans
* Support server-based plans and features
* Apply different token costs to different models
* Allow plans to modify token costs and usage limits
* Track AI usage accurately
* Provide a modern web dashboard
* Keep API credentials secure on the backend
* Build the platform so additional models and features can be added without rebuilding the entire system

High-Level Architecture

User
  │
  ▼
OKG Intelligence Web App
  │
  ▼
OKG Intelligence API
  │
  ├── Authentication
  ├── Accounts
  ├── Plans
  ├── Tokens
  ├── Usage Tracking
  ├── Model Catalog
  └── AI Request Handling
          │
          ▼
      OmniRoute
          │
          ▼
     AI Model Provider

Main Components

Web Application

The user-facing OKG Intelligence dashboard.

Responsibilities include:

* Account management
* Chat interface
* Model selection
* Token balance
* Usage information
* Plan information
* Server management
* Settings

API

The central backend for OKG Intelligence.

Responsibilities include:

* Authentication
* Authorization
* Plan enforcement
* Token accounting
* Model access
* AI requests
* Usage tracking
* Server features
* Administrative operations

OmniRoute

OmniRoute acts as the model gateway.

The OKG Intelligence backend communicates with OmniRoute rather than exposing individual provider credentials to the frontend.

The OmniRoute API key must remain server-side and must never be exposed to users through frontend code.

Database

Stores persistent OKG Intelligence data, including:

* Users
* Accounts
* Plans
* Token balances
* Token transactions
* Models
* Model pricing
* Usage records
* Servers
* Server plans
* Server memberships
* Settings

Token System

OKG Intelligence uses tokens as its unified usage currency.

Each model has a default token cost.

Plans may modify:

* Token costs
* Token limits
* Usage limits
* Available models
* Other platform features

The backend is responsible for calculating and recording token usage.

Clients must never be trusted to calculate their own token costs.

Plans

OKG Intelligence supports two major plan categories:

Personal Plans

Plans associated with individual users.

Server Plans

Plans associated with Discord/community servers and their members.

The exact plans, limits, model availability, token costs, and perks are defined separately from the core application architecture.

Security

Secrets must never be committed to this repository.

Examples include:

* OmniRoute API keys
* Database passwords
* Authentication secrets
* Session secrets
* OAuth secrets
* Provider API keys

Environment variables should be used for secrets.

Development

Local development will use:

* Visual Studio Code
* Git
* GitHub
* Node.js
* A local development database or development database service

The production deployment architecture will be defined later.

Repository Structure

The repository is organized so the frontend, backend, documentation, and configuration can evolve independently.

OKG-Intelligence/
├── README.md
├── .gitignore
├── LICENSE
├── docs/
│   └── ARCHITECTURE.md
└── ...

Project Principles

Security First

Private credentials and secrets stay on trusted backend infrastructure.

Server-Side Enforcement

Plans, limits, permissions, and token costs are enforced by the backend.

Modular Design

Models, plans, providers, and features should be replaceable or expandable without requiring a complete rewrite.

Transparent Usage

Users should be able to understand their token usage and limits.

Developer Friendly

The codebase should remain understandable and maintainable as the platform grows.

Ownership

OKG Intelligence is a project of ONE KID GAMING (OKG).

Copyright © 2026 ONE KID GAMING. All rights reserved.
