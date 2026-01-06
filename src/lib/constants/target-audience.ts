// Target Audience Constants
// Who we build for

import { User, Building2, Briefcase, TrendingUp } from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export interface TargetAudience {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const TARGET_AUDIENCES: TargetAudience[] = [
  {
    id: 'particuliers',
    title: 'Particuliers à fort pouvoir d\'achat',
    description: 'Propriétaires recherchant des solutions modernes, durables et valorisantes pour leur patrimoine immobilier.',
    icon: User,
  },
  {
    id: 'promoteurs',
    title: 'Promoteurs immobiliers',
    description: 'Professionnels de l\'immobilier souhaitant construire rapidement des lotissements de qualité.',
    icon: Building2,
  },
  {
    id: 'entreprises',
    title: 'Entreprises & institutions',
    description: 'Organisations nécessitant des structures sécurisées, robustes et esthétiques pour leurs locaux.',
    icon: Briefcase,
  },
  {
    id: 'investisseurs',
    title: 'Investisseurs immobiliers',
    description: 'Investisseurs cherchant des actifs rentables, durables et avec un excellent retour sur investissement.',
    icon: TrendingUp,
  },
]
