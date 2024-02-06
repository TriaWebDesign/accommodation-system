"use server";

import { Account } from "@prisma/client";
import { db } from "../db";

export async function getAccount(id: string): Promise<Account | null> {
  return await db.account.findUnique({ where: { id: id } });
}

export async function createAccount() {}
