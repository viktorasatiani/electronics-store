import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { FilterRadioGroup } from "./filterRadioGroup";

export function FilterHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>Sort By</HoverCardTrigger>
      <HoverCardContent>
        <FilterRadioGroup />
      </HoverCardContent>
    </HoverCard>
  );
}
