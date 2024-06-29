import {
    NextRequest,
    NextResponse
} from "next/server";
import { z } from 'zod'
import { TON } from '@/lib/ton'
const tonhandler = new TON()
export const revalidate = 120;
export async function GET(req: NextRequest) {
    const data = await tonhandler.getStonFiAssets()
    return NextResponse.json(data?.slice(0, 100))
}