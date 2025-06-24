
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";


export const NavigationBarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Platform"},
    { label: "Solutions"},
    { label: "Developers"},
    { label: "Resources"},
    { label: "Pricing" },
  ];

  return (
    <header className="flex w-full items-center justify-between px-16 py-4 bg-grayscaledark-01">
      <img
        className="h-5 w-[128.81px]"
        alt="Logo"
        src="https://c.animaapp.com/mc99rq32MYYUAu/img/logo-1.svg"
      />

      <NavigationMenu>
        <NavigationMenuList className="flex gap-8">
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <NavigationMenuLink className="flex items-center gap-1 opacity-[0.84] font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]">
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="opacity-[0.84] px-3 py-2 font-sm-regular font-[number:var(--sm-regular-font-weight)] text-grayscaledark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]"
        >
          Log in
        </Button>

        <Button className="relative px-3 py-2 bg-branddark-09 rounded-[10px] overflow-hidden font-sm-regular font-[number:var(--sm-regular-font-weight)] text-branddark-12 text-[length:var(--sm-regular-font-size)] tracking-[var(--sm-regular-letter-spacing)] leading-[var(--sm-regular-line-height)] whitespace-nowrap [font-style:var(--sm-regular-font-style)]">
          <div className="w-8 h-8 -top-3.5 left-[43px] rounded-2xl rotate-[145.28deg] blur-[15px] absolute bg-brand-06 opacity-80" />
          Schedule a demo
        </Button>
      </div>
    </header>
  );
};
