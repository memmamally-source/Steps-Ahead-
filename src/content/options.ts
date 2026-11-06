/**
 * Answer-option handling. The correct answer is stored by a stable option id, never by position:
 * - `stabilizeOptions` gives every option an id derived from the item id (not a display letter) and
 *   stores options in a deterministic, item-specific shuffled order, so authoring order (often the
 *   correct answer first) never leaks into storage or the review packet.
 * - `presentOptions` shuffles again for each presentation to a learner; answers are always checked
 *   by id, so display order can never change which answer is correct.
 */
import { hashString, seeded, shuffle } from '@/engine/random';
import type { McqOption } from './schema';

interface WithOptions {
  id: string;
  options: McqOption[];
  answerId: string;
}

export function stabilizeOptions<T extends WithOptions>(item: T): T {
  if (item.options.every((o) => o.id.startsWith(`${item.id}#`))) return item;
  // Opaque per-item ids: derived from the item id and authored id, so they are stable across builds
  // but reveal nothing about authoring order (the correct answer is not always "#a").
  const map = new Map<string, string>();
  for (const o of item.options) {
    let n = hashString(`${item.id}:${o.id}`);
    let id = `${item.id}#${n.toString(36).slice(0, 5)}`;
    while ([...map.values()].includes(id)) id = `${item.id}#${(++n).toString(36).slice(0, 5)}`;
    map.set(o.id, id);
  }
  const options = shuffle(item.options.map((o) => ({ ...o, id: map.get(o.id)! })), seeded(`store:${item.id}`));
  return { ...item, options, answerId: map.get(item.answerId)! };
}

/** Display order for one presentation. Same seed → same order (stable during a question). */
export function presentOptions<O extends { id: string }>(options: readonly O[], seed: string): O[] {
  return shuffle(options, seeded(`show:${seed}`));
}
