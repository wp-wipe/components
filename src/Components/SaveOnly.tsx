import { Context } from "../Tools/Context";
export const SaveOnly = ({ children }: { children: any }) => {
  const context = new Context().get();
  return context === "save" ? <>{children}</> : null;
};
