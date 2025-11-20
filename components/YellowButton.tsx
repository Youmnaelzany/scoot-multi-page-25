import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const YellowButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Button
      variant={"yellow"}
      size={"lg"}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </Button>
  );
};
export default YellowButton;
