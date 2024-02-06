"use server";

import { Student } from "@prisma/client";
import { db } from "../db";

export async function getStudent(school_id: string): Promise<Student | null> {
  return await db.student.findUnique({ where: { school_id: school_id } });
}
