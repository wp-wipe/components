import { Context } from "../Tools/Context";
export const EditOnly = ({ children }: { children: any }) => {
  const context = new Context().get();
  return context === "edit" ? <>{children}</> : null;
};
