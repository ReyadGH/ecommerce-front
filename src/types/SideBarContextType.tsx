export type SideBarContextType = {
  status: SideBarContextStateType;
  child: SideBarContextChildType;
};

export type SideBarContextStateType = {
  get: boolean;
  set: (state: boolean) => void;
};

export type SideBarContextChildType = {
  get: () => any | undefined;
  set: (child: JSX.Element | Element) => void;
};
