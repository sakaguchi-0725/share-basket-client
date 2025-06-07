import type { Status } from "@/entities/status";
import type { PersonalItem } from "../model";
import { apiGet } from "@/shared/api";

export const getAllPersonalItems = (status?: Status) => {
  const params = status ? { status } : undefined;
  return apiGet<PersonalItem[]>('/personal/items', params);
}