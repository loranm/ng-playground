import { Onboarding } from '@models/onboarding';

export const ONBOARDING: Onboarding = {
  initialStep: null,
  isDone: false,
  steps: [
    {
      title: 'Create profile',
      content: 'Enregistrez vous',
    },
    {
      title: 'Pref 1',
      content: 'Quel est votre animal préféré ? ',
    },
    {
      title: 'Pref 2',
      content: 'Quelle est votre couleur préférée? ',
    },
  ],
};
