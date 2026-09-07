import { SiteHeader } from '@/components/ecofundme/site-header'
import { Hero } from '@/components/ecofundme/hero'
import { CampaignStory, Governance } from '@/components/ecofundme/campaign-story'
import { FundsAndImpact } from '@/components/ecofundme/funds-impact'
import { CampaignsAndFooter } from '@/components/ecofundme/campaigns-footer'

export default function Page() {
  return <><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main"><Hero /><CampaignStory /><Governance /><FundsAndImpact /><CampaignsAndFooter /></main></>
}
