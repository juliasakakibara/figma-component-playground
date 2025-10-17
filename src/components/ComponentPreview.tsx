import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';
import { Progress } from './ui/progress';
import { Skeleton } from './ui/skeleton';
import { Tooltip, TooltipTrigger, TooltipContent } from './ui/tooltip';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog';
import { Separator } from './ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Toggle } from './ui/toggle';
import { Terminal, AlertCircle, Bold } from 'lucide-react@0.487.0';

interface ComponentPreviewProps {
  componentId: string;
  props: Record<string, any>;
}

export function ComponentPreview({ componentId, props }: ComponentPreviewProps) {
  const renderComponent = () => {
    switch (componentId) {
      case 'button':
        return (
          <Button
            variant={props.variant}
            size={props.size}
            disabled={props.disabled}
          >
            {props.text}
          </Button>
        );

      case 'input':
        return (
          <div className="w-full max-w-sm">
            <Input
              type={props.type}
              placeholder={props.placeholder}
              disabled={props.disabled}
            />
          </div>
        );

      case 'textarea':
        return (
          <div className="w-full max-w-sm">
            <Textarea
              placeholder={props.placeholder}
              rows={props.rows}
              disabled={props.disabled}
            />
          </div>
        );

      case 'checkbox':
        return (
          <div className="flex items-center gap-3">
            <Checkbox
              id="preview-checkbox"
              checked={props.checked}
              disabled={props.disabled}
            />
            <Label htmlFor="preview-checkbox">{props.label}</Label>
          </div>
        );

      case 'switch':
        return (
          <div className="flex items-center gap-3">
            <Switch
              id="preview-switch"
              checked={props.checked}
              disabled={props.disabled}
            />
            <Label htmlFor="preview-switch">{props.label}</Label>
          </div>
        );

      case 'slider':
        return (
          <div className="w-full max-w-sm space-y-2">
            <div className="flex items-center justify-between">
              <Label>Value: {props.value}</Label>
            </div>
            <Slider
              value={[props.value]}
              min={props.min}
              max={props.max}
              disabled={props.disabled}
            />
          </div>
        );

      case 'badge':
        return (
          <Badge variant={props.variant}>
            {props.text}
          </Badge>
        );

      case 'card':
        return (
          <Card 
            className={`w-full max-w-sm ${
              props.borderStyle === 'emphasized' ? 'border-2' : 
              props.borderStyle === 'none' ? 'border-0' : ''
            }`}
          >
            <CardHeader>
              <CardTitle>{props.title}</CardTitle>
              <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here. This is an example of a customizable card component.</p>
            </CardContent>
          </Card>
        );

      case 'tabs':
        const tabCount = props.tabCount || 3;
        return (
          <div className="w-full max-w-md">
            <Tabs defaultValue="tab1">
              <TabsList className="w-full">
                {tabCount >= 1 && <TabsTrigger value="tab1">{props.tab1Label}</TabsTrigger>}
                {tabCount >= 2 && <TabsTrigger value="tab2">{props.tab2Label}</TabsTrigger>}
                {tabCount >= 3 && <TabsTrigger value="tab3">{props.tab3Label}</TabsTrigger>}
                {tabCount >= 4 && <TabsTrigger value="tab4">Tab 4</TabsTrigger>}
                {tabCount >= 5 && <TabsTrigger value="tab5">Tab 5</TabsTrigger>}
              </TabsList>
              <TabsContent value="tab1" className="p-4">
                <p>Content for {props.tab1Label}</p>
              </TabsContent>
              <TabsContent value="tab2" className="p-4">
                <p>Content for {props.tab2Label}</p>
              </TabsContent>
              <TabsContent value="tab3" className="p-4">
                <p>Content for {props.tab3Label}</p>
              </TabsContent>
              {tabCount >= 4 && (
                <TabsContent value="tab4" className="p-4">
                  <p>Content for Tab 4</p>
                </TabsContent>
              )}
              {tabCount >= 5 && (
                <TabsContent value="tab5" className="p-4">
                  <p>Content for Tab 5</p>
                </TabsContent>
              )}
            </Tabs>
          </div>
        );

      case 'accordion':
        return (
          <div className="w-full max-w-md">
            <Accordion type={props.type} collapsible={props.type === 'single'}>
              <AccordionItem value="item-1">
                <AccordionTrigger>{props.item1Title}</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>{props.item2Title}</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match your design system.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>{props.item3Title}</AccordionTrigger>
                <AccordionContent>
                  Yes. It is animated by default, but you can disable it if needed.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        );

      case 'alert':
        const Icon = props.variant === 'destructive' ? AlertCircle : Terminal;
        return (
          <div className="w-full max-w-md">
            <Alert variant={props.variant}>
              {props.showIcon && <Icon />}
              <AlertTitle>{props.title}</AlertTitle>
              <AlertDescription>{props.description}</AlertDescription>
            </Alert>
          </div>
        );

      case 'progress':
        return (
          <div className="w-full max-w-md space-y-2">
            <div className="flex items-center justify-between">
              <Label>Progress: {props.value}%</Label>
            </div>
            <Progress value={props.value} />
          </div>
        );

      case 'skeleton':
        return (
          <div className="w-full max-w-md space-y-3">
            {props.variant === 'text' && (
              <>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </>
            )}
            {props.variant === 'circle' && (
              <Skeleton className="size-16 rounded-full" />
            )}
            {props.variant === 'rectangle' && (
              <Skeleton className="h-32 w-full" />
            )}
          </div>
        );

      case 'tooltip':
        return (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">{props.triggerText}</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{props.tooltipContent}</p>
            </TooltipContent>
          </Tooltip>
        );

      case 'dialog':
        return (
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">{props.triggerText}</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{props.title}</DialogTitle>
                <DialogDescription>{props.description}</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button>Continue</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        );

      case 'separator':
        return (
          <div className={props.orientation === 'vertical' ? 'flex h-32 items-center' : 'w-full max-w-md space-y-4'}>
            {props.orientation === 'horizontal' ? (
              <>
                <div><p>Section 1</p></div>
                <Separator orientation={props.orientation} />
                <div><p>Section 2</p></div>
              </>
            ) : (
              <>
                <div><p>Left</p></div>
                <Separator orientation={props.orientation} />
                <div><p>Right</p></div>
              </>
            )}
          </div>
        );

      case 'avatar':
        return (
          <Avatar>
            {props.showImage && (
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
            )}
            <AvatarFallback>{props.initials}</AvatarFallback>
          </Avatar>
        );

      case 'radiogroup':
        return (
          <div className="space-y-3">
            <Label>{props.label}</Label>
            <RadioGroup defaultValue="option1">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">{props.option1}</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">{props.option2}</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="option3" id="option3" />
                <Label htmlFor="option3">{props.option3}</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 'toggle':
        return (
          <Toggle
            variant={props.variant}
            size={props.size}
            pressed={props.pressed}
            aria-label="Toggle"
          >
            <Bold className="size-4 mr-2" />
            {props.text}
          </Toggle>
        );

      default:
        return (
          <div className="text-muted-foreground">
            Component preview not available
          </div>
        );
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-8">
      <div className="flex items-center justify-center min-h-[200px]">
        {renderComponent()}
      </div>
    </div>
  );
}
