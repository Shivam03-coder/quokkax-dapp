"use client";
import { useToast } from "@/hooks/use-toast";
import { ethers, formatEther } from "ethers";
import { Fingerprint, ShieldCheck } from "lucide-react";
import { useState } from "react";
declare const window: any;

const WalletConnect = () => {
  const [connected, setConnected] = useState<boolean>(false);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const { toast } = useToast();

  const connectWallet = async () => {
    try {
      if (
        typeof window !== "undefined" &&
        typeof window.ethereum !== "undefined"
      ) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const _walletAddress = await signer.getAddress();
        const balance = await provider.getBalance(_walletAddress);
        console.log("🚀 ~ connectWal ~ balance:", formatEther(balance));
        setConnected(true);
        setWalletAddress(_walletAddress);
        toast({
          title: "🎉 Wallet Connected!",
          className: "bg-green-500 text-black p-4 rounded-lg shadow-lg",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Wallet connection failed!",
      });
      setConnected(false);
      setWalletAddress("");
    }
  };

  return (
    <button onClick={connectWallet} className="p-2">
      {connected ? (
        <ShieldCheck size={35} className="rounded-xl  text-green-400" />
      ) : (
        <Fingerprint size={35} className="rounded-xl" />
      )}
    </button>
  );
};

export default WalletConnect;
