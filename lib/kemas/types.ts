export type StockStatus = "ok" | "low" | "out"

export interface InventoryItem {
  id: string
  name: string
  nameId: string // Indonesian name
  category: string
  categoryId: string // Indonesian category
  emoji: string
  count: number
  threshold: number // low-stock threshold
  location: string
  description: string
  voiceNote?: string // transcription text
  createdAt: number
  updatedAt: number
}

export interface AlertState {
  dismissed: string[] // item ids dismissed
  snoozedUntil: Record<string, number> // item id -> timestamp
}

export function statusOf(item: InventoryItem): StockStatus {
  if (item.count <= 0) return "out"
  if (item.count <= item.threshold) return "low"
  return "ok"
}
