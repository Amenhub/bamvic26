export type RpcResult<T> = { data: T | null; error: { code?: string; message?: string } | null };
export function getQuotaReservation(result: RpcResult<{ reserved?: boolean; remaining?: number }> | null | undefined) {
  if (result?.error) throw new Error("quota_database_error");
  if (!result?.data || typeof result.data.reserved !== "boolean") throw new Error("quota_database_error");
  if (!result.data.reserved) throw new Error("quota_exhausted");
  return result.data;
}
export function getRpcData<T>(result: RpcResult<T> | null | undefined, errorCode: string): T {
  if (result?.error || result?.data == null) throw new Error(errorCode);
  return result.data;
}
