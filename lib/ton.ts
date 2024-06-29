import { StonApiClient } from '@ston-fi/api';

interface ITON {
    getStonFiAssets(): Promise<{
        balance?: string | undefined;
        blacklisted: boolean;
        community: boolean;
        contractAddress: string;
        decimals: number;
        defaultSymbol: boolean;
        deprecated: boolean;
        dexPriceUsd?: string | undefined;
        displayName?: string | undefined;
        imageUrl?: string | undefined;
        kind: "Ton" | "Wton" | "Jetton";
        priority: number;
        symbol: string;
        thirdPartyPriceUsd?: string | undefined;
        walletAddress?: string | undefined;
    }[] | []>
}
export class TON implements ITON {
    private stonFiApi: StonApiClient
    constructor() {
        this.stonFiApi = new StonApiClient()
    }
    async getStonFiAssets() {
        try {
            return await this.stonFiApi.getAssets()
        } catch (e) {
            return []
        }
    }
}