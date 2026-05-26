// next-intl message type augmentation — provides full type-safety for t() calls
type Messages = typeof import('./messages/en.json')

declare interface IntlMessages extends Messages {}
