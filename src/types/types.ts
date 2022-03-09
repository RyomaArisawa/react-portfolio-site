export type LanguageObj = {
  language: string;
  count: number;
};

export type ActionType = {
  type: string;
};

export type SkillState = {
  languageList: LanguageObj[];
  requestState?: string;
};

export type SkillAction = {
  type: string;
  payload: SkillState;
};
