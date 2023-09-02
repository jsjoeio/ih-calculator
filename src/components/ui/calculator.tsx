import { Button } from '@/components/ui/button';

export function Calculator() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log('hello world');
        }}
      >
        Calculate
      </Button>
    </div>
  );
}
