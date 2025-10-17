/**
 * Component Registry
 * 
 * Catalog of all available components and their customizable properties
 */

export interface ComponentProperty {
  name: string;
  type: 'select' | 'text' | 'number' | 'boolean' | 'slider';
  label: string;
  defaultValue: any;
  options?: { label: string; value: any }[];
  min?: number;
  max?: number;
  step?: number;
}

export interface ComponentDefinition {
  id: string;
  name: string;
  description: string;
  category: 'form' | 'display' | 'feedback' | 'navigation';
  properties: ComponentProperty[];
}

export const COMPONENT_REGISTRY: ComponentDefinition[] = [
  // FORM COMPONENTS
  {
    id: 'button',
    name: 'Button',
    description: 'Clickable button component with various styles',
    category: 'form',
    properties: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        defaultValue: 'default',
        options: [
          { label: 'Default (Primary)', value: 'default' },
          { label: 'Secondary', value: 'secondary' },
          { label: 'Outline', value: 'outline' },
          { label: 'Ghost', value: 'ghost' },
          { label: 'Destructive', value: 'destructive' },
          { label: 'Link', value: 'link' },
        ],
      },
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        defaultValue: 'default',
        options: [
          { label: 'Small', value: 'sm' },
          { label: 'Default', value: 'default' },
          { label: 'Large', value: 'lg' },
        ],
      },
      {
        name: 'text',
        type: 'text',
        label: 'Button Text',
        defaultValue: 'Click Me',
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        defaultValue: false,
      },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    description: 'Text input field',
    category: 'form',
    properties: [
      {
        name: 'type',
        type: 'select',
        label: 'Input Type',
        defaultValue: 'text',
        options: [
          { label: 'Text', value: 'text' },
          { label: 'Email', value: 'email' },
          { label: 'Password', value: 'password' },
          { label: 'Number', value: 'number' },
        ],
      },
      {
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        defaultValue: 'Enter text...',
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        defaultValue: false,
      },
    ],
  },
  {
    id: 'textarea',
    name: 'Textarea',
    description: 'Multi-line text input',
    category: 'form',
    properties: [
      {
        name: 'placeholder',
        type: 'text',
        label: 'Placeholder',
        defaultValue: 'Enter your message...',
      },
      {
        name: 'rows',
        type: 'number',
        label: 'Rows',
        defaultValue: 3,
        min: 1,
        max: 10,
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        defaultValue: false,
      },
    ],
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Checkbox for boolean selection',
    category: 'form',
    properties: [
      {
        name: 'label',
        type: 'text',
        label: 'Label',
        defaultValue: 'Accept terms',
      },
      {
        name: 'checked',
        type: 'boolean',
        label: 'Checked',
        defaultValue: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        defaultValue: false,
      },
    ],
  },
  {
    id: 'switch',
    name: 'Switch',
    description: 'Toggle switch control',
    category: 'form',
    properties: [
      {
        name: 'label',
        type: 'text',
        label: 'Label',
        defaultValue: 'Enable notifications',
      },
      {
        name: 'checked',
        type: 'boolean',
        label: 'Checked',
        defaultValue: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        defaultValue: false,
      },
    ],
  },
  {
    id: 'slider',
    name: 'Slider',
    description: 'Range slider for numeric input',
    category: 'form',
    properties: [
      {
        name: 'value',
        type: 'slider',
        label: 'Value',
        defaultValue: 50,
        min: 0,
        max: 100,
        step: 1,
      },
      {
        name: 'min',
        type: 'number',
        label: 'Min',
        defaultValue: 0,
        min: 0,
        max: 100,
      },
      {
        name: 'max',
        type: 'number',
        label: 'Max',
        defaultValue: 100,
        min: 0,
        max: 200,
      },
      {
        name: 'disabled',
        type: 'boolean',
        label: 'Disabled',
        defaultValue: false,
      },
    ],
  },

  // DISPLAY COMPONENTS
  {
    id: 'badge',
    name: 'Badge',
    description: 'Small status or label indicator',
    category: 'display',
    properties: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        defaultValue: 'default',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Secondary', value: 'secondary' },
          { label: 'Outline', value: 'outline' },
          { label: 'Destructive', value: 'destructive' },
        ],
      },
      {
        name: 'text',
        type: 'text',
        label: 'Badge Text',
        defaultValue: 'New',
      },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    description: 'Container for content',
    category: 'display',
    properties: [
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        defaultValue: 'Card Title',
      },
      {
        name: 'description',
        type: 'text',
        label: 'Description',
        defaultValue: 'This is a card component with customizable content.',
      },
      {
        name: 'borderStyle',
        type: 'select',
        label: 'Border Style',
        defaultValue: 'default',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Emphasized (2px)', value: 'emphasized' },
          { label: 'None', value: 'none' },
        ],
      },
    ],
  },

  // NAVIGATION COMPONENTS
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'Tabbed navigation component',
    category: 'navigation',
    properties: [
      {
        name: 'tabCount',
        type: 'number',
        label: 'Number of Tabs',
        defaultValue: 3,
        min: 2,
        max: 5,
      },
      {
        name: 'tab1Label',
        type: 'text',
        label: 'Tab 1 Label',
        defaultValue: 'Account',
      },
      {
        name: 'tab2Label',
        type: 'text',
        label: 'Tab 2 Label',
        defaultValue: 'Settings',
      },
      {
        name: 'tab3Label',
        type: 'text',
        label: 'Tab 3 Label',
        defaultValue: 'Privacy',
      },
    ],
  },
  {
    id: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections',
    category: 'navigation',
    properties: [
      {
        name: 'type',
        type: 'select',
        label: 'Type',
        defaultValue: 'single',
        options: [
          { label: 'Single (one at a time)', value: 'single' },
          { label: 'Multiple (many open)', value: 'multiple' },
        ],
      },
      {
        name: 'item1Title',
        type: 'text',
        label: 'Item 1 Title',
        defaultValue: 'Is it accessible?',
      },
      {
        name: 'item2Title',
        type: 'text',
        label: 'Item 2 Title',
        defaultValue: 'Is it styled?',
      },
      {
        name: 'item3Title',
        type: 'text',
        label: 'Item 3 Title',
        defaultValue: 'Is it animated?',
      },
    ],
  },

  // FEEDBACK COMPONENTS
  {
    id: 'alert',
    name: 'Alert',
    description: 'Alert message component',
    category: 'feedback',
    properties: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        defaultValue: 'default',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Destructive', value: 'destructive' },
        ],
      },
      {
        name: 'title',
        type: 'text',
        label: 'Title',
        defaultValue: 'Heads up!',
      },
      {
        name: 'description',
        type: 'text',
        label: 'Description',
        defaultValue: 'You can add components to your app using the cli.',
      },
      {
        name: 'showIcon',
        type: 'boolean',
        label: 'Show Icon',
        defaultValue: true,
      },
    ],
  },
  {
    id: 'progress',
    name: 'Progress',
    description: 'Progress indicator bar',
    category: 'feedback',
    properties: [
      {
        name: 'value',
        type: 'slider',
        label: 'Progress Value',
        defaultValue: 60,
        min: 0,
        max: 100,
        step: 5,
      },
    ],
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'Loading placeholder skeleton',
    category: 'feedback',
    properties: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        defaultValue: 'default',
        options: [
          { label: 'Text Line', value: 'text' },
          { label: 'Circle', value: 'circle' },
          { label: 'Rectangle', value: 'rectangle' },
        ],
      },
    ],
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Hover tooltip component',
    category: 'feedback',
    properties: [
      {
        name: 'triggerText',
        type: 'text',
        label: 'Trigger Text',
        defaultValue: 'Hover me',
      },
      {
        name: 'tooltipContent',
        type: 'text',
        label: 'Tooltip Content',
        defaultValue: 'This is a tooltip',
      },
    ],
  },
  {
    id: 'dialog',
    name: 'Dialog',
    description: 'Modal dialog window',
    category: 'feedback',
    properties: [
      {
        name: 'triggerText',
        type: 'text',
        label: 'Trigger Button Text',
        defaultValue: 'Open Dialog',
      },
      {
        name: 'title',
        type: 'text',
        label: 'Dialog Title',
        defaultValue: 'Are you sure?',
      },
      {
        name: 'description',
        type: 'text',
        label: 'Dialog Description',
        defaultValue: 'This action cannot be undone.',
      },
    ],
  },
  {
    id: 'separator',
    name: 'Separator',
    description: 'Visual divider line',
    category: 'display',
    properties: [
      {
        name: 'orientation',
        type: 'select',
        label: 'Orientation',
        defaultValue: 'horizontal',
        options: [
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
        ],
      },
    ],
  },
  {
    id: 'avatar',
    name: 'Avatar',
    description: 'User avatar with fallback',
    category: 'display',
    properties: [
      {
        name: 'initials',
        type: 'text',
        label: 'Initials',
        defaultValue: 'JD',
      },
      {
        name: 'showImage',
        type: 'boolean',
        label: 'Show Image',
        defaultValue: false,
      },
    ],
  },
  {
    id: 'radiogroup',
    name: 'Radio Group',
    description: 'Radio button selection group',
    category: 'form',
    properties: [
      {
        name: 'label',
        type: 'text',
        label: 'Group Label',
        defaultValue: 'Select an option',
      },
      {
        name: 'option1',
        type: 'text',
        label: 'Option 1',
        defaultValue: 'Default',
      },
      {
        name: 'option2',
        type: 'text',
        label: 'Option 2',
        defaultValue: 'Comfortable',
      },
      {
        name: 'option3',
        type: 'text',
        label: 'Option 3',
        defaultValue: 'Compact',
      },
    ],
  },
  {
    id: 'toggle',
    name: 'Toggle',
    description: 'Toggle button component',
    category: 'form',
    properties: [
      {
        name: 'variant',
        type: 'select',
        label: 'Variant',
        defaultValue: 'default',
        options: [
          { label: 'Default', value: 'default' },
          { label: 'Outline', value: 'outline' },
        ],
      },
      {
        name: 'size',
        type: 'select',
        label: 'Size',
        defaultValue: 'default',
        options: [
          { label: 'Small', value: 'sm' },
          { label: 'Default', value: 'default' },
          { label: 'Large', value: 'lg' },
        ],
      },
      {
        name: 'text',
        type: 'text',
        label: 'Text',
        defaultValue: 'Toggle',
      },
      {
        name: 'pressed',
        type: 'boolean',
        label: 'Pressed',
        defaultValue: false,
      },
    ],
  },
];

// Categorize components
export const COMPONENT_CATEGORIES = {
  form: COMPONENT_REGISTRY.filter(c => c.category === 'form'),
  display: COMPONENT_REGISTRY.filter(c => c.category === 'display'),
  feedback: COMPONENT_REGISTRY.filter(c => c.category === 'feedback'),
  navigation: COMPONENT_REGISTRY.filter(c => c.category === 'navigation'),
};

// Helper to get component by ID
export function getComponentById(id: string): ComponentDefinition | undefined {
  return COMPONENT_REGISTRY.find(c => c.id === id);
}
