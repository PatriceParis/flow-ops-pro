import type { Article, Slug } from './pages';

export const en: Record<Slug, Article> = {
  'abx-vs-abm': {
    metaTitle: 'ABX vs ABM: what is the real difference? | Flow Ops',
    metaDescription:
      "ABM pushes campaigns at a fixed account list. ABX reacts to real signals and triggers the right channel at the right moment. When to choose each.",
    eyebrow: 'Account Based Experience',
    h1: 'ABX vs ABM: what is the real difference?',
    standfirst:
      "Both approaches target accounts rather than leads. What separates them is not the targeting, it is the order of operations — and that order decides whether your pipeline fills up or not.",
    keyAnswer:
      "ABM (Account Based Marketing) pushes personalised campaigns at a list of accounts defined in advance. ABX (Account Based Experience) watches real behaviour first, picks up intent signals, then activates the appropriate channel — marketing or sales — at the moment the account shows that interest. ABM is a campaign planned by the quarter; ABX is a system that reacts continuously.",
    sections: [
      {
        h2: 'The problem ABM does not solve',
        paragraphs: [
          "Account Based Marketing corrected a real mistake: spraying an entire market to interest only 2% of its contacts. By concentrating the effort on a list of high-value accounts, ABM improved the relevance of the message and the return on investment.",
          "But it kept a structural flaw: the list is frozen when the campaign launches, and the message goes out whether the account is ready or not. An account enters the sequence because it matches the profile, not because it has shown the slightest interest. Marketing runs its campaign, sales work their own list, and nobody knows whether the two are speaking to the same person in the same week.",
          "The common outcome: campaigns judged on clicks and impressions, while the real pipeline stalls.",
        ],
      },
      {
        h2: 'What ABX changes',
        paragraphs: [
          "Account Based Experience reverses the sequence. The signal comes before the message, instead of the message being sent in the hope of producing a signal.",
          "In practice, an ABX system continuously monitors the behaviour that betrays intent: repeat visits to the site, a change of leadership, a hire on a key role, the adoption of a complementary technology, engagement with a specific piece of content. When an account crosses a threshold, the system triggers the matching channel — a brand awareness ad if the account is cold, an outbound sequence if it is warm, an alert to the sales rep if it is hot.",
        ],
        bullets: [
          "Targeting is not a list, it is a rule that is re-evaluated continuously",
          'The timing comes from the account, not from the marketing calendar',
          'Marketing and sales share a single definition of an account ready to be contacted',
          'Channels are sequenced with one another instead of running in parallel',
        ],
      },
      {
        h2: 'A point-by-point comparison',
        paragraphs: [],
      },
      {
        h2: 'When to stay with ABM',
        paragraphs: [
          "ABX is not a universal improvement. It assumes a data infrastructure and an operational discipline that are not justified everywhere.",
          "Staying with classic ABM is more rational if your addressable market fits into a few dozen accounts you can name, if your sales cycle is measured in weeks, or if your contract value does not exceed a few hundred euros. In those cases, the cost of building the system outweighs the gain in precision.",
          "ABX becomes worth it when the market is too wide to cover by hand, the cycle long enough for timing to matter, and the contract value high enough that a missed meeting is expensive.",
        ],
      },
      {
        h2: 'What the move costs',
        paragraphs: [
          "Moving to ABX is an infrastructure project, not a change of campaign. It means structuring the addressable market into tiers, cleaning the CRM, connecting the signal sources, defining the scoring rules and documenting the triggered sequences.",
          "On the engagements I run, those foundations take three months — the time needed to work from usable data rather than intuition. The three months that follow are spent amplifying what works and handing the system over in-house.",
        ],
      },
    ],
    table: {
      head: ['', 'ABM', 'ABX'],
      rows: [
        ['Nature', 'A campaign', 'A system'],
        ['Account list', 'Frozen at launch', 'Re-evaluated continuously'],
        ['Trigger', 'The marketing calendar', "The account's intent signal"],
        ['Rhythm', 'Planned by the quarter', 'Reactive, continuous'],
        ['Ownership', 'Marketing', 'Marketing and sales, jointly'],
        ['Channels', 'Activated in parallel', 'Sequenced by account maturity'],
        ['Measurement', 'Clicks, impressions, MQL', 'Pipeline created, cost per engaged account'],
        ['Prerequisites', 'A list and a media budget', 'Data, a connected stack, scoring rules'],
      ],
    },
    ctaTitle: 'Your market deserves better than a frozen list',
    ctaBody:
      "If you already run ABM and the pipeline is not following, the problem is rarely the message — it is the moment it goes out. Let us talk about your accounts, and about what your data already says.",
    ctaButton: "Let's discuss your challenges",
    backHome: 'Explore the ABX system',
    updated: '13 November 2026',
  },
  'gtm-engineering': {
    metaTitle: 'What is GTM Engineering? | Flow Ops',
    metaDescription:
      "GTM Engineering treats B2B acquisition as a technical system: data connected, signals detected, actions triggered. The role, the stack, the difference.",
    eyebrow: 'Go-To-Market Engineering',
    h1: 'What is GTM Engineering?',
    standfirst:
      "A hybrid role between growth marketing, sales ops and automation, which appeared because B2B teams stopped being able to do by hand what their tools can now run on their own.",
    keyAnswer:
      "GTM Engineering means treating B2B acquisition as a technical system rather than a series of manual tasks. A GTM Engineer connects the data sources, the enrichment tools, the CRM and the activation channels into a single documented flow: data comes in, it is enriched and scored, intent signals are detected, and the resulting actions are triggered automatically.",
    sections: [
      {
        h2: 'Where the role came from',
        paragraphs: [
          "For fifteen years, B2B prospecting was a volume problem: more contacts, more emails, more calls. That model stopped working for two simultaneous reasons — inboxes became saturated, and enrichment and automation tools became powerful enough for the constraint to move.",
          "The constraint is no longer the capacity to execute, it is the capacity to orchestrate. Knowing which account to contact, at what moment and through which channel now means making a dozen tools talk to each other. That is engineering work, and it is precisely what GTM Engineering covers.",
        ],
      },
      {
        h2: 'What a GTM Engineer actually does',
        paragraphs: [
          "They build the flow that links raw data to commercial action, and they document it so the team can operate it without them.",
        ],
        bullets: [
          'Map the addressable market and structure it into priority tiers',
          'Connect the data sources and the enrichment tools to the CRM',
          'Define the intent signals that matter, and the scoring rules that go with them',
          'Automate the multichannel sequences triggered by those signals',
          'Instrument the measurement so every iteration rests on data',
          'Document the whole thing and transfer the skill in-house',
        ],
      },
      {
        h2: 'The difference with an agency or an outsourced SDR',
        paragraphs: [
          "An agency runs campaigns for you. An outsourced SDR delivers a volume of calls and emails. In both cases the work is an execution service: the expertise leaves with the provider when the contract ends, and you start again from scratch.",
          "A GTM Engineer builds the infrastructure that makes both of those jobs more effective. What remains after the engagement is not a report, it is a system: the market map, the configured stack, the sequences, the scoring rules and the playbooks — yours to keep.",
          "The distinction is economic as much as operational. An agency is a recurring expense; a system is a capital investment that keeps producing once the engagement stops.",
        ],
      },
      {
        h2: 'The typical stack',
        paragraphs: [
          "There is no canonical stack, and that is deliberate: the aim is to orchestrate the tools you already have, not to replace everything. Four families do come up every time, though.",
        ],
        bullets: [
          'Data and targeting — Pharow, LinkedIn Sales Navigator, bespoke scraping',
          'Orchestration — Clay and Claude Code, for enrichment, scoring and signal detection',
          'Automation — Zapier, lemlist, Clay, to run the multichannel sequences',
          'Custom signals — Snitcher to de-anonymise traffic, BuiltWith to detect technologies',
        ],
      },
      {
        h2: 'When to bring in a GTM Engineer',
        paragraphs: [
          "The most reliable signal is a gap: your tools produce data that nobody uses, or your sales reps spend more time working out who to call than calling.",
          "The other classic triggers are a CRM that has become unusable, paid campaigns running without any link to the pipeline, a team transition to cover, or an addressable market too wide to work by hand.",
          "The prerequisite is the same as for ABX: an offer that is already validated and an average deal size above €2,000. Below that, a volume approach remains more profitable.",
        ],
      },
    ],
    ctaTitle: 'Your tools already produce the data',
    ctaBody:
      "Most B2B teams hold far more signals than they use. A first conversation is usually enough to identify what is lying dormant in your current stack.",
    ctaButton: "Let's discuss your challenges",
    backHome: 'See the full ABX system',
    updated: '13 November 2026',
  },
};
