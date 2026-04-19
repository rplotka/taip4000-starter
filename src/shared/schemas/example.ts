import { z } from "zod";

// Example Zod schema — replace with your own
// This file demonstrates the pattern for shared validation between client and server

export const CreateItemSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  description: z.string().max(500).optional(),
});

export type CreateItemInput = z.infer<typeof CreateItemSchema>;
