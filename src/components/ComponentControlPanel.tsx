import { useState, useMemo, useRef, useEffect } from 'react';
import { COMPONENT_REGISTRY, ComponentProperty, getComponentById } from './ComponentRegistry';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Label } from './ui/label';
import { ScrollArea } from './ui/scroll-area';
import { Search } from 'lucide-react@0.487.0';
import { Button } from './ui/button';

interface ComponentControlPanelProps {
  selectedComponentId: string;
  componentProps: Record<string, any>;
  onComponentChange: (componentId: string) => void;
  onPropChange: (propName: string, value: any) => void;
}

export function ComponentControlPanel({
  selectedComponentId,
  componentProps,
  onComponentChange,
  onPropChange,
}: ComponentControlPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedComponent = getComponentById(selectedComponentId);

  // Filter components based on search query
  const filteredComponents = useMemo(() => {
    if (!searchQuery.trim()) {
      return COMPONENT_REGISTRY;
    }
    const query = searchQuery.toLowerCase();
    return COMPONENT_REGISTRY.filter(
      (component) =>
        component.name.toLowerCase().includes(query) ||
        component.description.toLowerCase().includes(query) ||
        component.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const renderPropertyControl = (property: ComponentProperty) => {
    const value = componentProps[property.name];

    switch (property.type) {
      case 'select':
        return (
          <div key={property.name} className="space-y-2">
            <Label className="text-primary">{property.label}</Label>
            <Select value={value} onValueChange={(val) => onPropChange(property.name, val)}>
              <SelectTrigger className="border-primary text-primary">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {property.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );

      case 'text':
        return (
          <div key={property.name} className="space-y-2">
            <Label className="text-primary">{property.label}</Label>
            <Input
              type="text"
              value={value}
              onChange={(e) => onPropChange(property.name, e.target.value)}
              className="border-primary text-primary"
            />
          </div>
        );

      case 'number':
        return (
          <div key={property.name} className="space-y-2">
            <Label className="text-primary">{property.label}</Label>
            <Input
              type="number"
              value={value}
              min={property.min}
              max={property.max}
              onChange={(e) => onPropChange(property.name, parseInt(e.target.value, 10))}
              className="border-primary text-primary"
            />
          </div>
        );

      case 'boolean':
        return (
          <div key={property.name} className="flex items-center gap-3">
            <Checkbox
              id={property.name}
              checked={value}
              onCheckedChange={(checked) => onPropChange(property.name, checked)}
              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor={property.name} className="cursor-pointer text-primary">
              {property.label}
            </Label>
          </div>
        );

      case 'slider':
        return (
          <div key={property.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <Label className="text-primary">{property.label}</Label>
              <span className="text-muted-foreground">{value}</span>
            </div>
            <Slider
              value={[value]}
              onValueChange={(vals) => onPropChange(property.name, vals[0])}
              min={property.min}
              max={property.max}
              step={property.step}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-full text-primary">
      {/* Header */}
      <div className="p-6 border-b border-primary space-y-4">
        <h3 className="text-primary">Component</h3>
        
        {/* Search Input with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-primary" />
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search components..."
              value={searchQuery || selectedComponent?.name || ''}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsDropdownOpen(true);
              }}
              onFocus={() => {
                setSearchQuery('');
                setIsDropdownOpen(true);
              }}
              className="pl-9 border-primary text-primary placeholder:text-muted-foreground"
            />
          </div>

          {/* Component Dropdown List */}
          {isDropdownOpen && (
            <div className="absolute z-50 w-full mt-2 space-y-1 max-h-64 overflow-y-auto border border-primary bg-popover shadow-lg" style={{ borderRadius: '0px' }}>
              {filteredComponents.length > 0 ? (
                filteredComponents.map((component) => (
                  <Button
                    key={component.id}
                    variant={selectedComponentId === component.id ? 'secondary' : 'ghost'}
                    className="w-full justify-start px-3 py-2 h-auto text-primary"
                    style={{ borderRadius: '0px' }}
                    onClick={() => {
                      onComponentChange(component.id);
                      setSearchQuery('');
                      setIsDropdownOpen(false);
                      inputRef.current?.blur();
                    }}
                  >
                    <div className="text-left">
                      <div className="text-primary">{component.name}</div>
                      <div className="text-muted-foreground">{component.description}</div>
                    </div>
                  </Button>
                ))
              ) : (
                <div className="p-4 text-center text-muted-foreground">
                  No components found
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Properties */}
      <ScrollArea className="flex-1">
        <div className="p-6 space-y-6">
          <div>
            <h4 className="mb-4 text-primary">Properties</h4>
            <div className="space-y-4">
              {selectedComponent?.properties.map(renderPropertyControl)}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
