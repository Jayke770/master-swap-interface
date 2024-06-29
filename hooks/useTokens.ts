import useSWR from "swr";
const fetcher = (url: any) => fetch(url).then((res) => res.json());
export default function useTokens(): { tokens: ITONAsset[], tokensDataLoading: boolean, tokensDataError: boolean } {
    const { data, error, isLoading } = useSWR(`/api/tokens`, fetcher,
        {
            shouldRetryOnError: true,
            revalidateOnMount: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: true,
            refreshWhenHidden: false,
            refreshWhenOffline: false
        }
    );
    return {
        tokens: data,
        tokensDataLoading: isLoading,
        tokensDataError: error,
    };
}