import { Link } from 'react-router-dom'
import { useMerchCart } from '../context/MerchCartContext'
import { useLanguage } from '../i18n/LanguageContext'

export default function MerchCartBar() {
  const { itemCount } = useMerchCart()
  const { t } = useLanguage()
  if (!itemCount) return null

  return (
    <div className="border-b border-deep-green/10 bg-sand/90 px-4 py-2 text-center sm:px-6">
      <Link
        to="/shop/cart"
        className="inline-flex min-h-[44px] min-w-0 items-center justify-center px-3 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-deep-green underline-offset-4 transition hover:text-terracotta hover:underline"
      >
        {t('shop.viewCart')} · {itemCount} {itemCount === 1 ? t('shop.itemSingular') : t('shop.itemPlural')}
      </Link>
    </div>
  )
}
