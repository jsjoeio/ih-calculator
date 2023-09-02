import { Button } from '@/components/ui/button';
import { calculateSales } from '@/lib/utils';

export function Calculator() {
  return (
    <div>
      <Button
        onClick={() => {
          const result = calculateSales({
            totalTimeInMonths: 3,
            targetAmountInUSD: 50000,
            perSaleAmountInUSD: 100,
          });
          console.log(result);
        }}
      >
        Calculate
      </Button>
    </div>
  );
}
