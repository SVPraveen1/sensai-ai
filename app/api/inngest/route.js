import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/client";
import { generateIndustryInsights } from "@/lib/inngest/functions";

const handler = serve({
  client: inngest,
  functions: [generateIndustryInsights],
});

export const GET = handler;
export const POST = handler;
export const PUT = handler;
