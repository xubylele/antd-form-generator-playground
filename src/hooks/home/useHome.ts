import { useCallback } from 'react';
import { useNavigation } from '../layout/useNavigation';

export interface Feature {
  title: string;
  description: string;
  iconKey: string;
}

export interface Example {
  name: string;
  description: string;
  iconKey: string;
}

export function useHome() {
  const { navigateToPlayground } = useNavigation();

  const features: Feature[] = [
    {
      title: 'Interactive Schema Editor',
      description: 'Visual JSON editor for both form schema and UI schema with real-time validation.',
      iconKey: 'edit',
    },
    {
      title: 'Real-time Preview',
      description: 'Live preview of forms as you edit the schemas with instant updates.',
      iconKey: 'eye',
    },
    {
      title: 'Multiple Examples',
      description: 'Pre-built examples covering various use cases from basic forms to complex arrays.',
      iconKey: 'list',
    },
    {
      title: 'Form Testing',
      description: 'Test form submission and view submitted values with orientation toggle.',
      iconKey: 'flask',
    },
  ];

  const examples: Example[] = [
    { name: 'User (basic)', description: 'Complete user form with validation and enums', iconKey: 'user' },
    { name: 'User (custom widgets)', description: 'User form with custom widget types', iconKey: 'user' },
    { name: 'Products (array)', description: 'Array field example for managing items', iconKey: 'shopping-cart' },
    { name: 'Login', description: 'Simple authentication form', iconKey: 'sign-in' },
    { name: 'Register', description: 'User registration form', iconKey: 'user-plus' },
    { name: 'Profile', description: 'User profile management form', iconKey: 'id-card' },
    { name: 'Contact', description: 'Contact information form', iconKey: 'envelope' },
    { name: 'Empty', description: 'Blank template to start from scratch', iconKey: 'file-alt' },
  ];

  const handleStartPlaying = useCallback(() => {
    navigateToPlayground();
  }, [navigateToPlayground]);

  const handleLaunchPlayground = useCallback(() => {
    navigateToPlayground();
  }, [navigateToPlayground]);

  return {
    features,
    examples,
    handleStartPlaying,
    handleLaunchPlayground,
  };
}
