import { createHash, timingSafeEqual } from "node:crypto";
import { getStore } from "@netlify/blobs";

export const dynamic = "force-dynamic";

// Temporary inbox for one-time codes texted to our verification number. Keys are checked against these hashes only.
const WRITE_HASH = "410964cdac25184cb9bc3c8e69e36b3397393a8660f431a55b0bd432cd730acb";
const READ_HASH = "4b587f479fc38dfc7e7fc2e054f99ea8940e912cc7899203e1f3b1281c99366c";

function keyOk(key: string | null, hash: string) {
    if (!key) return false;
    const a = Buffer.from(createHash("sha256").update(key).digest("hex"));
    const b = Buffer.from(hash);
    return a.length === b.length && timingSafeEqual(a, b);
}

export async function POST(req: Request) {
    const url = new URL(req.url);
    if (!keyOk(url.searchParams.get("k"), WRITE_HASH)) return new Response("not found", { status: 404 });
    try {
        const body = await req.json();
        const p = body?.data?.payload;
        if (body?.data?.event_type === "message.received" && p) {
            const store = getStore("sms-inbox");
            const at = new Date().toISOString();
            await store.setJSON(`${at}-${p.id ?? "msg"}`, {
                at,
                from: p.from?.phone_number,
                to: p.to?.[0]?.phone_number,
                text: p.text,
            });
        }
    } catch {
        // always answer 200 so Telnyx does not retry
    }
    return new Response("ok");
}

export async function GET(req: Request) {
    const url = new URL(req.url);
    if (!keyOk(url.searchParams.get("t"), READ_HASH)) return new Response("not found", { status: 404 });
    const store = getStore("sms-inbox");
    const { blobs } = await store.list();
    const newest = blobs.map((b) => b.key).sort().reverse().slice(0, 20);
    const messages = await Promise.all(newest.map((k) => store.get(k, { type: "json" })));
    return Response.json({ messages });
}
