export interface WaitlistSubmission {
  email: string;
  role: string;
  submittedAt: string;
  ticketNumber: number;
}

export interface IdeaItem {
  id: string;
  type: 'note' | 'polaroid' | 'link' | 'voice' | 'task' | 'sketch' | 'swatch';
  title: string;
  subtitle?: string;
  tag: string;
  accentColor: string;
  rotation: string;
  snippet?: string;
  timestamp?: string;
}

export interface ThoughtUnravelerPreset {
  id: string;
  title: string;
  category: string;
  rawThought: string;
  curioOutput: {
    clarifiedIntent: string;
    clusters: {
      title: string;
      color: string;
      items: string[];
    }[];
    actionSteps: string[];
    moodTags: string[];
  };
}

export interface AudienceProfile {
  id: string;
  title: string;
  subtitle: string;
  quote: string;
  quirk: string;
  sticker: string;
  cardColor: string;
  rotation: string;
  sampleItems: string[];
}
