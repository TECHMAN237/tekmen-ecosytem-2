import pillarAgency from '../assets/images/pillar_agency_1791332419413.jpg'
import pillarInnovation from '../assets/images/pillar_innovation_1791332440262.jpg'
import pillarTeam from '../assets/images/pillar_team_1791332453095.jpg'
import pillarCommunity from '../assets/images/pillar_community_1791332465234.jpg'
import bgHeroEcosystem from '../assets/images/bg_hero_ecosystem_1791332475449.jpg'
import bgNetworkConstellation from '../assets/images/bg_network_constellation_1791332486507.jpg'
import bgStoryEvolution from '../assets/images/bg_story_evolution_1791332497036.jpg'

export const VISUALS = {
  agency: pillarAgency,
  innovation: pillarInnovation,
  team: pillarTeam,
  community: pillarCommunity,
  heroEcosystem: bgHeroEcosystem,
  networkConstellation: bgNetworkConstellation,
  storyEvolution: bgStoryEvolution,
} as const

export const PILLAR_VISUALS: Record<string, string> = {
  agency: pillarAgency,
  innovation: pillarInnovation,
  team: pillarTeam,
  community: pillarCommunity,
}
