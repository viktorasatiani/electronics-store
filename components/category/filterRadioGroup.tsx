import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useFilterSort } from "@/context/filterSortContext";

export function FilterRadioGroup() {
  const { filterValue, updateValue } = useFilterSort();

  return (
    <RadioGroup value={filterValue} onValueChange={updateValue}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="lowtohigh" id="r1" />
        <Label htmlFor="r1">Low to High</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="hightolow" id="r2" />
        <Label htmlFor="r2">High to Low</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="atoz" id="r3" />
        <Label htmlFor="r3">A to Z</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="ztoa" id="r4" />
        <Label htmlFor="r4">Z to A</Label>
      </div>
    </RadioGroup>
  );
}
