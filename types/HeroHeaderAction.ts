export interface HeroHeaderAction {
  label: string;
  variant: "client" | "nomad";
  callback: () => void;
}
