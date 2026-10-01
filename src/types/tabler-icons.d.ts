declare module "@tabler/icons-react" {
  import { FC, SVGProps } from "react";
  
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    stroke?: number;
    color?: string;
    fill?: string;
  }
  
  type Icon = FC<IconProps>;
  
  export const IconArrowLeft: Icon;
  export const IconArrowRight: Icon;
  export const IconQuote: Icon;
  export const IconBrandInstagram: Icon;
  export const IconExternalLink: Icon;
}
