import {CryptoWalletBlock} from "@/features/dashboard/crypto-wallet/crypto-wallet-block.tsx";
import {WalletSection} from "@/features/dashboard/crypto-wallet/wallet-section.tsx";
import {CryptoWalletTable} from "@/features/dashboard/crypto-wallet/crypto-wallet-table.tsx";

export function CryptoWalletPage() {
    return (
        <div style={{maxHeight: 'calc(100% - 161px)'}} className="flex flex-col h-full gap-6 px-10">
            <div className="grid grid-cols-4 gap-6">
                <CryptoWalletBlock img="/img/btc-graph-2.svg" number={0.2133214214} value="3,230.98 USD" logo="/img/btc-icon.svg" isPositive={false} data={0.12} symbol="BTC"/>
                <CryptoWalletBlock img="/img/eth-graph-2.svg" number={0.2133214214} value="3,230.98 USD" logo="/img/eth-icon.svg" isPositive={true} data={0.25} symbol="ETH"/>
                <CryptoWalletBlock img="/img/usdt-graph-2.svg" number={0.3454364} value="2,345.21 USD" logo="/img/usdt-icon.svg" isPositive={true} data={0.12} symbol="USDT"/>
                <CryptoWalletBlock img="/img/bnb-graph-2.svg" number={0.3476544} value="5,545.89 USD" logo="/img/bnb-icon.svg" isPositive={true} data={0.32} symbol="BNB"/>
            </div>
            <div className="flex w-full h-full gap-6">
                <WalletSection/>
                <CryptoWalletTable/>
            </div>
        </div>
    )
}

export default CryptoWalletPage;