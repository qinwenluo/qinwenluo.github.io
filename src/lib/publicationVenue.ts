const CCF_RANKS: Record<string, string> = {
  KDD: 'CCF-A',
  ICML: 'CCF-A',
  NEURIPS: 'CCF-A',
  ECAI: 'CCF-B',
};

export function getCcfRank(venue?: string): string | undefined {
  return venue ? CCF_RANKS[venue.trim().toUpperCase()] : undefined;
}
