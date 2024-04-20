import { PAGES_PUBLIC } from "../pages-url.config"
import { MenuItemsType } from "./menu-items.types"

class MenuItemsMain {
  items: MenuItemsType[] = [
    {
      label: 'Home',
      url: PAGES_PUBLIC.HOME
    }
  ]
}

export const PAGES = new MenuItemsMain()
