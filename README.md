# Crowd-Funding DApp

This project is a decentralized crowd-funding platform built on the **Polygon zkEVM testnet**. It allows users to create campaigns, contribute to them, and receive NFTs as rewards, with metadata stored on **IPFS**. The front end is built using **Next.js**, styled with **Tailwind CSS**, and leverages **ShadCN UI** for modern, responsive components.

## Features

- **Create Campaigns**: Users can create funding campaigns with target amounts.
- **Contribute to Campaigns**: Users can contribute to campaigns and receive NFTs as rewards.
- **NFT Rewards**: Each contributor gets a unique NFT with metadata stored on IPFS.
- **Real-Time Progress**: View the funds raised and number of contributors in real-time.
- **Wallet Integration**: MetaMask integration for blockchain interaction.

## Tech Stack

- **Blockchain**: Polygon zkEVM Testnet.
- **Smart Contracts**: Written in Solidity and deployed with Hardhat.
- **NFT Metadata**: Stored on IPFS.
- **Frontend**: Next.js.
- **UI Components**: ShadCN UI Library.
- **Styling**: Tailwind CSS.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Smart Contracts](#smart-contracts)
- [Environment Variables](#environment-variables)
- [Deploying Smart Contracts](#deploying-smart-contracts)
- [Running the Frontend](#running-the-frontend)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MetaMask** browser extension
- **Hardhat**
- **IPFS** CLI or a service like Pinata for storing metadata.

Install dependencies globally:

```bash
npm install -g hardhat
