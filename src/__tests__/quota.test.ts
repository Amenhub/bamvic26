import { describe, expect, it } from "vitest";
import { getQuotaReservation, getRpcData } from "../../api/quota";

describe("quota RPC result handling", () => {
  it("reports missing RPC or database failures as database errors", () => {
    expect(() => getQuotaReservation({ data: null, error: { code: "PGRST202", message: "function missing" } })).toThrow("quota_database_error");
    expect(() => getQuotaReservation({ data: null, error: { code: "08006", message: "database unavailable" } })).toThrow("quota_database_error");
    expect(() => getRpcData({ data: null, error: { message: "lease RPC missing" } }, "refresh_lease_database_error")).toThrow("refresh_lease_database_error");
  });
  it("distinguishes genuine quota exhaustion", () => {
    expect(() => getQuotaReservation({ data: { reserved: false, remaining: 0 }, error: null })).toThrow("quota_exhausted");
  });
  it("accepts a successful atomic reservation result", () => {
    expect(getQuotaReservation({ data: { reserved: true, remaining: 6900 }, error: null })).toEqual({ reserved: true, remaining: 6900 });
  });
  it("rejects malformed RPC data rather than treating it as exhausted quota", () => {
    expect(() => getQuotaReservation({ data: null, error: null })).toThrow("quota_database_error");
  });
});
