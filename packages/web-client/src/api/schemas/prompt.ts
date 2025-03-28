/**
 * Generated by orval v6.26.0 🍺
 * Do not edit manually.
 * refreshmint backend
 * OpenAPI spec version: 0.1.0
 */
import type { PromptDeletedAt } from './promptDeletedAt';
import type { PromptKnownToAgent } from './promptKnownToAgent';
import type { PromptMeetingStatus } from './promptMeetingStatus';
import type { PromptType } from './promptType';
import type { PromptReportPromptText } from './promptReportPromptText';

export interface Prompt {
  branch_id: string;
  created_at?: string;
  created_by: string;
  created_by_name?: string;
  deleted_at?: PromptDeletedAt;
  description?: string;
  id: string;
  known_to_agent?: PromptKnownToAgent;
  meeting_status?: PromptMeetingStatus;
  name: string;
  object?: string;
  organization_id: string;
  prompt_type?: PromptType;
  report_prompt_text?: PromptReportPromptText;
  text: string;
  updated_at?: string;
}
