import { Button } from "./ui/button";

const YellowButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button variant={"yellow"} size={"yellow"}>
      {children}
    </Button>
  );
};
export default YellowButton;
