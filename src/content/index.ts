import { ContentRepo, PUBLISHED_ONLY, REVIEWER_PREVIEW } from './repo';
import type { Concept, GameItem } from './schema';
import { biochemGenetics } from './step1/biochemGenetics';
import { cardioRenal } from './step1/cardioRenal';
import { CASES } from './step1/cases';
import { CONNECTION_GROUPS } from './step1/connections';
import { hemeImmuneResp } from './step1/hemeImmuneResp';
import { microPharmEndoStats } from './step1/microPharmEndoStats';
import { STEP1_OUTLINE } from './step1/outline';
import { fpGroups, microGroups } from './step1/microGroups';
import { gnGroups, virusGroups } from './step1/virusGroups';
import { biostatGroups } from './step1/biostatGroups';
import { neuroBehavior } from './step1/neuroBehavior';
import { mskSkin } from './step1/mskSkin';
import { reproEndo } from './step1/reproEndo';
import { KB_ITEMS } from './kb';
import { molecularBatch1 } from './biochem/molecular1';

const bundles = [cardioRenal, hemeImmuneResp, biochemGenetics, microPharmEndoStats, microGroups, virusGroups, gnGroups, biostatGroups, fpGroups, neuroBehavior, mskSkin, reproEndo, molecularBatch1];

export const ALL_CONCEPTS: Concept[] = bundles.flatMap((b) => b.concepts).map((c) => ({ ...c, outline: STEP1_OUTLINE[c.id] ?? c.outline }));
export const ALL_ITEMS: GameItem[] = [...bundles.flatMap((b) => b.items), ...CONNECTION_GROUPS, ...CASES, ...KB_ITEMS];

const allowUnreviewed = import.meta.env.DEV || import.meta.env.VITE_ALLOW_UNREVIEWED === 'true';

/** The app-wide repository. */
export const content = new ContentRepo(ALL_CONCEPTS, ALL_ITEMS, allowUnreviewed ? REVIEWER_PREVIEW : PUBLISHED_ONLY);
