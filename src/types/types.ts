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

export type Event = {
  id: number;
  date: string;
  title: string;
  eventDesc: string;
  isShowIcon: boolean;
  icon?: any;
  iconColor: string;
};

export type ProductItem = {
  id: number;
  title: string;
  desc: string;
  img: string;
  techs: string[];
  link: string;
  gitLink: string;
};
