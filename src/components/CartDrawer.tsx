import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, Minus, Trash2, ShieldCheck, Sparkles, Check, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartSubtotal,
    clearCart,
  } = useCart()

  const [promoCode, setPromoCode] = useState('')
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const freeShippingThreshold = 35
  const progressPercent = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal)

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    if (promoCode.trim().toUpperCase() === 'CITRUS20' || promoCode.trim().toUpperCase() === 'PROBIOTIC') {
      setAppliedDiscount(0.2)
    } else {
      alert('Try promo code "CITRUS20" for 20% off!')
    }
  }

  const discountAmount = cartSubtotal * appliedDiscount
  const finalTotal = Math.max(0, cartSubtotal - discountAmount)

  const handleCheckout = () => {
    setIsCheckingOut(true)
    setTimeout(() => {
      setIsCheckingOut(false)
      setOrderComplete(true)
      clearCart()
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-[#FAF6EF] shadow-2xl h-full flex flex-col z-10 border-l border-[#E2D9CC]"
          >
            {/* Drawer Header */}
            <div className="px-6 py-4 border-b border-[#E8DFD3] flex items-center justify-between bg-[#F4EFE6]">
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-xl text-[#2B2824]">
                  Your Botanical Bag
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#E5ECE7] text-[#3A5A40] font-bold">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="px-6 py-3 bg-[#EAF0EB] border-b border-[#D5E2D7]">
              <div className="flex justify-between items-center text-xs font-mono text-[#324B37] mb-1.5 font-semibold">
                <span>
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-[#2D6A4F] flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> FREE EXPEDITED SHIPPING UNLOCKED!
                    </span>
                  ) : (
                    `Add $${remainingForFreeShipping.toFixed(2)} more for FREE SHIPPING`
                  )}
                </span>
                <span>{progressPercent.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/70 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#52B788] to-[#2D6A4F] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {orderComplete ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAF0EB] text-[#2D6A4F] border border-[#B7E4C7] mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-serif font-black text-[#2B2824]">
                    Order Placed Successfully!
                  </h4>
                  <p className="text-xs text-stone-600 font-sans max-w-xs mx-auto leading-relaxed">
                    Thank you for choosing Dentbliss! Your freshly crafted citrus probiotic kit is being prepared for dispatch.
                  </p>
                  <button
                    onClick={() => {
                      setOrderComplete(false)
                      setIsCartOpen(false)
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#2B2824] text-white rounded-xl text-xs font-mono font-bold tracking-wider"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : cart.length === 0 ? (
                <div className="text-center py-16 text-stone-500 font-sans space-y-3">
                  <p className="text-sm">Your botanical cart is currently empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="px-5 py-2 rounded-xl bg-[#E8A952] text-stone-950 font-mono text-xs font-bold"
                  >
                    EXPLORE BOTANICALS
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm flex items-center justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-serif font-bold text-[#2B2824]">
                          {item.name}
                        </h4>
                        {item.isSubscription && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#FFF4E5] text-[#D97706] border border-[#FDE68A] font-bold">
                            AUTOSHIP -20%
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#7C5A38] font-sans mt-0.5">
                        Flavor: {item.flavor}
                      </p>
                      <div className="text-xs font-mono font-bold text-[#2B2824] mt-2">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#DCD3C7] rounded-lg bg-[#FAF6EF] p-0.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 text-stone-600 hover:text-stone-950"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 text-stone-600 hover:text-stone-950"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-stone-400 hover:text-rose-600 transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {!orderComplete && cart.length > 0 && (
              <div className="p-6 border-t border-[#E8DFD3] bg-[#F4EFE6] space-y-3">
                {/* Promo Code Form */}
                <form onSubmit={applyPromo} className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder='Promo code (e.g. "CITRUS20")'
                    className="flex-1 px-3 py-1.5 text-xs bg-white border border-[#D8CEBE] rounded-lg text-stone-800 uppercase font-mono placeholder:normal-case focus:outline-none focus:border-[#E8A952]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-[#2B2824] text-white text-xs font-mono font-bold rounded-lg hover:bg-stone-800 transition-colors"
                  >
                    APPLY
                  </button>
                </form>

                {appliedDiscount > 0 && (
                  <div className="text-xs font-mono text-[#2D6A4F] flex justify-between font-semibold">
                    <span>Discount Applied (20% OFF):</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between items-center text-xs font-sans text-stone-600 pt-1">
                  <span>Shipping:</span>
                  <span className="font-mono text-stone-800 font-bold">
                    {remainingForFreeShipping === 0 ? 'FREE' : '$4.95'}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-[#E2D9CC]">
                  <span className="text-base font-serif font-black text-[#2B2824]">
                    Estimated Total:
                  </span>
                  <span className="text-xl font-serif font-black text-[#2B2824]">
                    ${(finalTotal + (remainingForFreeShipping === 0 ? 0 : 4.95)).toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#F4A261] via-[#E76F51] to-[#D97706] text-white font-serif font-bold text-sm tracking-wide shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <span>Securing Fresh Batch...</span>
                  ) : (
                    <>
                      <span>PROCEED TO SECURE CHECKOUT</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[10.5px] font-sans text-stone-500 text-center pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#3A5A40]" />
                  <span>30-Day Zero-Risk Smile Guarantee • 100% Carbon Neutral</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
