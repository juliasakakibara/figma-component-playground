import { useState } from 'react';
import { ComponentControlPanel } from './ComponentControlPanel';
import { ComponentPreview } from './ComponentPreview';
import { COMPONENT_REGISTRY } from './ComponentRegistry';

export function InteractivePlayground() {
  const [selectedComponentId, setSelectedComponentId] = useState<string>(COMPONENT_REGISTRY[0].id);
  const [componentProps, setComponentProps] = useState<Record<string, any>>(() => {
    // Initialize with default values for the first component
    const component = COMPONENT_REGISTRY[0];
    const defaults: Record<string, any> = {};
    component.properties.forEach(prop => {
      defaults[prop.name] = prop.defaultValue;
    });
    return defaults;
  });

  const handleComponentChange = (componentId: string) => {
    setSelectedComponentId(componentId);
    
    // Reset props to defaults for the new component
    const component = COMPONENT_REGISTRY.find(c => c.id === componentId);
    if (component) {
      const defaults: Record<string, any> = {};
      component.properties.forEach(prop => {
        defaults[prop.name] = prop.defaultValue;
      });
      setComponentProps(defaults);
    }
  };

  const handlePropChange = (propName: string, value: any) => {
    setComponentProps(prev => ({
      ...prev,
      [propName]: value,
    }));
  };

  return (
    <div className="w-full flex-1 flex flex-col lg:flex-row gap-0 border-t border-border">
      {/* Control Panel - Left Side */}
      <div className="w-full lg:w-80 xl:w-96 border-b lg:border-b-0 lg:border-r border-border bg-card">
        <ComponentControlPanel
          selectedComponentId={selectedComponentId}
          componentProps={componentProps}
          onComponentChange={handleComponentChange}
          onPropChange={handlePropChange}
        />
      </div>

      {/* Preview Canvas - Right Side */}
      <div className="flex-1 bg-background min-h-[400px] lg:min-h-0">
        <ComponentPreview
          componentId={selectedComponentId}
          props={componentProps}
        />
      </div>
    </div>
  );
}
