import {
  HeaderProps,
  HeaderDefaultAdditionalButtonsItem,
  HeaderDefaultBreadcrumbsItem,
  HeaderDefaultLanguagesItem,
  HeaderDefaultMenuItem,
  HeaderDefaultNotificationAction,
  HeaderDefaultNotificationGroup,
  HeaderDefaultNotificationItem,
  HeaderDefaultSelectMenuItem,
  HeaderDefaultSocialMediaItem,
  HeaderDefaultTileMenuItem,
} from '@consta/header/Header';

export type Init = <
  // Menu
  MENU_ITEM = HeaderDefaultMenuItem,
  // Notifications
  NOTIFICATION_ITEM = HeaderDefaultNotificationItem,
  NOTIFICATION_GROUP = HeaderDefaultNotificationGroup,
  NOTIFICATION_ACTION = HeaderDefaultNotificationAction,
  NOTIFICATION_GROUP_BY_DAY extends boolean = false,
  // TileMenu
  TILE_MENU_ITEM = HeaderDefaultTileMenuItem,
  // Breadcrumbs
  BREADCRUMBS_ITEM = HeaderDefaultBreadcrumbsItem,
  // SecondaryMenu
  SECONDARY_MENU_ITEM = HeaderDefaultSelectMenuItem,
  // ButtonMenu
  SOCIAL_MEDIA_ITEM = HeaderDefaultSocialMediaItem,
  // Languages
  LANGUAGES_ITEM = HeaderDefaultLanguagesItem,
  // AdditionalButtons
  ADDITIONAL_BUTTONS_ITEM = HeaderDefaultAdditionalButtonsItem,
>(
  props: HeaderProps<
    MENU_ITEM,
    NOTIFICATION_ITEM,
    NOTIFICATION_GROUP,
    NOTIFICATION_ACTION,
    NOTIFICATION_GROUP_BY_DAY,
    TILE_MENU_ITEM,
    BREADCRUMBS_ITEM,
    SECONDARY_MENU_ITEM,
    SOCIAL_MEDIA_ITEM,
    LANGUAGES_ITEM,
    ADDITIONAL_BUTTONS_ITEM
  >,
  element: HTMLElement | null,
) => (newProps: HeaderProps) => void;
