export interface ComuProps {
  method: MethodType;
  url: string;
}

type MethodType = "get" | "post" | "patch" | "put" | "delete";
