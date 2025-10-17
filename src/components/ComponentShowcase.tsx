import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';

interface ShowcaseCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

function ShowcaseCard({ title, subtitle, children }: ShowcaseCardProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px">
      <div className="box-border content-stretch flex flex-col gap-2 items-start pb-10 pt-0 px-0 w-full">
        <h3 className="w-full">{title}</h3>
        <p className="text-muted-foreground w-full">{subtitle}</p>
      </div>
      <div className="basis-0 grow min-h-px min-w-px w-full bg-secondary border border-border p-8 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function ComponentShowcase() {
  return (
    <div className="box-border content-stretch flex flex-col gap-20 items-start pb-20 pt-0 px-10 w-full">
      {/* Buttons Section */}
      <div className="content-stretch flex gap-4 h-[416px] items-center w-full">
        <ShowcaseCard title="Buttons" subtitle="Primary, secondary, and variant button styles">
          <div className="flex flex-col gap-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Button Sizes" subtitle="Different button dimensions">
          <div className="flex flex-col gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Disabled State" subtitle="Inactive button behavior">
          <div className="flex flex-col gap-4">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Badges" subtitle="Status and label indicators">
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ShowcaseCard>
      </div>

      {/* Form Elements Section */}
      <div className="content-stretch flex gap-4 h-[416px] items-center w-full">
        <ShowcaseCard title="Input Fields" subtitle="Text input components">
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
            <Input type="email" placeholder="Email input" />
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Checkbox" subtitle="Selection controls">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="check1" />
              <label htmlFor="check1">Default</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check2" defaultChecked />
              <label htmlFor="check2">Checked</label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="check3" disabled />
              <label htmlFor="check3">Disabled</label>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Switch" subtitle="Toggle controls">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Switch id="switch1" />
              <label htmlFor="switch1">Default</label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="switch2" defaultChecked />
              <label htmlFor="switch2">Checked</label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="switch3" disabled />
              <label htmlFor="switch3">Disabled</label>
            </div>
          </div>
        </ShowcaseCard>

        <ShowcaseCard title="Slider" subtitle="Range selection control">
          <div className="w-full max-w-xs">
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </ShowcaseCard>
      </div>

      {/* Cards Section */}
      <div className="content-stretch flex gap-4 h-[416px] items-center w-full">
        <ShowcaseCard title="Cards" subtitle="Container components for content">
          <Card className="p-6 w-full max-w-xs">
            <h3 className="mb-2">Card Title</h3>
            <p className="text-muted-foreground">
              This is a card component with some example content inside.
            </p>
          </Card>
        </ShowcaseCard>

        <ShowcaseCard title="Card with Border" subtitle="Emphasized container styles">
          <Card className="p-6 w-full max-w-xs border-2 border-primary">
            <h3 className="mb-2">Bordered Card</h3>
            <p className="text-muted-foreground">
              Cards can have different border styles for emphasis.
            </p>
          </Card>
        </ShowcaseCard>

        <ShowcaseCard title="Interactive Card" subtitle="Hover and focus states">
          <Card className="p-6 w-full max-w-xs hover:shadow-lg transition-shadow cursor-pointer">
            <h3 className="mb-2">Hover Me</h3>
            <p className="text-muted-foreground">
              This card has hover effects applied.
            </p>
          </Card>
        </ShowcaseCard>

        <ShowcaseCard title="Card Layout" subtitle="Flexible content arrangement">
          <Card className="w-full max-w-xs overflow-hidden">
            <div className="h-32 bg-muted" />
            <div className="p-6">
              <h3 className="mb-2">Image Card</h3>
              <p className="text-muted-foreground">
                Cards with image headers and content.
              </p>
            </div>
          </Card>
        </ShowcaseCard>
      </div>
    </div>
  );
}
