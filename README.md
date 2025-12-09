📱 Cross-Platform Mobile App (iOS • Android • Web)

A fully cross-platform mobile application built with React Native, Expo, and Expo Router, supporting iOS, Android, and Web from a single codebase.

🚀 Features

📱 Cross-Platform Support — iOS, Android, and Web

🗂️ File-Based Routing using Expo Router

🧭 Tab Navigation with customizable screens

🎨 Vector Icons via Lucide

📦 TypeScript for safe development

💾 Async Storage for local persistence

⚡ React Query for server state management

🔧 Supports Custom Development Builds for advanced native features

🛠️ Tech Stack

React Native – Native mobile framework

Expo – Unified development environment

Expo Router – File-based navigation

TypeScript – Type-safe JavaScript

React Query – Data fetching & caching

Bun – Fast JS runtime & package manager

📦 Getting Started
Prerequisites

Node.js (via nvm recommended)

Bun (https://bun.sh
)

Git

🔧 Installation
1. Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

2. Install dependencies
bun i

▶️ Running the App
Web Preview
bun run start-web

iOS Simulator
bun run start   # then press "i"


or:

bun run start -- --ios

Android Emulator
bun run start -- --android

Run on your physical device

Install Expo Go from the App Store or Google Play

Run:

bun run start


Scan the QR code in the terminal

📁 Project Structure
├── app/                      
│   ├── (tabs)/               # Tab navigation
│   │   ├── _layout.tsx
│   │   └── index.tsx
│   ├── _layout.tsx           # Root layout
│   ├── modal.tsx             # Example modal
│   └── +not-found.tsx        # 404 screen
├── assets/                   
│   └── images/               
├── constants/                
├── app.json                  
├── package.json              
└── tsconfig.json             

📱 Custom Development Builds

Required for:

Face ID / Touch ID

Apple & Google Sign-In

Push notifications

In-app purchases

Custom native modules

Background tasks

Creating a Dev Build
bun i -g @expo/eas-cli
eas build:configure
eas build --profile development --platform ios
eas build --profile development --platform android
bun start --dev-client

🚀 Deployment
iOS App Store
eas build --platform ios
eas submit --platform ios

Google Play
eas build --platform android
eas submit --platform android

Web Deployment
eas build --platform web
eas hosting:configure
eas hosting:deploy


Supports hosting on:

Vercel

Netlify

EAS Hosting

🔌 Optional Integrations
Authentication

Expo AuthSession (OAuth providers)

Supabase Auth

Firebase Auth

Apple / Google native auth (requires dev build)

Database / Backend

Supabase

Firebase

Custom API

Push Notifications

Expo Notifications

Firebase Cloud Messaging

Payments

Stripe (web/paywall)

PayPal

RevenueCat (native subscriptions)

🧩 Troubleshooting

App not loading?

Ensure phone & computer are on same WiFi

Use tunnel mode:

bun start -- --tunnel


Check firewall and VPN settings

Build issues?

bunx expo start --clear
rm -rf node_modules && bun install


Refer to the Expo docs for additional debugging tools.

🏁 Summary

This project provides a modern, scalable React Native + Expo codebase ready for production deployment to iOS, Android, and the Web.
