import { useState } from 'react';
import {
  useAppKit,
  useAppKitAccount,
  useAppKitState,
  useDisconnect,
} from '@reown/appkit/react';
import { useBalance, useChainId } from 'wagmi';
import {
  Wallet,
  Link as LinkIcon,
  Unlink,
  Copy,
  Check,
  ExternalLink,
  Zap,
  Globe,
  AlertCircle,
} from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

function Home() {
  const { open } = useAppKit();
  const { address, isConnected, caipAddress } = useAppKitAccount();
  const { selectedNetworkId } = useAppKitState();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { data: balance } = useBalance({
    address: address as `0x${string}` | undefined,
  });
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      toast.success('Address copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const getExplorerUrl = (addr: string) => {
    // You can customize this based on the chain
    return `https://etherscan.io/address/${addr}`;
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 px-4 py-12 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="container mx-auto max-w-5xl">
        {/* Main Content */}
        {!isConnected ? (
          // Not Connected State
          <div className="mx-auto max-w-md">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-slate-100 p-6 dark:bg-slate-800">
                  <Unlink className="h-16 w-16 text-slate-400" />
                </div>
              </div>
              <h2 className="mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white">
                No Wallet Connected
              </h2>
              <p className="mb-6 text-center text-slate-600 dark:text-slate-400">
                Connect your wallet to view your account details and start
                interacting with the blockchain
              </p>
              <Button
                onClick={() => open()}
                className="w-full bg-linear-to-r from-blue-500 to-indigo-600 py-6 text-lg font-medium shadow-lg hover:from-blue-600 hover:to-indigo-700"
                size="lg"
              >
                <Wallet className="mr-2 h-5 w-5" />
                Connect Wallet
              </Button>
              <div className="mt-6 space-y-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-800">
                <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    Make sure you have a Web3 wallet installed (MetaMask,
                    WalletConnect, etc.)
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Connected State
          <div className="space-y-6">
            {/* Connection Status Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                    <LinkIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Wallet Connected
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Active connection
                      </p>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => disconnect()}
                  variant="destructive"
                  size="sm"
                  className="shadow-md"
                >
                  <Unlink className="mr-2 h-4 w-4" />
                  Disconnect
                </Button>
              </div>
            </div>

            {/* Account Details Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Address Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex items-center gap-2">
                  <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Wallet Address
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg bg-slate-50 p-4 font-mono text-sm break-all text-slate-900 dark:bg-slate-800 dark:text-white">
                    {address}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={handleCopyAddress}
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      {copied ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </>
                      )}
                    </Button>
                    <Button
                      onClick={() =>
                        address &&
                        window.open(getExplorerUrl(address), '_blank')
                      }
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Explorer
                    </Button>
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Short: {address && formatAddress(address)}
                  </div>
                </div>
              </div>

              {/* Balance Card */}
              <div className="rounded-2xl border border-slate-200 bg-linear-to-br from-emerald-50 to-teal-50 p-6 shadow-lg dark:border-slate-800 dark:from-emerald-900/20 dark:to-teal-900/20">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Balance
                  </h3>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">
                    {balance
                      ? parseFloat(balance.formatted).toFixed(4)
                      : '0.0000'}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {balance?.symbol || 'ETH'}
                  </div>
                </div>
              </div>

              {/* Network Info Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Network Info
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-purple-100 px-4 py-2 dark:bg-purple-900/30">
                      <span className="font-mono text-lg font-bold text-purple-700 dark:text-purple-300">
                        {chainId}
                      </span>
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      Chain ID
                    </span>
                  </div>
                  {selectedNetworkId && (
                    <div className="rounded-lg bg-slate-50 p-2 text-sm dark:bg-slate-800">
                      <span className="text-slate-600 dark:text-slate-400">
                        Network ID:{' '}
                      </span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {selectedNetworkId}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* CAIP Address Card */}
              {caipAddress && (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      CAIP Address
                    </h3>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                    <div className="font-mono text-xs break-all text-slate-900 dark:text-white">
                      {caipAddress}
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                    Standard cross-chain account identifier
                  </div>
                </div>
              )}
            </div>

            {/* Actions Section */}
            <div className="rounded-2xl border border-slate-200 bg-linear-to-r from-blue-50 to-indigo-50 p-6 shadow-lg dark:border-slate-800 dark:from-blue-900/20 dark:to-indigo-900/20">
              <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
                Quick Actions
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <Button
                  onClick={() => open({ view: 'Networks' })}
                  variant="outline"
                  className="justify-start bg-white dark:bg-slate-900"
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Switch Network
                </Button>
                <Button
                  onClick={() => open()}
                  variant="outline"
                  className="justify-start bg-white dark:bg-slate-900"
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Wallet Modal
                </Button>
                <Button
                  onClick={() =>
                    address && window.open(getExplorerUrl(address), '_blank')
                  }
                  variant="outline"
                  className="justify-start bg-white dark:bg-slate-900"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View on Explorer
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
