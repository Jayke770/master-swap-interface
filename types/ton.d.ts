declare interface ITONAsset {
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
}