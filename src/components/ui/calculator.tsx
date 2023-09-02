import { Button } from '@/components/ui/button';

export function Calculator() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log('goodbye world');
        }}
      >
        Calculate
      </Button>
    </div>
  );
}
