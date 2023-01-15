export type Step = {
  title: string;
  content: string;
};

export type Steps = Step[];

export type Onboarding = {
  initialStep: null | number;
  steps: Steps;
  isDone: boolean;
};
